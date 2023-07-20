import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

// TODO: Delete z_10 and relative, fix storybook dialog story
const contentVariants = cva(
  [
    "bg-canvas-default flex flex-col rounded-md border border-border-default fixed z-10",
    "max-h-[calc(100vh-64px)] max-w-[calc(100vw-64px)] min-w-[296px]",
    "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  ],
  {
    variants: {
      width: {
        sm: "w-[296px]",
        md: "w-[320px]",
        lg: "w-[480px]",
        xl: "w-[640px]",
      },
      height: {
        sm: "h-[480px]",
        md: "h-[640px]",
        auto: "h-auto",
      },
    },
    defaultVariants: {
      width: "md",
      height: "auto",
    },
  },
);

type ContentProps = {
  children: ReactNode;
} & DialogPrimitive.DialogContentProps &
  VariantProps<typeof contentVariants>;

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, width, height, ...props }, ref) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-canvas-backdrop" />
        <DialogPrimitive.Content
          className={contentVariants({ width, height })}
          ref={ref}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  },
);
