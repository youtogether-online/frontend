import { DropdownMenuArrow, type DropdownMenuArrowProps } from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

type ArrowProps = DropdownMenuArrowProps;

export const Arrow = forwardRef<SVGSVGElement, ArrowProps>(({ ...props }, ref) => {
  return (
    <DropdownMenuArrow
      className="fill-canvas-overlay stroke-2 stroke-border-default"
      ref={ref}
      {...props}
    />
  );
});
