import {
  createJsonMutation,
  declareParams,
  unknownContract,
} from '@farfetched/core'
import { createStore, sample } from 'effector'
import { modelFactory } from 'effector-factorio'
import { createForm } from 'effector-forms'
import { z } from 'zod'
import { signInClicked } from '@/entities/session'
import { signInByPasswordUrl } from '@/features/authentication/by-password/api'
import { ServerErrorResponse } from '@/shared/api/internal/types'
import { createRule } from '@/shared/lib/create-zod-rule'

export const createByPasswordModel = modelFactory(() => {
  const $formError = createStore<ServerErrorResponse | null>(null)

  const byPasswordForm = createForm({
    filter: $formError.map((error) => error === null),
    validateOn: ['submit'],
    fields: {
      email: {
        init: '',
        rules: [
          createRule<string>({
            name: 'email',
            schema: z.string(),
          }),
        ],
      },
      password: {
        init: '',
        rules: [
          createRule<string>({
            name: 'password',
            schema: z.string(),
          }),
        ],
      },
    },
  })

  $formError.reset(byPasswordForm.$values.updates)

  const signInByPasswordMutation = createJsonMutation({
    params: declareParams<{
      email: string
      password: string
      device: string
    }>(),
    request: {
      method: 'POST',
      url: signInByPasswordUrl,
      body: (params) => params,
    },
    response: {
      contract: unknownContract,
      status: {
        expected: 200,
      },
    },
  })

  const $userDevice = createStore<string>('Unknown')

  sample({
    clock: byPasswordForm.formValidated,
    source: {
      email: byPasswordForm.fields.email.$value,
      password: byPasswordForm.fields.password.$value,
      device: $userDevice,
    },
    target: signInByPasswordMutation.start,
  })

  sample({
    clock: signInByPasswordMutation.finished.success,
    target: signInClicked,
  })

  sample({
    clock: signInByPasswordMutation.finished.failure,
    fn: (failData) => {
      if (failData.error.errorType === 'HTTP') {
        return failData.error.response as unknown as ServerErrorResponse
      }
      return null
    },
    target: $formError,
  })

  // sample({
  //   clock: signInByPasswordMutation.finished.failure,
  //   filter: (failData) => {
  //     if (
  //       failData.error.errorType === 'HTTP' &&
  //       (failData.error.response as unknown as ServerErrorResponse).fields
  //     ) {
  //       return true
  //     }
  //     return false
  //   },
  //   fn: (failData) => {
  //     return (failData.error.response as unknown as ServerErrorResponse).fields
  //   },
  // })

  $formError.reset(byPasswordForm.$values.updates)

  return {
    signInByPasswordMutation,
    byPasswordForm,
    $formError,
  }
})
