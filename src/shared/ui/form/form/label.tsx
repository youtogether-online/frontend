import { FormLabel, type FormLabelProps } from "@radix-ui/react-form";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../../types";

const labelVariants = cva("text-md font-bold", {
  variants: {},
});

type LabelProps = {
  children: ReactNode;
  required?: boolean;
  visuallyHidden?: boolean;
} & SxProp &
  FormLabelProps &
  VariantProps<typeof labelVariants>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, required, sx, visuallyHidden, ...props }, ref) => {
    return (
      <FormLabel className={labelVariants({ class: sx })} ref={ref} {...props}>
        {visuallyHidden ? (
          <VisuallyHidden>
            {children}
            <span>{required && "*"}</span>
          </VisuallyHidden>
        ) : (
          <>
            {children}
            <span>{required && "*"}</span>
          </>
        )}
      </FormLabel>
    );
  },
);
