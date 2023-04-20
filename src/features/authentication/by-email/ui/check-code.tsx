import { useForm } from 'effector-forms'
import { useUnit } from 'effector-react'
import { ChangeEvent, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { createByEmailModel } from '@/features/authentication/by-email'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Button, Form, IconArrowLeft, Input } from '@/shared/ui'

export const CheckCode = () => {
  const { t } = useTranslation()

  const byEmailModel = createByEmailModel.useModel()

  const { submit, fields, errorText } = useForm(byEmailModel.checkCodeForm)
  const returnToPreviousStep = useUnit(byEmailModel.returnToPrevStepClicked)
  const isLoading = useUnit(byEmailModel.checkCodeMutation.$pending)
  const formError = useUnit(byEmailModel.$checkCodeFormError)

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit()
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    fields.code.onChange(event.target.value)
  }

  return (
    <Root>
      <Form onSubmit={handleFormSubmit} noValidate>
        {formError && (
          <Form.Error error={formError.error} advice={formError.advice} />
        )}
        <Form.Item error={errorText('code')}>
          <Button
            variant="icon"
            onClick={returnToPreviousStep}
            icon={<IconArrowLeft />}
            type="button"
          />
          <Input
            placeholder={t('enterCodeFromEmail')}
            id="verification-code"
            onChange={handleInputChange}
            invalid={fields.code.hasError()}
          />
        </Form.Item>
      </Form>
      <Button
        type="submit"
        size="full"
        onClick={handleFormSubmit}
        theme="primary"
        pending={isLoading}
      >
        {t('send')}
      </Button>
    </Root>
  )
}

const Root = styled('div', {
  'display': 'flex',
  'flexDirection': 'column',
  'gap': '10px',

  '& input': {
    flex: 1,
  },
})
