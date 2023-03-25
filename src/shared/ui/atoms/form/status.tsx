import { InternalApiError } from '@/shared/api/internal'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'

interface StatusProps {
  error: InternalApiError
}

export const Status = ({ error }: StatusProps) => {
  return (
    <Error>
      <Text variant="body1">{error.error}</Text>
      {error.advice && <Text variant="body2">{error.advice}</Text>}
    </Error>
  )
}

const Error = styled('div', {
  backgroundColor: '$errorBackground',
  padding: '12px',
  borderRadius: '$tertiary',
  color: '$errorText',
  display: 'flex',
  gap: '4px',
  flexDirection: 'column',
})
