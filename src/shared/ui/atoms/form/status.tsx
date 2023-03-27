import { InternalApiError } from '@/shared/api/internal'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'

interface StatusProps {
  status: InternalApiError
}

export const Status = ({ status }: StatusProps) => {
  return (
    <Error>
      <Text variant="body1">{status.error}</Text>
      {status.advice && <Text variant="body2">{status.advice}</Text>}
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
