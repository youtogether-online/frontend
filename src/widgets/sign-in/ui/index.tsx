import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SignInByEmail, SignInByPassword } from '@/features/authentication'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Button, IconKey, IconLogoVertical, IconMail, Text } from '@/shared/ui'

type SignInModes = 'signInByEmail' | 'signInWithPassword'

export const SignIn = () => {
  const { t } = useTranslation()
  const [currentSignInMode, setCurrentSignInMode] =
    useState<SignInModes>('signInByEmail')

  return (
    <Root>
      <Text variant="h4" centered>
        {t('signInOrSignUp')}
      </Text>
      {currentSignInMode === 'signInByEmail' ? (
        <SignInContainer>
          <SignInByEmail />
          <Text variant="body1" secondary centered>
            {t('or')}
          </Text>
          <Button
            variant="outlined"
            onClick={() => setCurrentSignInMode('signInWithPassword')}
            icon={<IconKey />}
          >
            {t('signInWithPassword')}
          </Button>
        </SignInContainer>
      ) : (
        <SignInContainer>
          <SignInByPassword />
          <Text variant="body2" secondary centered>
            {t('or')}
          </Text>
          <Button
            variant="outlined"
            onClick={() => setCurrentSignInMode('signInByEmail')}
            icon={<IconMail />}
          >
            {t('signInByEmail')}
          </Button>
        </SignInContainer>
      )}
      <Center>
        <IconLogoVertical color="rgba(0, 0, 0, 80%)" />
      </Center>
    </Root>
  )
}

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '15px',
})

const SignInContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
  marginTop: '15px',
})

const Center = styled('div', {
  margin: 'auto',
})
