import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";

type ActionProps = {
  children: ReactNode;
} & SxProp;

export const Action = forwardRef<HTMLDivElement, ActionProps>(({ children, sx }, ref) => {
  return (
    <div className={cx(tw.text_md.mt_4.first_of_type(tw.mt_6), sx)} ref={ref}>
      {children}
    </div>
  );
});
