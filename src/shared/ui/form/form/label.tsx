import { FormLabel, type FormLabelProps } from "@radix-ui/react-form";
import clsx from "clsx";
import { cva, type VariantProps } from "cva";
import { forwardRef, type LabelHTMLAttributes, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../../types";

const labelVariants = cva([tw.text_md.font_bold], {
  variants: {
    visuallyHidden: {
      true: [tw.hidden],
    },
  },
});

type LabelProps = {
  children: ReactNode;
  required?: boolean;
} & SxProp &
  FormLabelProps &
  VariantProps<typeof labelVariants>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, required, sx, visuallyHidden, ...props }, ref) => {
    return (
      <FormLabel className={clsx(labelVariants({ visuallyHidden }), sx)} ref={ref} {...props}>
        {children}
        <span>{required && "*"}</span>
      </FormLabel>
    );
  },
);
