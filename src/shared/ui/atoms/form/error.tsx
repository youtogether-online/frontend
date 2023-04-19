import { ServerErrorResponse } from '@/shared/api'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'

export const Error = ({ error, advice }: ServerErrorResponse) => {
  return (
    <ErrorStyled>
      <Text variant="body1">{error}</Text>
      {advice && <Text variant="body2">{advice}</Text>}
    </ErrorStyled>
  )
}

const ErrorStyled = styled('div', {
  backgroundColor: '$errorBackground',
  padding: '12px',
  borderRadius: '$tertiary',
  color: '$errorText',
  display: 'flex',
  gap: '4px',
  flexDirection: 'column',
})
