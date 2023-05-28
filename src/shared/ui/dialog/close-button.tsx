import { DialogClose, type DialogCloseProps } from "@radix-ui/react-dialog";
import { forwardRef, type ReactNode } from "react";

type CloseButtonProps = {
  children: ReactNode;
} & DialogCloseProps;

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <DialogClose ref={ref} {...props}>
        {children}
      </DialogClose>
    );
  },
);
