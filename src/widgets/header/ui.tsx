import { Trans } from "@lingui/macro";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { tw } from "typewind";

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
    <header
      className={
        tw.h_14.flex.p_4.text_headerText.bg_canvasInset.items_center.flex_nowrap.justify_between
          .border_b.border_b_borderDefault
      }
    >
      <Link to={routes.home}>
        <Icon name="logos/youtogether-horizontal" sx={tw.h_8.w_40.text_fgDefault} />
      </Link>
      {isAuthorized ? (
        <>
          <Avatar
            src="https://avatars.githubusercontent.com/u/80841256?v=4"
            alt={`${session?.firstName} avatar`}
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
