import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

const descriptionVariants = cva("text-sm text-fg-muted", {
  variants: {
    variant: {
      inline: "ml-2",
      block: "mt-2",
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
      <span ref={ref} className={descriptionVariants({ variant })}>
        {children}
      </span>
    );
  },
);
