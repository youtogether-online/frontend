import { RouteParams } from "atomic-router";
import { Link, type LinkProps } from "atomic-router-react";
import { type ReactNode } from "react";

import { css, styled } from "@/shared/config/stitches/stitches.config";

const navLinkStyles = css({
  color: "$textPrimary",
  textDecoration: "none",
  transition: "color 0.1s",

  "&:hover": {
    color: "$primaryTextHover",
  },
});

type NavLinkProps = LinkProps<any> & {
  children: ReactNode;
};

export const NavLink = ({ children, ...LinkProps }: NavLinkProps) => {
  return (
    <>
      {/* TODO: Change styling way (Stitches doesn't has method for creating static css classes) */}
      <Link className={navLinkStyles().className} {...LinkProps}>
        <Text>{children}</Text>
      </Link>
    </>
  );
};

const Text = styled("span", {
  fontSize: "$link",
});
