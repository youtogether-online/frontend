import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";

type InternalBlankslateProps = {
  children: ReactNode;
} & SxProp;

export const InternalBlankslate = forwardRef<HTMLDivElement, InternalBlankslateProps>(
  ({ children, sx }, ref) => {
    return (
      <div ref={ref} className={clsx(tw.flex.flex_col.items_center.p_8, sx)}>
        {children}
      </div>
    );
  },
);
