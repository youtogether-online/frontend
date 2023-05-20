import { cva, type VariantProps } from "cva";
import { type ReactNode } from "react";
import { tw } from "typewind";

import { baseStyles } from "../styles";

const text = cva([], {
  variants: {
    ...baseStyles,
    variant: {
      primary: [tw.text_fgDefault],
      secondary: [tw.text_fgMuted],
      danger: [tw.text_dangerFg],
    },
    as: {
      span: [tw.font_normal],
      p: [tw.font_normal],
      kbd: [
        tw.text_sm.font_mono.bg_canvasSubtle.border_neutralMuted.border.border_solid.rounded_md
          .inline_block.p_1,
      ],
      em: [],
      u: [],
      small: [],
      strong: [],
    },
  },
  defaultVariants: {
    as: "p",
    variant: "primary",
  },
});

type TextProps = VariantProps<typeof text> & {
  // Redefine `type` because cva doesn't provides way to set required props
  as: "span" | "p" | "kbd" | "em" | "u" | "small" | "strong";
  sx?: string;
  children: ReactNode;
};

export const Text = ({ as, children, variant }: TextProps) => {
  const Component = as;

  return <Component className={text({ as, variant })}>{children}</Component>;
};
