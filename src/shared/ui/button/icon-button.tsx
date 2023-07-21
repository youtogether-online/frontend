import { cva } from "cva";
import { forwardRef } from "react";

import { BaseButton } from "./base-button";
import { type IconButtonProps } from "./types";

export const iconButtonVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm h-7 w-7",
      md: "text-md h-8 h-8",
      lg: "text-md h-10 h-10",
    },
  },
});

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        sx={iconButtonVariants({ size, class: "text-fg-default" })}
        {...props}
      />
    );
  },
);
