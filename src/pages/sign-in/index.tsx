import { useTranslation } from 'react-i18next'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'
import { Container } from '@/shared/ui/templates/container'
import { SignIn } from '@/widgets/sign-in'

export const SignInPage = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Container>
        <SignIn />
      </Container>
    </Section>
  )
}

const Section = styled('section', {
  height: '100%',
  width: '350px',
  margin: 'auto auto',
})
