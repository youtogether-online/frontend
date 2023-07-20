import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type InternalBlankslateProps = {
  children: ReactNode;
} & SxProp;

export const InternalBlankslate = forwardRef<HTMLDivElement, InternalBlankslateProps>(
  ({ children, sx }, ref) => {
    return (
      <div ref={ref} className={cx("flex flex-col items-center p-8", sx)}>
        {children}
      </div>
    );
  },
);
