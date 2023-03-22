import { useForm } from 'effector-forms'
import { useUnit } from 'effector-react'
import { ChangeEvent, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import {
  checkCodeForm,
  checkCodeFx,
  returnToPrevStepClicked,
} from '@/features/authentication/by-email'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Form, IconArrowLeft, Input } from '@/shared/ui'
import { Button } from '@/shared/ui/atoms'

export const CheckCode = () => {
  const { t } = useTranslation()

  const { submit, fields, errorText } = useForm(checkCodeForm)
  const returnToPreviousStep = useUnit(returnToPrevStepClicked)
  const [isLoading] = useUnit([checkCodeFx.pending])

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit()
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    fields.code.onChange(event.target.value)
  }

  return (
    <Root>
      <InputContainer>
        <Button
          variant="icon"
          onClick={returnToPreviousStep}
          icon={<IconArrowLeft />}
        />
        <Form onSubmit={handleFormSubmit} noValidate>
          <Form.Item error={errorText('code')}>
            <Input
              placeholder={t('enterCodeFromEmail')}
              id="verification-code"
              onChange={handleInputChange}
              invalid={fields.code.hasError()}
            />
          </Form.Item>
        </Form>
      </InputContainer>
      <Button
        type="submit"
        onClick={handleFormSubmit}
        theme="primary"
        loading={isLoading}
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

  '& form': {
    flex: 1,
  },
})

const InputContainer = styled('div', {
  display: 'flex',
  gap: '5px',
})
