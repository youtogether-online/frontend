import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Text } from '@/shared/ui'
import { Loader } from './loader'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'text' | 'outlined' | 'icon' | 'link'
  theme?: 'primary' | 'danger' | 'success' | 'warning'
  size?: 'small' | 'medium' | 'large' | 'full'
  icon?: ReactNode
  pending?: boolean
  children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      pending,
      theme = 'primary',
      size = 'medium',
      icon,
      children,
      ...buttonProps
    },
    ref
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        variant={variant}
        theme={theme}
        pending={pending}
        disabled={pending}
        size={size}
        {...buttonProps}
      >
        {!pending && icon}
        {!pending && children && <Text variant="button">{children}</Text>}
        {pending && <Loader />}
      </ButtonStyled>
    )
  }
)

const ButtonStyled = styled('button', {
  'transition': 'background 200ms',
  'outline': 'none',
  'border': 'none',
  'background': 'none',
  'cursor': 'pointer',
  'height': '36px',
  'position': 'relative',

  '& span': {
    fontSize: '$button',
  },

  'variants': {
    variant: {
      solid: {
        padding: '8px 16px',
        borderRadius: '$tertiary',
      },
      link: {
        height: 'auto',
        padding: 0,
        width: 'fit-content',
      },
      icon: {
        'padding': '2px',
        'borderRadius': '$full',
        'width': 'min-content',

        '&:hover': {
          backgroundColor: '$backgroundTextHover',
        },
      },
      text: {
        'background': 'none',
        'padding': '8px',
        'borderRadius': '$tertiary',

        '&:hover': {
          backgroundColor: '$backgroundTextHover',
        },
      },
      outlined: {
        'borderRadius': '$tertiary',
        'border': '1px solid $borderPrimary',

        '&:hover': {
          backgroundColor: '$backgroundInput',
        },
        '& svg': {
          display: 'block',
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      },
    },
    disabled: {
      true: {
        background: '$backgroundDisabled',
      },
    },
    size: {
      small: {
        width: '77px',
      },
      medium: {
        width: '80px',
      },
      large: {
        width: '93px',
      },
      full: {
        width: '100%',
      },
    },
    pending: {
      true: {
        background: '$backgroundDisabled',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    theme: {
      primary: {},
      danger: {},
      success: {},
      warning: {},
    },
  },

  'compoundVariants': [
    {
      variant: 'solid',
      theme: 'primary',
      css: {
        'backgroundColor': '$primary',
        'color': '$textWhite',
        '&:hover': {
          backgroundColor: '$primaryHover',
        },
      },
    },
  ],
})
