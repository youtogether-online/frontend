import { styled } from '@/shared/config/stitches/stitches.config'
import { Form, Input, Text } from '@/shared/ui'

export const HomePage = () => {
  return (
    <Section>
      <Text variant="h1">Home Page</Text>
      <Form>
        <Form.Item label="User">
          <Input />
        </Form.Item>
      </Form>
    </Section>
  )
}

const Section = styled('section', {})
