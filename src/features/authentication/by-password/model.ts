import { AxiosError } from 'axios'
import { createEffect, createStore, sample } from 'effector'
import { modelFactory } from 'effector-factorio'
import { createForm } from 'effector-forms'
import * as yup from 'yup'
import { signInClicked } from '@/entities/session'
import { internalApi } from '@/shared/api'
import { InternalApiError } from '@/shared/api/internal/types'
import { createRule } from '@/shared/lib/create-yup-rule'
import { getUserDeviceData } from '@/shared/lib/get-user-device-data'

export const createByPasswordModel = modelFactory(() => {
  const signInByPasswordForm = createForm({
    validateOn: ['submit'],
    fields: {
      email: {
        init: '',
        rules: [
          createRule<string>({
            name: 'email',
            schema: yup
              .string()
              .required({ key: 'field.required' })
              .email({ key: 'field.email' }),
          }),
        ],
      },
      password: {
        init: '',
        rules: [
          createRule<string>({
            name: 'password',
            schema: yup.string().required({ key: 'field.required' }),
          }),
        ],
      },
    },
  })

  const signInByPasswordFx = createEffect<
    { email: string; password: string },
    void,
    AxiosError<InternalApiError>
  >(async ({ email, password }) => {
    await internalApi.auth.signInWithPassword({
      email,
      password,
      device: getUserDeviceData(),
    })
  })

  const $signInByPasswordFormStatusError = createStore<InternalApiError | null>(
    null
  )

  sample({
    clock: signInByPasswordFx.failData,
    fn: (error) => (error.response?.data ? error.response.data : null),
    target: $signInByPasswordFormStatusError,
  })

  sample({
    clock: signInByPasswordForm.formValidated,
    target: signInByPasswordFx,
  })

  sample({
    clock: signInByPasswordFx.done,
    target: signInClicked,
  })

  return {
    signInByPasswordFx,
    signInByPasswordForm,
    $signInByPasswordFormStatusError,
  }
})
