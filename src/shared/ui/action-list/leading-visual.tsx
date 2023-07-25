import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type LeadingVisualProps = {
  children: ReactNode;
} & SxProp;

export const LeadingVisual = forwardRef<HTMLSpanElement, LeadingVisualProps>(
  ({ children, sx }, ref) => {
    return (
      <span
        ref={ref}
        className={cx(
          "h-5 min-w-[16px] max-w-[20px] flex justify-center items-center shrink-0 mr-2 text-fg-muted p-[2px]",
          sx,
        )}
      >
        {children}
      </span>
    );
  },
);
