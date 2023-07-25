import { cx } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type GroupProps = {
  children: ReactNode;
  title: string;
  auxiliaryText?: string;
} & SxProp;

export const Group = forwardRef<HTMLLIElement, GroupProps>(
  ({ children, sx, title, auxiliaryText }, ref) => {
    return (
      <li ref={ref} className={cx("text-sm text-fg-muted", sx)}>
        <div className="flex flex-col gap-1 px-2 py-[6px]">
          <span className="font-bold">{title}</span>
          <span>{auxiliaryText}</span>
        </div>
        <ul>{children}</ul>
      </li>
    );
  },
);
