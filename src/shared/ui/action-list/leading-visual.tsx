import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type LeadingVisualProps = {
  children: ReactNode;
} & SxProp;

export const LeadingVisual = forwardRef<HTMLSpanElement, LeadingVisualProps>(
  ({ children, sx }, ref) => {
    return (
      <span ref={ref} className={sx}>
        {children}
      </span>
    );
  },
);
