import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type ImageProps = {
  children: ReactNode;
} & SxProp;

export const Image = forwardRef<HTMLDivElement, ImageProps>(({ children, sx }, ref) => {
  return (
    <div className={cx("h-72 w-72", sx)} ref={ref}>
      {children}
    </div>
  );
});
