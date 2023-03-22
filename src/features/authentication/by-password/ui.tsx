import { useForm } from 'effector-forms'
import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { signInByPasswordForm } from '@/features/authentication/by-password'
import { Button, Form, Input } from '@/shared/ui'

export const SignInByPassword = () => {
  const { t } = useTranslation()

  const { submit, fields, errorText } = useForm(signInByPasswordForm)

  const handleGetCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit()
  }

  return (
    <Form onSubmit={handleGetCode} noValidate>
      <Form.Item error={errorText('email')}>
        <Input
          placeholder={t('email')}
          id="email"
          value={fields.email.value}
          autoComplete="email"
          onChange={(event) => fields.email.onChange(event.target.value)}
          invalid={fields.email.hasError()}
        />
      </Form.Item>
      <Form.Item error={errorText('email')}>
        <Input
          placeholder={t('password')}
          type="password"
          id="current-password"
          autoComplete="current-password"
          value={fields.password.value}
          onChange={(event) => fields.password.onChange(event.target.value)}
          invalid={fields.password.hasError()}
        />
      </Form.Item>
      <Button type="submit" theme="primary">
        {t('signIn')}
      </Button>
    </Form>
  )
}
