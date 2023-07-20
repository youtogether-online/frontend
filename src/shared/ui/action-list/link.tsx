import { forwardRef, type ReactNode } from "react";

import { NavLink, type NavLinkProps } from "../nav-link";
import { type SxProp } from "../types";

type LinkProps = {
  children: ReactNode;
} & SxProp &
  NavLinkProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, sx, ...props }, ref) => {
  return (
    <NavLink className={"flex-grow"} {...props} ref={ref}>
      {children}
    </NavLink>
  );
});
