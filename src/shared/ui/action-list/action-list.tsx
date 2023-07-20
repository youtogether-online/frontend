import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

type InternalActionListProps = {
  children: ReactNode;
} & SxProp;

export const InternalActionList = forwardRef<HTMLUListElement, InternalActionListProps>(
  ({ children, sx, ...props }, ref) => {
    return (
      <ul ref={ref} {...props}>
        {children}
      </ul>
    );
  },
);
