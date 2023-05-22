import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

const modal = cva([], {
  variants: {},
});

type ModalProps = VariantProps<typeof modal> & {
  isOpen: boolean;
  onDismiss: () => void;
  children: ReactNode;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, isOpen, onDismiss }, ref) => {
    return <div ref={ref}></div>;
  },
);
