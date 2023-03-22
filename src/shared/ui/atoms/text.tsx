import { styled } from '@stitches/react'
import { ReactNode } from 'react'

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'keyboard'
  | 'button'
  | 'link'

type TextHTMLElements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p'
  | 'kbd'

interface VariantsMapping {
  [name: string]: TextHTMLElements
}

const variantsMapping: VariantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'span',
  link: 'span',
  caption: 'span',
  keyboard: 'kbd',
}

interface TypographyProps {
  variant: TypographyVariant
  children: ReactNode
  strong?: boolean
  secondary?: boolean
  centered?: boolean
}

export const Text = ({
  variant,
  children,
  strong = false,
  secondary = false,
  centered = false,
  ...textComponentProps
}: TypographyProps) => {
  const TextHTMlElement: TextHTMLElements = variantsMapping[variant]

  return (
    <TextStyled
      as={TextHTMlElement}
      variant={variant}
      strong={strong}
      secondary={secondary}
      centered={centered}
      {...textComponentProps}
    >
      {children}
    </TextStyled>
  )
}

const TextStyled = styled('p', {
  variants: {
    variant: {
      h1: {
        fontSize: '$h1',
        fontWeight: '$semiBold',
      },
      h2: {
        fontSize: '$h2',
        fontWeight: '$semiBold',
      },
      h3: {
        fontSize: '$h3',
        fontWeight: '$semiBold',
      },
      h4: {
        fontSize: '$h4',
        fontWeight: '$semiBold',
      },
      h5: {
        fontSize: '$h5',
        fontWeight: '$semiBold',
      },
      h6: {
        fontSize: '$h6',
        fontWeight: '$semiBold',
      },
      body1: {
        fontSize: '$body1',
        fontWeight: '$normal',
      },
      body2: {
        fontSize: '$body2',
        fontWeight: '$normal',
      },
      button: {
        fontSize: '$button',
        fontWeight: '$normal',
      },
      link: {
        fontSize: '$link',
        fontWeight: '$normal',
      },
      caption: {
        fontSize: '$caption',
        fontWeight: '$normal',
      },
      subtitle1: {
        fontSize: '$subtitle1',
        fontWeight: '$normal',
      },
      subtitle2: {
        fontSize: '$subtitle2',
        fontWeight: '$medium',
      },
      keyboard: {
        fontSize: '$keyboard',
        fontWeight: '$normal',
        border: '1px solid rgba(100,100,100, 0.2)',
        borderRadius: '3px',
        background: 'rgba(150, 150, 150, 0.06)',
        padding: '0px 4px',
        borderBottomWidth: '3px',
      },
    },
    strong: {
      true: {
        fontWeight: '$semiBold',
      },
    },
    centered: {
      true: {
        textAlign: 'center',
      },
    },
    secondary: {
      true: {
        color: '$textSecondary',
      },
    },
  },
})
