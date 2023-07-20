import { forwardRef, type ReactNode } from "react";

import { Flash } from "../../flash";
import { type SxProp } from "../../types";

type ErrorProps = {
  children: ReactNode;
  onClose: () => void;
} & SxProp;

export const Error = forwardRef<HTMLDivElement, ErrorProps>(({ children, ...props }, ref) => {
  return (
    <Flash variant="danger" sx="mb_2" {...props} ref={ref}>
      {children}
    </Flash>
  );
});
