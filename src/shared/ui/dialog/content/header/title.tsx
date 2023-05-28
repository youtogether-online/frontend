import { DialogTitle } from "@radix-ui/react-dialog";
import { forwardRef, type ReactNode } from "react";

import { Title as TitleTypography } from "@/shared/ui/typography";

type TitleProps = {
  children: ReactNode;
};

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ children }, ref) => {
  return (
    <DialogTitle asChild ref={ref}>
      <TitleTypography order={6}>{children}</TitleTypography>
    </DialogTitle>
  );
});
