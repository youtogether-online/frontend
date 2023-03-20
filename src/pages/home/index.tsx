import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'

export const HomePage = () => {
  return (
    <Section>
      <Text variant="h1">Home Page</Text>
    </Section>
  )
}

const Section = styled('section', {})
