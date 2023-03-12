import { InputHTMLAttributes, useState } from 'react'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui/atoms/text'
import { ReactComponent as EyeNoneIcon } from '@/shared/ui/icons/eye-none.svg'
import { ReactComponent as EyeOpenIcon } from '@/shared/ui/icons/eye-open.svg'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
  errorMessage?: string
  title?: string
  type?: 'default' | 'password'
}

export const Input = ({
  invalid,
  children,
  errorMessage,
  title,
  type = 'default',
  ...inputProps
}: InputProps) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const handlePasswordShownModeChange = () => {
    setIsPasswordShown((prevState) => !prevState)
  }

  return (
    <Container>
      {title && <Text variant="caption">{title}</Text>}
      <InputContainer>
        {type === 'password' && (
          <>
            <InputStyled
              invalid={invalid}
              type={isPasswordShown ? 'text' : 'password'}
              {...inputProps}
            />
            <ShowPassword
              onClick={handlePasswordShownModeChange}
              active={isPasswordShown}
              type="button"
            >
              {isPasswordShown && <EyeOpenIcon />}
              {!isPasswordShown && <EyeNoneIcon />}
            </ShowPassword>
          </>
        )}
        {type === 'default' && (
          <InputStyled invalid={invalid} {...inputProps} />
        )}
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  )
}

const InputContainer = styled('span', {
  'display': 'flex',
  'borderRadius': '$tertiary',
  'border': '1px solid $borderSecondary',
  'background': '$backgroundContainer',
  'transition': 'border 0.3s',

  '&:hover': {
    borderColor: '$primaryBorderHover',
  },

  [`&:focus-within`]: {
    borderColor: '$primaryBorder !important',
  },
})

const InputStyled = styled('input', {
  'outline': '0px',
  'height': '36px',
  'border': 'none',
  'padding': '6px 12px',
  'borderRadius': '$tertiary',
  'width': '100%',

  '&:placeholder': {
    color: '$textSecondary',
  },

  'variants': {
    invalid: {
      true: {
        'background': '$errorBackground',
        'borderColor': '$errorBorder',
        'color': '$errorText',

        '&::placeholder': {
          color: '$errorText',
        },
      },
    },
  },
})

const ErrorMessage = styled('span', {
  fontSize: '$error',
  color: '$error',
  marginTop: '4px',
  borderRadius: '$tertiary',
  backgroundColor: '$errorBackground',
  padding: '8px 8px',
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const ShowPassword = styled('button', {
  'padding': '0px 10px',

  '& svg': {
    color: '$textSecondary',
  },

  'variants': {
    active: {
      true: {
        '& svg': {
          color: '$primary',
        },
      },
    },
  },
})
