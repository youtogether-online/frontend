import { useForm } from 'effector-forms'
import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { signInByPasswordForm } from '@/features/authentication/by-password'
import { styled } from '@/shared/config/stitches/stitches.config'
import { passwordValidation } from '@/shared/config/validation'
import { Button } from '@/shared/ui/atoms/button'
import { Input } from '@/shared/ui/atoms/input'

export const SignInByPassword = () => {
  const { t } = useTranslation()

  const { submit, fields } = useForm(signInByPasswordForm)
  const handleGetCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit()
  }

  return (
    <Form onSubmit={handleGetCode} noValidate>
      <Input
        placeholder={t('email')}
        id="email"
        value={fields.email.value}
        autoComplete="email"
        onChange={(event) => fields.email.onChange(event.target.value)}
        invalid={fields.email.hasError()}
      />
      <Input
        placeholder={t('password')}
        type="password"
        id="current-password"
        autoComplete="current-password"
        value={fields.password.value}
        onChange={(event) => fields.password.onChange(event.target.value)}
        invalid={fields.password.hasError()}
      />
      <Button type="submit" theme="primary">
        {t('signIn')}
      </Button>
    </Form>
  )
}

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})
