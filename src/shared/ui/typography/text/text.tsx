import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../../types";

type TextProps = {
  asChild?: boolean;
  children: ReactNode;
} & SxProp;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild, children, sx }, ref) => {
    const Component = asChild ? Slot : "p";

    return (
      <Component className={sx} ref={ref}>
        {children}
      </Component>
    );
  },
);
