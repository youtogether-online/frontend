import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "@/shared/ui/types";

type HeaderProps = {
  children: ReactNode;
} & SxProp;

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({ children, sx }, ref) => {
  return (
    <div
      ref={ref}
      className={cx("flex justify-between items-center p-3 border-b border-border-default", sx)}
    >
      {children}
    </div>
  );
});
