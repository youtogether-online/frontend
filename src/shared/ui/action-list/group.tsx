import { cva, cx, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";
import { Text } from "../typography";

type GroupProps = {
  children: ReactNode;
  title: string;
  auxiliaryText?: string;
} & SxProp;

export const Group = forwardRef<HTMLLIElement, GroupProps>(
  ({ children, sx, title, auxiliaryText }, ref) => {
    return (
      <li ref={ref} className={cx(tw.text_sm.text_fgMuted, sx)}>
        <div className={tw.px_4.py_["6px"].flex.flex_col.gap_1}>
          <Text asChild sx={tw.font_bold}>
            <span>{title}</span>
          </Text>
          <Text asChild>
            <span>{auxiliaryText}</span>
          </Text>
        </div>
        <ul>{children}</ul>
      </li>
    );
  },
);
