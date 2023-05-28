import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "@/shared/ui/types";

type BodyProps = {
  children: ReactNode;
} & SxProp;

export const Body = forwardRef<HTMLDivElement, BodyProps>(({ children, sx }, ref) => {
  return (
    <div ref={ref} className={clsx(tw.border_b.border_borderDefault.p_3, sx)}>
      {children}
    </div>
  );
});
