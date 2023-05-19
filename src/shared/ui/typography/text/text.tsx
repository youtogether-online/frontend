import { cva, type VariantProps } from "cva";
import { type ReactNode } from "react";
import { tw } from "typewind";

import { baseStyles } from "../styles";

const text = cva("", {
  variants: {
    ...baseStyles,
    variant: {
      primary: [tw.text_fgDefault],
      secondary: [tw.text_fgMuted],
      danger: [tw.text_dangerFg],
    },
    component: {
      span: [tw.font_normal],
      p: [tw.font_normal],
      kbd: [
        tw.text_sm,
        tw.font_mono,
        tw.bg_canvasSubtle,
        tw.border_neutralMuted,
        tw.border,
        tw.border_solid,
        tw.rounded_md,
        tw.inline_block,
        tw.p_1,
      ],
      em: [],
      u: [],
      small: [],
      strong: [],
    },
  },
  defaultVariants: {
    component: "p",
    variant: "primary",
  },
});

type TextProps = VariantProps<typeof text> & {
  // Redefine `type` because cva doesn't provides way to set required props
  component: "span" | "p" | "kbd" | "em" | "u" | "small" | "strong";
  sx?: string;
  children: ReactNode;
};

export const Text = ({ component, children, variant }: TextProps) => {
  const Component = component;

  return <Component className={text({ component, variant })}>{children}</Component>;
};
