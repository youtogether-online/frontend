import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { $session } from '@/entities/session'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Form, Input, Text } from '@/shared/ui'

export const SettingsPage = () => {
  const { t } = useTranslation()

  const session = useUnit($session)

  if (!session) {
    return null
  }

  return (
    <Section>
      <Text variant="h1">Settings</Text>
      <Form>
        <Form.Item>
          <Input title={t('username')} value={session.username} />
        </Form.Item>
        <Input title={t('firstName')} value={session.firstName} />
        <Input title={t('lastName')} value={session.lastName} />
      </Form>
      <Input title={t('email')} value={session.email} />
      <Input title={t('password')} type="password" />
    </Section>
  )
}

const Section = styled('section', {})
