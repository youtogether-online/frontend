import { useForm } from 'effector-forms'
import { useUnit } from 'effector-react/effector-react.umd'
import { ChangeEvent, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { sendCodeForm, sendCodeFx } from '@/features/authentication/by-email'
import { styled } from '@/shared/config/stitches/stitches.config'
import { emailValidation } from '@/shared/config/validation'
import { Button } from '@/shared/ui/atoms/button'
import { Input } from '@/shared/ui/atoms/input'

export const SendCode = () => {
  const { t } = useTranslation()

  const { submit, fields } = useForm(sendCodeForm)

  const isLoading = useUnit(sendCodeFx.pending)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    fields.email.onChange(event.target.value)
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit()
  }

  return (
    <Form onSubmit={handleFormSubmit} noValidate>
      <Input
        placeholder={t('email')}
        id="email"
        value={fields.email.value}
        onChange={handleInputChange}
        invalid={fields.email.hasError()}
        errorMessage={t(fields.email.errorText(), { max: emailValidation.max })}
      />
      <Button type="submit" theme="primary" loading={isLoading}>
        {t('getCode')}
      </Button>
    </Form>
  )
}

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})
