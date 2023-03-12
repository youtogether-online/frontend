import { useTranslation } from 'react-i18next'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'
import { SignIn } from '@/widgets/sign-in'

export const SignInPage = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <SignInContainer>
        <Text variant="h5" centered>
          {t('signIn')}
        </Text>
        <SignIn />
      </SignInContainer>
    </Section>
  )
}

const Section = styled('section', {
  height: '100%',
})

const SignInContainer = styled('div', {
  width: '350px',
  backgroundColor: '$backgroundContainer',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  border: '$borderPrimary 1px solid',
  borderRadius: '$secondary',
  margin: 'auto auto',
})
