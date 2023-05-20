import { cva, type VariantProps } from "cva";
import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { tw } from "typewind";

const link = cva([tw.text_accentFg], {
  variants: {},
});

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    children: ReactNode;
  };

export const Link = ({ children, ...props }: LinkProps) => {
  return <a {...props}>{children}</a>;
};
