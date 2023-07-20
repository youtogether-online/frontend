import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../../types";

type CaptionProps = {
  children: ReactNode;
} & SxProp;

export const Caption = forwardRef<HTMLSpanElement, CaptionProps>(({ children, sx }, ref) => {
  return (
    <span className={cx("text-sm text-fg-muted", sx)} ref={ref}>
      {children}
    </span>
  );
});
