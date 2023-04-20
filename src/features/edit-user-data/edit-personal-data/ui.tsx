import { useForm } from 'effector-forms'
import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { editPersonalDataForm } from '@/features/edit-user-data/edit-personal-data/model'
import { Button, Form, Input } from '@/shared/ui'

export const EditPersonalData = () => {
  const { t } = useTranslation()

  const { submit, fields, errorText } = useForm(editPersonalDataForm)

  const handleUsernameChange = (event: FormEvent<HTMLInputElement>) => {
    fields.username.onChange(event.currentTarget.value)
  }
  const handleFirstNameChange = (event: FormEvent<HTMLInputElement>) => {
    fields.firstName.onChange(event.currentTarget.value)
  }
  const handleLastNameChange = (event: FormEvent<HTMLInputElement>) => {
    fields.lastName.onChange(event.currentTarget.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label={t('username')} error={errorText('username')}>
        <Input value={fields.username.value} onChange={handleUsernameChange} />
      </Form.Item>
      <Form.Item label={t('firstName')} error={errorText('firstName')}>
        <Input
          value={fields.firstName.value}
          onChange={handleFirstNameChange}
        />
      </Form.Item>
      <Form.Item label={t('lastName')} error={errorText('lastName')}>
        <Input value={fields.lastName.value} onChange={handleLastNameChange} />
      </Form.Item>
      <Button size="large">{t('save')}</Button>
    </Form>
  )
}
