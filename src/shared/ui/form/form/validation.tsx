import { FormMessage } from "@radix-ui/react-form";
import clsx from "clsx";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../../types";

const validationVariants = cva([tw.text_sm], {
  variants: {
    variant: {
      error: [tw.text_dangerFg],
      warning: [tw.text_attentionFg],
      success: [tw.text_successFg],
    },
  },
});

type ValidationProps = {
  children: ReactNode;
  asChild?: boolean;
} & SxProp &
  VariantProps<typeof validationVariants>;

export const Validation = forwardRef<HTMLSpanElement, ValidationProps>(
  ({ children, asChild, sx, variant }, ref) => {
    return (
      <FormMessage
        ref={ref}
        asChild={asChild}
        className={clsx(validationVariants({ variant }), sx)}
      >
        {children}
      </FormMessage>
    );
  },
);
