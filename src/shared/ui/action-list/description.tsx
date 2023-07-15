import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { Text } from "../typography";

type DescriptionProps = {
  children: ReactNode;
};

export const Description = forwardRef<HTMLSpanElement, DescriptionProps>(({ children }, ref) => {
  return (
    <Text asChild sx={tw.text_sm.text_fgMuted}>
      <span ref={ref}>{children}</span>
    </Text>
  );
});
