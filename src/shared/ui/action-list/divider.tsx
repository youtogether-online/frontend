import { cx } from "cva";
import { forwardRef } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";

type DividerProps = SxProp;

export const Divider = forwardRef<HTMLLIElement, DividerProps>(({ sx }, ref) => {
  return <li ref={ref} className={cx(tw.h_["1px"].my_2.bg_actionListItemInlineDivider, sx)} />;
});
