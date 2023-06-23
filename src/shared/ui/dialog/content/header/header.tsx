import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "@/shared/ui/types";

type HeaderProps = {
  children: ReactNode;
} & SxProp;

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({ children, sx }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(tw.flex.justify_between.items_center.p_3.border_b.border_borderDefault, sx)}
    >
      {children}
    </div>
  );
});
