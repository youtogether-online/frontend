import { SelectSeparator, type SelectSeparatorProps } from "@radix-ui/react-select";
import { cx } from "cva";
import { type ComponentRef, forwardRef } from "react";

type SeparatorProps = SelectSeparatorProps;

export const Separator = forwardRef<ComponentRef<typeof SelectSeparator>, SeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectSeparator
        ref={ref}
        className={cx("-mx-1 my-1 h-px bg-canvas-subtle", className)}
        {...props}
      />
    );
  },
);
