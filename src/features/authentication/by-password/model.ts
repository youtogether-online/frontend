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
  const byPasswordForm = createForm({
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

  const byPasswordFx = createEffect<
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

  const $byPasswordFormStatus = createStore<InternalApiError | null>(null)

  sample({
    clock: byPasswordFx.failData,
    fn: (error) => (error.response?.data ? error.response.data : null),
    target: $byPasswordFormStatus,
  })

  sample({
    clock: byPasswordForm.formValidated,
    target: byPasswordFx,
  })

  sample({
    clock: byPasswordFx.done,
    target: signInClicked,
  })

  return {
    byPasswordFx,
    byPasswordForm,
    $byPasswordFormStatus,
  }
})
