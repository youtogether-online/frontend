import { cva, type VariantProps } from "cva";
import { type ReactNode } from "react";

const modal = cva([], {
  variants: {},
});

type ModalProps = VariantProps<typeof modal> & {
  isOpen: boolean;
  onDismiss: () => void;
  children: ReactNode;
};

export const Modal = ({ children, isOpen, onDismiss }: ModalProps) => {
  return <div></div>;
};
