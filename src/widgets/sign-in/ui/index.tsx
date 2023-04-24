import { modelView } from 'effector-factorio'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SignInByEmail } from '@/features/authentication/by-email'
import { SignInByPassword } from '@/features/authentication/by-password'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Button, IconKey, IconLogoVertical, IconMail, Text } from '@/shared/ui'
import { createSignInModel } from '@/widgets/sign-in/model'

type SignInModes = 'signInByEmail' | 'signInWithPassword'

interface SignInProps {
  logo?: boolean
}

export const SignIn = modelView(
  createSignInModel,
  ({ logo = false }: SignInProps) => {
    const { t } = useTranslation()
    const [currentSignInMode, setCurrentSignInMode] =
      useState<SignInModes>('signInByEmail')

    const signInModel = createSignInModel.useModel()

    return (
      <Root>
        <Text variant="h4" centered>
          {t('signInOrSignUp')}
        </Text>
        {currentSignInMode === 'signInByEmail' ? (
          <SignInContainer>
            <SignInByEmail model={signInModel.byEmailModel} />
            <Text variant="body1" secondary centered>
              {t('or')}
            </Text>
            <Button
              variant="outlined"
              onClick={() => setCurrentSignInMode('signInWithPassword')}
              size="full"
              icon={<IconKey />}
            >
              {t('signInWithPassword')}
            </Button>
          </SignInContainer>
        ) : (
          <SignInContainer>
            <SignInByPassword model={signInModel.byPasswordModel} />
            <Text variant="body2" secondary centered>
              {t('or')}
            </Text>
            <Button
              variant="outlined"
              size="full"
              onClick={() => setCurrentSignInMode('signInByEmail')}
              icon={<IconMail />}
            >
              {t('signInByEmail')}
            </Button>
          </SignInContainer>
        )}
        {logo && (
          <Logo>
            <IconLogoVertical color="rgba(0, 0, 0, 80%)" />
          </Logo>
        )}
      </Root>
    )
  }
)

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
  marginTop: '15px',
})

const Logo = styled('div', {
  margin: 'auto',
  marginTop: '20px',
})
