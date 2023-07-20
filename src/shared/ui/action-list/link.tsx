import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { NavLink, type NavLinkProps } from "../nav-link";
import { type SxProp } from "../types";

type LinkProps = {
  children: ReactNode;
} & SxProp &
  NavLinkProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, sx, ...props }, ref) => {
  return (
    <NavLink className={tw.flex_grow} {...props} ref={ref}>
      {children}
    </NavLink>
  );
});
