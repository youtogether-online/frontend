import { Slot } from "@radix-ui/react-slot";
import { Link, type LinkProps } from "atomic-router-react";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";

const linkVariants = cva([tw.text_accentFg.text_md, tw.hover(tw.underline)], {
  variants: {
    muted: {
      true: [tw.text_fgMuted, tw.hover(tw.no_underline.text_accentFg)],
    },
    underline: {
      true: [tw.underline],
    },
  },
});

export type NavLinkProps = LinkProps<any> &
  VariantProps<typeof linkVariants> & {
    children: ReactNode;
    asChild?: boolean;
  } & SxProp;

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, asChild, underline, muted, sx, ...props }, ref) => {
    const Component = asChild ? Slot : Link;

    return (
      <Component ref={ref} className={linkVariants({ muted, underline, class: sx })} {...props}>
        {children}
      </Component>
    );
  },
);
