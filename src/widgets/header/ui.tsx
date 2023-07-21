import { Trans } from "@lingui/macro";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";

import { $isAuthorized, $session } from "@/entities/session";

import { routes } from "@/shared/routing";
import { Avatar } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { NavLink } from "@/shared/ui/nav-link";

export const Header = () => {
  const isAuthorized = useUnit($isAuthorized);
  const session = useUnit($session);

  return (
    <header className="h-14 flex flex-nowrap items-center justify-between border-b border-b-border-default bg-canvas-inset px-4 text-header-text">
      <Link to={routes.home} className="h-full">
        <Icon
          name="logos/youtogether-horizontal"
          sx="w-40 h-full text-fg-default text-header-logo"
        />
      </Link>
      {isAuthorized ? (
        <>
          <Avatar
            src="https://avatars.githubusercontent.com/u/80841256?v=4"
            alt={`${session?.name} avatar`}
            size={32}
            fallback="AV"
            fallbackColor="#fff"
          ></Avatar>
        </>
      ) : (
        <Button variant="secondary" asChild>
          <NavLink to={routes.auth}>
            <Trans>Login</Trans>
          </NavLink>
        </Button>
      )}
    </header>
  );
};
