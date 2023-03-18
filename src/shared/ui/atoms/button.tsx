import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { styled } from '@/shared/config/stitches/stitches.config'
import { Loader } from './loader'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'text' | 'outlined' | 'icon' | 'link'
  theme?: 'primary' | 'danger' | 'success' | 'warning'
  icon?: ReactNode
  loading?: boolean
  children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'solid', loading, theme, icon, children, ...buttonProps },
    ref
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        variant={variant}
        theme={theme}
        loading={loading}
        disabled={loading}
        {...buttonProps}
      >
        {!loading && icon}
        {!loading && children && <span>{children}</span>}
        {loading && <Loader />}
      </ButtonStyled>
    )
  }
)

const ButtonStyled = styled('button', {
  transition: 'background 200ms',
  outline: 'none',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  height: '36px',

  '& svg': {
    display: 'block',
  },

  '& span': {
    fontSize: '$button',
  },

  variants: {
    variant: {
      solid: {
        padding: '8px 16px',
        borderRadius: '$tertiary',
      },
      link: {
        height: 'auto',
        padding: 0,
      },
      icon: {
        padding: '2px',
        borderRadius: '$full',

        '&:hover': {
          backgroundColor: '$backgroundTextHover',
        },
      },
      text: {
        background: 'none',
        padding: '8px',
        borderRadius: '$tertiary',

        '&:hover': {
          backgroundColor: '$backgroundTextHover',
        },
      },
      outlined: {
        borderRadius: '$tertiary',
        border: '1px solid $borderPrimary',
      },
    },
    disabled: {
      true: {
        background: '$backgroundDisabled',
      },
    },
    loading: {
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

  compoundVariants: [
    {
      variant: 'solid',
      theme: 'primary',
      css: {
        backgroundColor: '$primary',
        color: '$textWhite',
        '&:hover': {
          backgroundColor: '$primaryHover',
        },
      },
    },
  ],
})
