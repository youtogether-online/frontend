import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";
import { Text } from "../typography";

type DescriptionProps = {
  children: ReactNode;
} & SxProp;

export const Description = forwardRef<HTMLParagraphElement, DescriptionProps>(
  ({ children, sx }, ref) => {
    return (
      <Text sx={clsx(tw.text_fgMuted.mt_2, sx)} ref={ref}>
        {children}
      </Text>
    );
  },
);
