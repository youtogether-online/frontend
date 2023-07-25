import { FormMessage, type FormMessageProps } from "@radix-ui/react-form";
import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";

import { type SxProp } from "../../types";

const validationVariants = cva("text-sm", {
  variants: {
    variant: {
      error: "text-danger-fg",
      warning: "text-attention-fg",
      success: "text-success-fg",
    },
  },
});

type ValidationProps = SxProp & VariantProps<typeof validationVariants> & FormMessageProps;

export const Validation = forwardRef<HTMLSpanElement, ValidationProps>(
  ({ children, asChild, sx, variant, ...props }, ref) => {
    return (
      <FormMessage ref={ref} className={validationVariants({ variant, class: sx })} {...props}>
        {children}
      </FormMessage>
    );
  },
);
