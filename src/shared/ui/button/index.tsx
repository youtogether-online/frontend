import { styled } from "@/shared/config/stitches/stitches.config";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Text } from "@/shared/ui/text";
import { CSS } from "@stitches/react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "text" | "outlined" | "icon"
  theme?: "primary" | "danger" | "success"
  icon?: ReactNode
  align?: "bottomRight" | "bottomLeft" | "topRight" | "topLeft"
  css?: CSS
  children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    variant = "solid",
    theme,
    icon,
    children,
    align,
    css,
    ...buttonProps
  },
  ref
) => {
  return <ButtonStyled ref={ref} variant={variant} css={css} theme={theme} align={align} {...buttonProps}>
    {icon && icon}
    {children && <Text variant="button">{children}</Text>}
  </ButtonStyled>;
});

const ButtonStyled = styled("button", {
  transition: "background 200ms",
  outline: "none",
  border: "none",
  background: "none",
  cursor: "pointer",

  "& svg": {
    display: "block"
  },

  variants: {
    variant: {
      solid: {
        color: "$textQuaternary",
        padding: "8px 16px",
        borderRadius: "$roundedExtra"
      },
      icon: {
        padding: "2px",
        borderRadius: "$roundedFull",

        "&:hover": {
          backgroundColor: "$backgroundTextHover"
        }
      },
      text: {
        background: "none",
        padding: "8px",
        borderRadius: "$roundedExtra",

        "&:hover": {
          backgroundColor: "$backgroundTextHover"
        }
      },
      outlined: {}
    },
    disabled: {
      true: {
        background: "$backgroundDisabled"
      }
    },
    theme: {
      primary: {},
      danger: {},
      success: {},
      warning: {},
      info: {}
    },
    align: {
      bottomLeft: {
        position: "absolute",
        bottom: "10px",
        left: "10px"
      },
      bottomRight: {
        position: "absolute",
        bottom: "10px",
        right: "10px"
      },
      topLeft: {
        position: "absolute",
        left: "10px",
        top: "10px"
      },
      topRight: {
        position: "absolute",
        top: "10px",
        right: "10px"
      }
    }
  },

  compoundVariants: [{
    variant: "solid",
    theme: "primary",
    css: {
      backgroundColor: "$primary",

      "&:hover": {
        backgroundColor: "$primaryHover"
      }
    }
  },
    {
      variant: "solid",
      theme: "danger",
      css: {
        backgroundColor: "$error",

        "&:hover": {
          backgroundColor: "$errorHover"
        }
      }
    },
    {
      variant: "solid",
      theme: "warning",
      css: {
        backgroundColor: "$warning",

        "&:hover": {
          backgroundColor: "$warningHover"
        }
      }
    },
    {
      variant: "solid",
      theme: "success",
      css: {
        backgroundColor: "$success",

        "&:hover": {
          backgroundColor: "$successHover"
        }
      }
    },
    {
      variant: "solid",
      theme: "info",
      css: {
        background: "$info",

        "&:hover": {
          backgroundColor: "$infoHover"
        }
      }
    },
    {
      variant: "outlined",
      theme: "primary",
      css: {
        border: "$primaryBorder",
        color: "$primaryText",
        background: "$primaryBackground",

        "&:hover": {
          backgroundColor: "$primaryBackgroundHover",
          border: "$primaryBorderHover",
          background: "$primaryBackgroundHover"
        }
      }
    },
    {
      variant: "outlined",
      theme: "danger",
      css: {
        border: "$dangerBorder",
        color: "$dangerText",
        background: "$dangerBackground",

        "&:hover": {
          backgroundColor: "$dangerBackgroundHover",
          border: "$dangerBorderHover",
          background: "$dangerBackgroundHover"
        }
      }
    },
    {
      variant: "outlined",
      theme: "warning",
      css: {
        border: "$warningBorder",
        color: "$warningText",
        background: "$warningBackground",

        "&:hover": {
          backgroundColor: "$warningBackgroundHover",
          border: "$warningBorderHover",
          background: "$warningBackgroundHover"
        }
      }
    },
    {
      variant: "outlined",
      theme: "info",
      css: {
        border: "$infoBorder",
        color: "$infoText",
        background: "$infoBackground",

        "&:hover": {
          backgroundColor: "$infoBackgroundHover",
          border: "$infoBorderHover",
          background: "$infoBackgroundHover"
        }
      }
    },
    {
      variant: "outlined",
      theme: "success",
      css: {
        border: "$successBorder",
        color: "$successText",
        background: "$successBackground",

        "&:hover": {
          backgroundColor: "$successBackgroundHover",
          border: "$successBorderHover",
          background: "$successBackgroundHover"
        }
      }
    },
    {
      variant: "text",
      theme: "primary",
      css: {
        color: "$primaryText",

        "&:hover": {
          color: "$primaryTextHover"
        }
      }
    },
    {
      variant: "text",
      theme: "danger",
      css: {
        color: "$dangerText",

        "&:hover": {
          color: "$dangerTextHover"
        }
      }
    },
    {
      variant: "text",
      theme: "success",
      css: {
        color: "$successText",

        "&:hover": {
          color: "$successTextHover"
        }
      }
    },
    {
      variant: "text",
      theme: "info",
      css: {
        color: "$infoText",

        "&:hover": {
          color: "$infoTextHover"
        }
      }
    },
    {
      variant: "text",
      theme: "warning",
      css: {
        color: "$warningText",

        "&:hover": {
          color: "$warningTextHover"
        }
      }
    }
  ]
});
