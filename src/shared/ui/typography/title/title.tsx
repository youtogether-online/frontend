import { cva, type VariantProps } from "cva";
import { type ElementType, forwardRef, type ReactNode } from "react";

import { type SxProp } from "../../types";

type TitleComponentMapping = Record<string, ElementType>;

const titleComponentMapping: TitleComponentMapping = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const title = cva("", {
  variants: {
    order: {
      1: "text-5xl font-semibold",
      2: "text-4xl font-semibold",
      3: "text-3xl font-semibold",
      4: "text-2xl font-semibold",
      5: "text-xl font-medium",
      6: "text-lg font-medium",
    },
  },
});

type TitleProps = VariantProps<typeof title> & {
  // Redefine `order` because cva doesn't provides way to set required props
  order: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
} & SxProp;

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ children, order, sx }, ref) => {
  const Component = titleComponentMapping[order];

  return (
    <Component className={title({ order, class: sx })} ref={ref}>
      {children}
    </Component>
  );
});
