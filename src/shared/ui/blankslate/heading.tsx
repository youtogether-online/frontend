import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type HeadingProps = {
  children: ReactNode;
} & SxProp;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, sx }, ref) => {
  return (
    <h5 className={cx("font-bold", sx)} ref={ref}>
      {children}
    </h5>
  );
});
