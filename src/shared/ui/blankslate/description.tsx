import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type DescriptionProps = {
  children: ReactNode;
} & SxProp;

export const Description = forwardRef<HTMLParagraphElement, DescriptionProps>(
  ({ children, sx }, ref) => {
    return (
      <p className={cx("text-fg-muted mt-2", sx)} ref={ref}>
        {children}
      </p>
    );
  },
);
