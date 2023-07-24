import {
  SelectContent,
  type SelectContentProps,
  SelectPortal,
  SelectViewport,
} from "@radix-ui/react-select";
import { cx } from "cva";
import { type ElementRef, forwardRef } from "react";

type ContentProps = SelectContentProps;

export const Content = forwardRef<ElementRef<typeof SelectContent>, ContentProps>(
  ({ children, className, ...props }, ref) => (
    <SelectPortal>
      <SelectContent
        sideOffset={4}
        ref={ref}
        className={cx(
          "text-md bg-canvas-inset border border-border-default w-full rounded-md overflow-hidden shadow-md",
          className,
        )}
        {...props}
      >
        <SelectViewport className="h-[var(--radix-select-trigger-height)] min-w-[calc(var(--radix-select-trigger-width)-2px)] w-full p-1.5">
          {children}
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  ),
);
