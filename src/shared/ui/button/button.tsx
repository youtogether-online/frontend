import { forwardRef } from "react";

import { BaseButton } from "./base-button";
import { type ButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <BaseButton ref={ref} {...props}>
      {children}
    </BaseButton>
  );
});
