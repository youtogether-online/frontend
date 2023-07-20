import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

import { Icon } from "../icon";
import { type SxProp } from "../types";

const flashVariants = cva("p-4 my-auto border rounded-md flex justify-between items-center", {
  variants: {
    block: {
      true: "w-full",
    },
    variant: {
      default: "bg-accent-subtle border-accent-muted",
      danger: "bg-danger-subtle border-danger-muted",
      success: "bg-success-subtle border-success-muted",
    },
  },
  defaultVariants: {
    variant: "default",
    block: false,
  },
});

type FlashProps = {
  asChild?: boolean;
  children: ReactNode;
  onClose?: () => void;
} & SxProp &
  VariantProps<typeof flashVariants>;

export const Flash = forwardRef<HTMLDivElement, FlashProps>(
  ({ asChild, children, block, variant, sx, onClose, ...props }, ref) => {
    const Component = asChild ? Slot : "div";

    return (
      <Component className={flashVariants({ block, variant, class: sx })} {...props} ref={ref}>
        {children}
        {onClose && (
          <>
            <button onClick={onClose} className="flex items-center">
              <Icon name="abstract/cross" viewBox="0 0 20 20" height="20" width="20" />
            </button>
          </>
        )}
      </Component>
    );
  },
);
