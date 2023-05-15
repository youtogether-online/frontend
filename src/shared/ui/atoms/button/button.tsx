import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '../text'

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
      block,
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
        block={block}
        size={size}
        {...buttonProps}
      >
        <Text variant="button">{children}</Text>
      </ButtonStyled>
    )
  }
)

const ButtonStyled = styled('button', {
  borderRadius: '$2',

  variants: {
    variant: {
      primary: {
        '& span': {
          color: '$buttonPrimaryText',
        },
        backgroundColor: '$buttonPrimaryBg',
        border: '1px solid $buttonPrimaryBorder',

        '&:hover': {
          backgroundColor: '$buttonPrimaryHoverBg',
          borderColor: '$buttonPrimaryHoverBorder',
        },

        '&:focus': {
          backgroundColor: '$buttonPrimarySelectedBg',
        },

        '&:disabled': {
          backgroundColor: '$buttonPrimaryDisabledBg',
          borderColor: '$buttonPrimaryDisabledBorder',

          '& span': {
            color: '$buttonPrimaryDisabledText',
          },
        },
      },
      secondary: {
        '& span': {
          color: '$buttonText',
        },
        backgroundColor: '$buttonBg',
        border: '1px solid $buttonBorder',

        '&:hover': {
          backgroundColor: '$buttonHoverBg',
          borderColor: '$buttonHoverBorder',
        },

        '&:active': {
          backgroundColor: '$buttonActiveBg',
          borderColor: '$buttonActiveBorder',
        },
      },
      outline: {
        '& span': {
          color: '$buttonOutlineText',
        },
        backgroundColor: '$buttonOutlineBg',
        border: '1px solid $buttonOutlineBorder',

        '&:hover': {
          backgroundColor: '$buttonOutlineHoverBg',
          borderColor: '$buttonOutlineHoverBorder',
        },

        '&:active': {
          backgroundColor: '$buttonOutlineActiveBg',
          borderColor: '$buttonOutlineActiveBorder',
        },

        '&:disabled': {
          '& span': {
            color: '$buttonOutlineDisabledText',
          },

          backgroundColor: '$buttonOutlineDisabledBg',
          borderColor: '$buttonOutlineDisabledBorder',
        },
      },
      danger: {
        '& span': {
          color: '$buttonDangerText',
        },
        border: '1px solid $buttonBorder',
        backgroundColor: '$buttonBg',

        '&:hover': {
          backgroundColor: '$buttonDangerHoverBg',
          borderColor: '$buttonDangerHoverBg',

          '& span': {
            color: '$buttonDangerHoverText',
          },
        },

        '&:disabled': {
          borderColor: '$buttonDangerDisabledBorder',
          backgroundColor: '$buttonDangerDisabledBg',

          '& span': {
            color: '$buttonDangerDisabledText',
          },
        },
      },
      invisible: {
        '& span': {
          color: '$accentFg',
        },

        '&:hover': {
          backgroundColor: '$buttonBg',
        },
      },
    },
    size: {
      small: {
        height: '28px',
        padding: '0 $2',
      },
      medium: {
        height: '32px',
        padding: '0 $3',
      },
      large: {
        height: '40px',
        padding: '0 $4',
      },
    },
    block: {
      true: {
        width: '100%',
      },
    },
  },
})
