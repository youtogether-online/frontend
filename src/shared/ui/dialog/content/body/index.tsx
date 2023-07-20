import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "@/shared/ui/types";

type BodyProps = {
  children: ReactNode;
} & SxProp;

export const Body = forwardRef<HTMLDivElement, BodyProps>(({ children, sx }, ref) => {
  return (
    <div ref={ref} className={cx("border-b border-border-default p-3", sx)}>
      {children}
    </div>
  );
});
