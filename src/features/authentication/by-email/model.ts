import {
  createJsonMutation,
  declareParams,
  unknownContract,
} from '@farfetched/core'
import { createEvent, createStore, sample } from 'effector'
import { modelFactory } from 'effector-factorio'
import { createForm } from 'effector-forms'
import { z } from 'zod'
import { signInClicked } from '@/entities/session'
import {
  checkCodeUrl,
  sendCodeUrl,
} from '@/features/authentication/by-email/api'
import { ServerErrorResponse } from '@/shared/api/internal/types'
import { createRule } from '@/shared/lib/create-zod-rule'

type SignInSteps = 'sendCode' | 'checkCode'

export const createByEmailModel = modelFactory(() => {
  const sendCodeForm = createForm({
    validateOn: ['submit'],
    fields: {
      email: {
        init: '',
        rules: [
          createRule<string>({
            name: 'email',
            schema: z.string().email(),
          }),
        ],
      },
    },
  })

  const checkCodeForm = createForm({
    validateOn: ['submit'],
    fields: {
      code: {
        init: '',
        rules: [
          createRule<string>({
            name: 'code',
            schema: z.string(),
          }),
        ],
      },
    },
  })

  const sendCodeMutation = createJsonMutation({
    params: declareParams<{ email: string }>(),
    request: {
      method: 'POST',
      url: sendCodeUrl,
      body: (params) => params,
    },
    response: {
      contract: unknownContract,
      status: { expected: 200 },
    },
  })

  const checkCodeMutation = createJsonMutation({
    params: declareParams<{ email: string; code: string }>(),
    request: {
      method: 'POST',
      url: checkCodeUrl,
      body: (params) => params,
    },
    response: {
      contract: unknownContract,
      status: {
        expected: 200,
      },
    },
  })

  const $sendCodeFormError = createStore<ServerErrorResponse | null>(null)
  const $checkCodeFormError = createStore<ServerErrorResponse | null>(null)

  const returnToPrevStepClicked = createEvent()

  const $currentSignInStep = createStore<SignInSteps>('sendCode')
    .on(sendCodeMutation.finished.success, () => 'checkCode')
    .on(returnToPrevStepClicked, () => 'sendCode')

  sample({
    clock: sendCodeForm.formValidated,
    target: sendCodeMutation.start,
  })

  sample({
    clock: checkCodeForm.formValidated,
    source: {
      email: sendCodeForm.fields.email.$value,
      code: checkCodeForm.fields.code.$value,
    },
    target: checkCodeMutation.start,
  })

  sample({
    clock: checkCodeMutation.finished.success,
    target: signInClicked,
  })

  sample({
    clock: checkCodeMutation.finished.failure,
    fn: (failData) => {
      if (failData.error.errorType === 'HTTP') {
        return failData.error.response as unknown as ServerErrorResponse
      }
      return null
    },
    target: $checkCodeFormError,
  })

  sample({
    clock: sendCodeMutation.finished.failure,
    fn: (failData) => {
      if (failData.error.errorType === 'HTTP') {
        return failData.error.response as unknown as ServerErrorResponse
      }
      return null
    },
    target: $sendCodeFormError,
  })

  $sendCodeFormError.reset(sendCodeForm.$values.updates)
  $checkCodeFormError.reset(checkCodeForm.$values.updates)

  return {
    $currentSignInStep,
    $sendCodeFormError,
    $checkCodeFormError,
    checkCodeForm,
    sendCodeForm,
    sendCodeMutation,
    checkCodeMutation,
    returnToPrevStepClicked,
  }
})
