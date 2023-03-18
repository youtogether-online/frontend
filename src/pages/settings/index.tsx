import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { $session } from '@/entities/session'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Input, Text } from '@/shared/ui'

export const SettingsPage = () => {
  const { t } = useTranslation()

  const session = useUnit($session)

  return (
    <Section>
      <Text variant="h1">Settings</Text>
      <SettingFields>
        <Input title={t('username')} value={session?.username} />
        <Input title={t('firstName')} value={session?.firstName} />
        <Input title={t('lastName')} value={session?.lastName} />
        <Input title={t('email')} value={session?.email} />
        <Input title={t('password')} type="password" />
      </SettingFields>
    </Section>
  )
}

const Section = styled('section', {})

const SettingFields = styled('div', {
  maxWidth: '250px',
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})
