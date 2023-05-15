import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'invisible'
  block?: boolean
  size?: 'small' | 'medium' | 'large'
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  disabled?: boolean
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'secondary',
      disabled,
      size = 'medium',
      leadingIcon,
      trailingIcon,
      children,
      ...buttonProps
    },
    ref
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        variant={variant}
        disabled={disabled}
        size={size}
        {...buttonProps}
      >
        <Text variant="button">{children}</Text>
      </ButtonStyled>
    )
  }
)

const ButtonStyled = styled('button', {
  variants: {
    variant: {
      primary: {},
      secondary: {},
      outline: {},
      danger: {},
      invisible: {},
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
})
