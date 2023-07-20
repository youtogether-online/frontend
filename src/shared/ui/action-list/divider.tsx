import { cx } from "cva";
import { forwardRef } from "react";

import { type SxProp } from "../types";

type DividerProps = SxProp;

export const Divider = forwardRef<HTMLLIElement, DividerProps>(({ sx }, ref) => {
  return <li ref={ref} className={cx("my-2 h-[1px] bg-action-list-item-inline-divider", sx)} />;
});
