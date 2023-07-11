import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";
import { Text } from "../typography";

const groupVariants = cva([tw.text_sm.text_fgMuted], {
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

export const Group = forwardRef<HTMLLIElement, GroupProps>(
  ({ children, variant, selectionVariant, title, auxiliaryText }, ref) => {
    return (
      <li ref={ref} className={groupVariants({ variant, selectionVariant })}>
        <div className={tw.px_4.py_["6px"]}>
          <Text asChild sx={tw.font_bold}>
            <span>{title}</span>
          </Text>
          <Text asChild>{auxiliaryText}</Text>
        </div>
        <ul>{children}</ul>
      </li>
    );
  },
);
