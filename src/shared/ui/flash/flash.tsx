import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";

const flashVariants = cva([tw.p_4.my_auto.border.rounded_md], {
  variants: {
    block: {
      true: [tw.w_full],
    },
    variant: {
      default: [tw.bg_accentSubtle.border_accentMuted],
      danger: [tw.bg_dangerSubtle.border_dangerMuted],
      success: [tw.bg_successSubtle.border_successMuted],
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
} & SxProp &
  VariantProps<typeof flashVariants>;

export const Flash = forwardRef<HTMLDivElement, FlashProps>(
  ({ asChild, children, block, variant, sx, ...props }, ref) => {
    const Component = asChild ? Slot : "div";

    return (
      <Component ref={ref} {...props} className={clsx(flashVariants({ variant, block }), sx)}>
        {children}
      </Component>
    );
  },
);
