import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

const dialogVariants = cva([], {
  variants: {},
});

type DialogProps = VariantProps<typeof dialogVariants> & {
  isOpen: boolean;
  onDismiss: () => void;
  children: ReactNode;
};

export const Modal = forwardRef<HTMLDivElement, DialogProps>(
  ({ children, isOpen, onDismiss }, ref) => {
    return <div ref={ref}></div>;
  },
);
