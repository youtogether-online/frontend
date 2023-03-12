import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SignInByEmail, SignInByPassword } from '@/features/authentication'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Button, Text } from '@/shared/ui'

type SignInModes = 'signInWithPassword' | 'signInWithEmail'

export const SignIn = () => {
  const { t } = useTranslation()
  const [currentSignInMode, setCurrentSignInMode] =
    useState<SignInModes>('signInWithEmail')

  if (currentSignInMode === 'signInWithEmail') {
    return (
      <Root>
        <SignInByEmail />
        <Text variant="h6" centered strong>
          OR
        </Text>
        <Button
          onClick={() => setCurrentSignInMode('signInWithPassword')}
          variant="outlined"
        >
          {t('signInWithPassword')}
        </Button>
      </Root>
    )
  }

  return (
    <Root>
      <SignInByPassword />
      <Text variant="h6" centered>
        OR
      </Text>
      <Button
        onClick={() => setCurrentSignInMode('signInWithEmail')}
        variant="outlined"
      >
        {t('signInWithEmail')}
      </Button>
    </Root>
  )
}

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '10px',
})
