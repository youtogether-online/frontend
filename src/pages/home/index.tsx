import { createRoute } from 'atomic-router'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui/atoms/text'

export const HomePage = () => {
  return (
    <Section>
      <Text variant="h1">Home Page</Text>
    </Section>
  )
}

const Section = styled('section', {})
