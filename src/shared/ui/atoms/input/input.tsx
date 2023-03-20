import { InputHTMLAttributes, ReactNode } from 'react'
import { styled } from '@/shared/config/stitches/stitches.config'

type InternalInputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
  prefix?: ReactNode
  postfix?: ReactNode
}

export const InternalInput = ({
  invalid,
  prefix,
  postfix,
  ...inputProps
}: InternalInputProps) => {
  return (
    <Root invalid={invalid}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputStyled {...inputProps} />
      {postfix && <Postfix>{postfix}</Postfix>}
    </Root>
  )
}

const InputStyled = styled('input', {
  'outline': '0px',
  'height': '36px',
  'border': '0px',
  'padding': '6px 12px',
  'borderRadius': 'inherit',
  'width': '100%',
  'backgroundColor': 'inherit',

  '&:placeholder': {
    color: '$textSecondary',
  },
})

const Root = styled('span', {
  'border': '1px solid $borderSecondary',
  'backgroundColor': '$backgroundInput',
  'borderRadius': '$tertiary',
  'display': 'flex',

  '&:focus-within': {
    borderColor: '$primaryBorder',
  },

  'variants': {
    invalid: {
      true: {
        'background': '$errorBackground',
        'borderColor': '$errorBorder',
        'color': '$errorText',

        '&:focus-within': {
          borderColor: '$errorBorder',
        },

        '&::placeholder': {
          color: '$errorText',
        },
      },
    },
  },
})

const Prefix = styled('span', {})

const Postfix = styled('span', {
  display: 'flex',
  marginRight: '10px',
})
