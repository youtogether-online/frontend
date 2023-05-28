import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "@/shared/ui/types";

type FooterProps = {
  children: ReactNode;
} & SxProp;

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({ children, sx }, ref) => {
  return (
    <div className={clsx(tw.flex.p_3.justify_end.flex_wrap.gap_2, sx)} ref={ref}>
      {children}
    </div>
  );
});
