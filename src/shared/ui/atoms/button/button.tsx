import { cva, type VariantProps } from "cva";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { Text } from "../text";

const button = cva("button", {
  variants: {
    variant: {
      primary: [],
      secondary: [],
      outline: [],
      danger: [],
      invisible: [],
    },
    size: {
      small: [],
      medium: [],
      large: [],
    },
    disabled: {
      true: [],
    },
    block: {
      true: [],
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "medium",
    block: false,
    disabled: false,
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    children: ReactNode;
  };

export const Button = ({
  variant,
  block,
  size,
  disabled,
  leadingIcon,
  trailingIcon,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button {...buttonProps} className={button({ variant, block, size, disabled })}>
      <Text variant="button">{children}</Text>
    </button>
  );
};
