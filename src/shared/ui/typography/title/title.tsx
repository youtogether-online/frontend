import { cva, type VariantProps } from "cva";
import { type ElementType, type ReactNode } from "react";
import { tw } from "typewind";

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
      1: [tw.text_5xl.font_bold],
      2: [tw.text_4xl.font_bold],
      3: [tw.text_3xl.font_bold],
      4: [tw.text_2xl.font_bold],
      5: [tw.text_xl.font_semiBold],
      6: [tw.text_lg.font_semiBold],
    },
  },
});

type TitleProps = VariantProps<typeof title> & {
  // Redefine `order` because cva doesn't provides way to set required props
  order: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
} & SxProp;

export const Title = ({ children, order }: TitleProps) => {
  const Component = titleComponentMapping[order];

  return <Component className={title({ order })}>{children}</Component>;
};
