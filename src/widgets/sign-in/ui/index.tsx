import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SignInByEmail, SignInByPassword } from '@/features/authentication'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'

type SignInModes = 'signInWithPassword' | 'signInWithEmail'

export const SignIn = () => {
  const { t } = useTranslation()
  const [currentSignInMode, setCurrentSignInMode] =
    useState<SignInModes>('signInWithEmail')

  return (
    <Root>
      <SignInByEmail />
    </Root>
  )
}

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '10px',
})
