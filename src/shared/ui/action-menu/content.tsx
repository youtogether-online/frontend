import { DropdownMenuContent, type DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

import { type SxProp } from "../types";

type ContentProps = DropdownMenuContentProps & SxProp;

export const Content = forwardRef<HTMLDivElement, ContentProps>(({ children, ...props }, ref) => {
  return (
    <DropdownMenuContent
      ref={ref}
      className="w-40 border border-border-default rounded-sm bg-canvas-overlay py-1"
      {...props}
    >
      {children}
    </DropdownMenuContent>
  );
});
