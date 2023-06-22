import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { Icon } from "../icon";
import { type SxProp } from "../types";

const flashVariants = cva([tw.p_4.my_auto.border.rounded_md.flex.justify_between.items_center], {
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
            <button onClick={onClose} className={tw.flex.items_center}>
              <Icon name="abstract/cross" viewBox="0 0 20 20" height="20" width="20" />
            </button>
          </>
        )}
      </Component>
    );
  },
);
