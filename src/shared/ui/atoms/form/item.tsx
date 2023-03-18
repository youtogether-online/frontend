import { ReactNode } from 'react'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'

interface FormItemProps {
  label?: string
  error?: string
  children: ReactNode
}

export const Item = ({ label, error, children }: FormItemProps) => {
  return (
    <Root>
      {children}
      <Error variant="caption">{error}</Error>
    </Root>
  )
}

const Root = styled('div', {})

const Error = styled(Text, {
  color: '$errorText',
})
