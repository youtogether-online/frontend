import { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/shared/ui/button";
import { styled } from "@/shared/config/stitches/stitches.config";
import { ReactComponent as Cross } from "@/shared/ui/icons/cross.svg";

type ModalProps = {
  title?: string,
  description?: string,
  triggerText: string,
  children: ReactNode,
}

export const Dialog = ({ children, title, triggerText, description }: ModalProps) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button variant="text">
          {triggerText}
        </Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogPrimitive.Description>
            {description}
          </DialogPrimitive.Description>
          {
            children
          }
          <DialogPrimitive.Close asChild>
            <Button align="topRight" variant="icon" icon={<Cross />} />
          </DialogPrimitive.Close>
        </DialogContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

const DialogOverlay = styled(DialogPrimitive.Overlay, {
  background: "$backgroundMask",
  position: "fixed",
  inset: "0"
});

const DialogContent = styled(DialogPrimitive.Content, {
  backgroundColor: "$backgroundContainer",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  borderRadius: "$roundedMedium",
  padding: "24px"
});

const DialogTitle = styled(DialogPrimitive.Title, {
  textAlign: "center",
  marginBottom: "20px"
});