import clsx from "clsx";
import { forwardRef, ReactNode } from "react";
import { tw } from "typewind";

import { SxProp } from "../../types";

type CaptionProps = {
  children: ReactNode;
} & SxProp;

export const Caption = forwardRef<HTMLSpanElement, CaptionProps>(({ children, sx }, ref) => {
  return (
    <span className={clsx(tw.text_sm.text_fgMuted, sx)} ref={ref}>
      {children}
    </span>
  );
});
