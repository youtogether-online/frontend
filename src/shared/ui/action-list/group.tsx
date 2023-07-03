import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";
import { Text } from "../typography";

const groupVariants = cva([], {
  variants: {
    variant: {
      filled: [],
      subtle: [],
    },
    selectionVariant: {
      single: [],
      multiple: [],
    },
  },
  defaultVariants: {
    variant: "subtle",
  },
});

type GroupProps = {
  children: ReactNode;
  title: string;
  auxiliaryText?: string;
} & SxProp &
  VariantProps<typeof groupVariants>;

export const Group = forwardRef<HTMLDivElement, GroupProps>(
  ({ children, variant, selectionVariant, title, auxiliaryText }, ref) => {
    return (
      <div ref={ref} className={groupVariants({ variant, selectionVariant })}>
        <Text asChild sx={tw.text_sm.text_fgMuted.font_bold}>
          <span>{title}</span>
        </Text>
        <Text asChild sx={tw.text_sm.text_fgMuted}>
          {auxiliaryText}
        </Text>
        {children}
      </div>
    );
  },
);
