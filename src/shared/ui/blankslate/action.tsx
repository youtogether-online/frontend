import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type ActionProps = {
  children: ReactNode;
} & SxProp;

export const Action = forwardRef<HTMLDivElement, ActionProps>(({ children, sx }, ref) => {
  return (
    <div className={cx("text-md mt-4 first-of-type:mt-6", sx)} ref={ref}>
      {children}
    </div>
  );
});
