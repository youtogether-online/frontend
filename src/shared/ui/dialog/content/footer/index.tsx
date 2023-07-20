import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "@/shared/ui/types";

type FooterProps = {
  children: ReactNode;
} & SxProp;

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({ children, sx }, ref) => {
  return (
    <div className={cx("flex p-3 justify-end flex-wrap gap-2", sx)} ref={ref}>
      {children}
    </div>
  );
});
