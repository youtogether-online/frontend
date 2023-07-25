import { DialogTitle } from "@radix-ui/react-dialog";
import { forwardRef, type ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ children }, ref) => {
  return (
    <DialogTitle asChild ref={ref}>
      <h6 className="font-500"></h6>
    </DialogTitle>
  );
});
