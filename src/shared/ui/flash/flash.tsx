import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode, useState } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";

const flashVariants = cva([tw.p_4.my_auto.border.rounded_md.flex], {
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
    const [isOpen, setIsOpen] = useState(true);
    const Component = asChild ? Slot : "div";

    if (!isOpen) return null;

    return (
      <Component className={clsx(flashVariants({ block, variant }))} {...props} ref={ref}>
        {children}
      </Component>
    );
  },
);
