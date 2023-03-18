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
import { IconArrowLeft, Input } from '@/shared/ui'
import { Button } from '@/shared/ui/atoms'

export const CheckCode = () => {
  const { t } = useTranslation()

  const { submit, fields } = useForm(checkCodeForm)
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
          <Input
            placeholder={t('enterCodeFromEmail')}
            id="verification-code"
            onChange={handleInputChange}
            invalid={fields.code.hasError()}
          />
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

const Form = styled('form', {
  width: '100%',
})

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const InputContainer = styled('div', {
  display: 'flex',
  gap: '5px',
})
