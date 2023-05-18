import { cva, type VariantProps } from "cva";
import { type ReactNode } from "react";

import { baseStyles } from "../styles";

const text = cva("", {
  variants: {
    ...baseStyles,
    variant: {
      primary: ["text-fgDefault"],
      secondary: ["text-fgMuted"],
      danger: ["text-dangerFg"],
    },
    component: {
      span: ["font-normal"],
      p: ["font-normal"],
      kbd: [
        "text-sm",
        "font-mono",
        "bg-canvasSubtle",
        "border-neutralMuted",
        "border",
        "border-solid",
        "rounded-md",
        "inline-block",
        "p-1",
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

export const Text = ({ component, children, sx, variant }: TextProps) => {
  const Component = component;

  return <Component className={text({ component, className: sx, variant })}>{children}</Component>;
};
