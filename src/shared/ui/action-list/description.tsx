import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { Text } from "../typography";

const descriptionVariants = cva([tw.text_sm.text_fgMuted], {
  variants: {
    variant: {
      inline: [tw.ml_2],
      block: [tw.block],
    },
  },
  defaultVariants: {
    variant: "inline",
  },
});

type DescriptionProps = {
  children: ReactNode;
} & VariantProps<typeof descriptionVariants>;

export const Description = forwardRef<HTMLSpanElement, DescriptionProps>(
  ({ children, variant }, ref) => {
    return (
      <Text asChild sx={descriptionVariants({ variant })}>
        <span ref={ref}>{children}</span>
      </Text>
    );
  },
);
