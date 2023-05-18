import { cva, type VariantProps } from "cva";
import { type ElementType, type ReactNode } from "react";

import { baseStyles } from "../styles";

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
    ...baseStyles,
    order: {
      1: ["text-5xl", "font-bold"],
      2: ["text-4xl", "font-bold"],
      3: ["text-3xl", "font-bold"],
      4: ["text-2xl", "font-bold"],
      5: ["text-xl", "font-semiBold"],
      6: ["text-lg", "font-semiBold"],
    },
  },
});

type TitleProps = VariantProps<typeof title> & {
  // Redefine `order` because cva doesn't provides way to set required props
  order: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

export const Title = ({ children, order, fontSize, fontWeight, mono }: TitleProps) => {
  const Component = titleComponentMapping[order];

  return <Component className={title({ order, fontSize, fontWeight, mono })}>{children}</Component>;
};
