import { Slot } from "@radix-ui/react-slot";
import { Link, type LinkProps } from "atomic-router-react";
import { cva, type VariantProps } from "cva";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../types";

const linkVariants = cva("text-accent-fg hover:underline", {
  variants: {
    muted: {
      true: ["text-fg-muted", "hover:(no-underline text-accent-fg)"],
    },
    underline: {
      true: ["underline"],
    },
  },
});

export type NavLinkProps = Omit<LinkProps<any>, "className"> &
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
