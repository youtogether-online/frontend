import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

const actionListVariants = cva([], {
  variants: {
    variant: {
      inset: [],
      full: [],
    },
    showDivider: {
      true: [],
    },
  },
});

type InternalActionListProps = {
  children: ReactNode;
  selectionVariant: "single" | "multiple";
} & SxProp &
  VariantProps<typeof actionListVariants>;

export const InternalActionList = forwardRef<HTMLUListElement, InternalActionListProps>(
  ({ children, sx, variant, showDivider, ...props }, ref) => {
    return (
      <ul ref={ref} className={actionListVariants({ variant, showDivider, class: sx })} {...props}>
        {children}
      </ul>
    );
  },
);
