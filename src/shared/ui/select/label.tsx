import { SelectLabel, type SelectLabelProps } from "@radix-ui/react-select";
import { cx } from "cva";
import { type ElementRef, forwardRef } from "react";

type LabelProps = SelectLabelProps;

export const Label = forwardRef<ElementRef<typeof SelectLabel>, LabelProps>(
  ({ className, ...props }, ref) => (
    <SelectLabel
      ref={ref}
      className={cx("px-2 py-1.5 text-sm font-semibold", className)}
      {...props}
    />
  ),
);
