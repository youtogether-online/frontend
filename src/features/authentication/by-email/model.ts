import { AxiosError } from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { createForm } from 'effector-forms'
import * as yup from 'yup'
import { signInClicked } from '@/entities/session/model/sign-in'
import { internalApi } from '@/shared/api'
import { sendCode } from '@/shared/api/internal/auth'
import { emailValidation } from '@/shared/config/validation'
import { createRule } from '@/shared/lib/create-yup-rule'

export const sendCodeForm = createForm({
  validateOn: ['submit'],
  fields: {
    email: {
      init: '',
      rules: [
        createRule<string>({
          name: 'email',
          schema: yup
            .string()
            .required('field.required')
            .email('field.email')
            .max(emailValidation.max, 'field.max'),
        }),
      ],
    },
  },
})

export const checkCodeForm = createForm({
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

type SignInSteps = 'sendCode' | 'checkCode'

export const returnToPrevStepClicked = createEvent()

export const sendCodeFx = createEffect<{ email: string }, void, AxiosError>(
  async ({ email }: { email: string }) => {
    await internalApi.auth.sendCode({ email })
  }
)

export const checkCodeFx = createEffect<
  { email: string; code: string },
  void,
  AxiosError
>(async ({ email, code }: { email: string; code: string }) => {
  await internalApi.auth.checkCode({ email, code })
})

export const $currentSignInStep = createStore<SignInSteps>('sendCode')
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
