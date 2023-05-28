import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

// TODO: Delete z_10 and relative, fix storybook dialog story
const contentVariants = cva(
  [
    tw.bg_canvasDefault.flex.flex_col.rounded_md.border.border_borderDefault.max_h_[
      "calc(100vh - 64px)"
    ].max_w_["calc(100vw - 64px)"].fixed.z_10.min_w_["296px"].top_["50%"].left_["50%"].translate_x_[
      "-50%"
    ].translate_y_["-50%"],
  ],
  {
    variants: {
      width: {
        sm: [tw.w_["296px"]],
        md: [tw.w_["320px"]],
        lg: [tw.w_["480px"]],
        xl: [tw.w_["640pxs"]],
      },
      height: {
        sm: [tw.h_["480px"]],
        md: [tw.h_["640px"]],
        auto: [tw.h_auto],
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
        <DialogPrimitive.Overlay className={tw.fixed.inset_0.bg_canvasBackdrop} />
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
