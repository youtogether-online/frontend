import { cva } from "cva";
import { forwardRef } from "react";

import { BaseButton } from "./base-button";
import { type ButtonProps } from "./types";

export const buttonVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm h-7 px-2",
      md: "text-md h-8 px-3",
      lg: "text-md h-10 px-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size, sx, ...props }, ref) => {
    return (
      <BaseButton ref={ref} sx={buttonVariants({ size, class: sx })} {...props}>
        {children}
      </BaseButton>
    );
  },
);
