import { useTranslation } from 'react-i18next'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Form, Input, Text } from '@/shared/ui'

export const SearchBar = () => {
  const { t } = useTranslation()

  return (
    <Root>
      <Input placeholder="Movies" postfix={<Text variant="keyboard">/</Text>} />
    </Root>
  )
}

const Root = styled('label', {
  display: 'flex',
  position: 'relative',
})
