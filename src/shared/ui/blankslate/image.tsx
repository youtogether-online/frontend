import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";

type ImageProps = {
  children: ReactNode;
} & SxProp;

export const Image = forwardRef<HTMLDivElement, ImageProps>(({ children, sx }, ref) => {
  return (
    <div className={clsx(tw.h_72.w_72, sx)} ref={ref}>
      {children}
    </div>
  );
});
