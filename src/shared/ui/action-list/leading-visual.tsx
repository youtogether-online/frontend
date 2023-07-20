import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

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
          tw.h_5.min_w_["16px"].max_w_["20px"].flex.justify_center.items_center.shrink_0.mr_2,
          sx,
        )}
      >
        {children}
      </span>
    );
  },
);
