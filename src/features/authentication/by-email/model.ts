import { AxiosError } from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { modelFactory } from 'effector-factorio'
import { createForm } from 'effector-forms'
import * as yup from 'yup'
import { signInClicked } from '@/entities/session/model/sign-in'
import { internalApi } from '@/shared/api'
import { createRule } from '@/shared/lib/create-yup-rule'
import { getUserDeviceData } from '@/shared/lib/get-user-device-data'

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
            schema: yup
              .string()
              .email({ key: 'field.email' })
              .required({ key: 'field.required' }),
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
            schema: yup.string().required('field.required'),
          }),
        ],
      },
    },
  })

  const returnToPrevStepClicked = createEvent()

  const sendCodeFx = createEffect<{ email: string }, void, AxiosError>(
    async ({ email }) => {
      await internalApi.auth.signInSendCode({ email })
    }
  )

  const checkCodeFx = createEffect<
    { email: string; code: string },
    void,
    AxiosError
  >(async ({ email, code }) => {
    await internalApi.auth.signInCheckCode({
      email,
      code,
      device: getUserDeviceData(),
    })
  })

  const $currentSignInStep = createStore<SignInSteps>('sendCode')
    .on(sendCodeFx.done, () => 'checkCode')
    .on(returnToPrevStepClicked, () => 'sendCode')

  sample({
    clock: sendCodeForm.formValidated,
    target: sendCodeFx,
  })

  sample({
    clock: checkCodeForm.formValidated,
    source: {
      email: sendCodeForm.fields.email.$value,
      code: checkCodeForm.fields.code.$value,
    },
    target: checkCodeFx,
  })

  sample({
    clock: checkCodeFx.done,
    target: signInClicked,
  })

  return {
    $currentSignInStep,
    checkCodeForm,
    sendCodeForm,
    sendCodeFx,
    checkCodeFx,
    returnToPrevStepClicked,
  }
})
