import { modelView } from 'effector-factorio'
import { useForm } from 'effector-forms'
import { useUnit } from 'effector-react/effector-react.umd'
import { FormEvent, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Form, Input } from '@/shared/ui'
import { createByPasswordModel } from './model'

export const SignInByPassword = modelView(createByPasswordModel, () => {
  const { t } = useTranslation()

  const byPasswordModel = createByPasswordModel.useModel()

  const { submit, fields, errorText } = useForm(byPasswordModel.byPasswordForm)
  const formStatus = useUnit(byPasswordModel.$byPasswordFormStatus)
  const isLoading = useUnit(byPasswordModel.byPasswordFx.pending)

  const handleGetCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit()
  }

  return (
    <Form onSubmit={handleGetCode}>
      {formStatus && <Form.Status status={formStatus} />}
      <Form.Item error={errorText('email')}>
        <Input
          placeholder={t('email')}
          id="email"
          value={fields.email.value}
          autoComplete="email"
          onChange={(event) => fields.email.onChange(event.target.value)}
          invalid={fields.email.hasError() || Boolean(formStatus)}
        />
      </Form.Item>
      <Form.Item error={errorText('password')}>
        <Input.Password
          placeholder={t('password')}
          value={fields.password.value}
          onChange={(event) => fields.password.onChange(event.target.value)}
          invalid={fields.password.hasError() || Boolean(formStatus)}
        />
      </Form.Item>
      <Button type="submit" theme="primary" loading={isLoading}>
        {t('signIn')}
      </Button>
    </Form>
  )
})
