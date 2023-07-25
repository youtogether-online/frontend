import { Trans } from "@lingui/macro";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";

import { getSessionQuery, signOutClicked } from "@/entities/session";

import { fallbackFromName } from "@/shared/lib/fallback-from-name";
import { routes } from "@/shared/routing";
import { ActionMenu } from "@/shared/ui/action-menu";
import { Avatar } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { NavLink } from "@/shared/ui/nav-link";

export const Header = () => {
  const session = useUnit(getSessionQuery.$data);
  const signOut = useUnit(signOutClicked);

  return (
    <header className="h-14 flex flex-nowrap items-center justify-between border-b border-t border-b-border-default border-t-border-default bg-canvas-inset px-6 text-header-text">
      <Link to={routes.home} className="h-full">
        <Icon
          name="logos/youtogether-horizontal"
          sx="w-40 h-full text-fg-default text-header-logo"
        />
      </Link>
      {session ? (
        <ActionMenu>
          <ActionMenu.Trigger asChild>
            <Avatar
              src={session.avatar}
              alt={`${session.name} avatar`}
              sx="cursor-pointer"
              size={32}
              fallback={fallbackFromName(session.name)}
              fallbackColor="var(--un-preset-theme-avatar-bg)"
            />
          </ActionMenu.Trigger>
          <ActionMenu.Portal>
            <ActionMenu.Content align="end" side="bottom" sideOffset={8}>
              <ActionMenu.Arrow />
              <ActionMenu.Item>
                <ActionMenu.Link to={routes.profile} params={{ name: session.name }}>
                  <Trans>Your profile</Trans>
                </ActionMenu.Link>
              </ActionMenu.Item>
              <ActionMenu.Item>
                <ActionMenu.Link to={routes.settings.root}>
                  <Trans>Settings</Trans>
                </ActionMenu.Link>
              </ActionMenu.Item>
              <ActionMenu.Item variant="danger" onClick={signOut}>
                <Trans>Sign out</Trans>
              </ActionMenu.Item>
            </ActionMenu.Content>
          </ActionMenu.Portal>
        </ActionMenu>
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
