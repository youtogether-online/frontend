import { createEffect, sample } from 'effector'
import { createForm } from 'effector-forms'
import * as yup from 'yup'
import { createRule } from '@/shared/lib/create-yup-rule'

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

export const signInByPasswordFx = createEffect()

sample({
  clock: signInByPasswordForm.formValidated,
  target: signInByPasswordFx,
})
