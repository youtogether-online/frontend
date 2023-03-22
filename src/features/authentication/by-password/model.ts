import { AxiosError } from 'axios'
import { createEffect, sample } from 'effector'
import { createForm } from 'effector-forms'
import { debug } from 'patronum'
import * as yup from 'yup'
import { signInClicked } from '@/entities/session'
import { checkCodeFx } from '@/features/authentication'
import { internalApi } from '@/shared/api'
import { createRule } from '@/shared/lib/create-yup-rule'
import { getUserDeviceData } from '@/shared/lib/get-user-device-data'
import { controls, routes } from '@/shared/routes'

export const signInByPasswordForm = createForm({
  validateOn: ['submit'],
  fields: {
    email: {
      init: '',
      rules: [
        createRule<string>({
          name: 'email',
          schema: yup.string().required('field.required').email('field.email'),
        }),
      ],
    },
    password: {
      init: '',
      rules: [
        createRule<string>({
          name: 'password',
          schema: yup.string().required('field.required'),
        }),
      ],
    },
  },
})

export const signInByPasswordFx = createEffect<
  { email: string; password: string },
  void,
  AxiosError
>(async ({ email, password }) => {
  await internalApi.auth.signInWithPassword({
    email,
    password,
    device: getUserDeviceData(),
  })
})

sample({
  clock: signInByPasswordForm.formValidated,
  target: signInByPasswordFx,
})

sample({
  clock: signInByPasswordFx.done,
  target: signInClicked,
})
