import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "@/shared/ui/types";

type BodyProps = {
  children: ReactNode;
} & SxProp;

export const Body = forwardRef<HTMLDivElement, BodyProps>(({ children, sx }, ref) => {
  return (
    <div ref={ref} className={cx(tw.border_b.border_borderDefault.p_3, sx)}>
      {children}
    </div>
  );
});
