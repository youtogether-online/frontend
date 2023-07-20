import { cva, cx, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

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
      <li ref={ref} className={cx("text-sm text-fg-muted", sx)}>
        <div className="flex flex-col gap-1 px-4 py-[6px]">
          <Text asChild sx="font-bold">
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
