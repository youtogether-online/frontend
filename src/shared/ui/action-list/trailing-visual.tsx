import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type TrailingVisualProps = {
  children: ReactNode;
} & SxProp;

export const TrailingVisual = forwardRef<HTMLSpanElement, TrailingVisualProps>(
  ({ children, sx }, ref) => {
    return (
      <span
        ref={ref}
        className={cx(
          "h-5 min-w-[16px] max-w-[20px] flex justify-center items-center shrink-0 ml-2",
          sx,
        )}
      >
        {children}
      </span>
    );
  },
);
