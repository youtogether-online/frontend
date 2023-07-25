import { t, Trans } from "@lingui/macro";
import { useUnit } from "effector-react";
import { type ReactNode } from "react";

import { getSessionQuery } from "@/entities/session";

import { fallbackFromName } from "@/shared/lib/fallback-from-name";
import { routes } from "@/shared/routing";
import { ActionList } from "@/shared/ui/action-list";
import { Avatar } from "@/shared/ui/avatar";
import { Icon } from "@/shared/ui/icon";
import { NavLink } from "@/shared/ui/nav-link";

type SettingsLayoutProps = {
  children: ReactNode;
};

const { profile, account, appearance, language } = routes.settings;

export const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  const session = useUnit(getSessionQuery.$data);

  const [profileOpened, accountOpened, appearanceOpened, languageOpened] = useUnit([
    profile.$isOpened,
    account.$isOpened,
    appearance.$isOpened,
    language.$isOpened,
  ]);

  if (!session) return null;

  return (
    <section className="px-4 container">
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <Avatar
            size={48}
            src={session.avatar}
            alt={`${session.name} avatar`}
            fallback={fallbackFromName(session.name)}
            fallbackColor="var(--un-preset-theme-avatar-bg)"
          />
          <div className="flex flex-col justify-between">
            <NavLink
              to={routes.profile}
              params={{ name: session.name }}
              className="flex flex-col gap-1 text-xl md:(flex-row)"
            >
              <h1 className="text-xl">{session.name}</h1>
              <p className="text-fg-muted">
                ({session.firstName ?? session.firstName}
                &nbsp;
                {session.lastName ?? session.lastName})
              </p>
            </NavLink>
            <div>
              <p className="text-fg-muted">
                <Trans>Your profile</Trans>
              </p>
            </div>
          </div>
        </div>
        <div className="flex xl:gap-6">
          <ActionList sx="w-[220px] md:w-[256px] xl:w-[296px]">
            <ActionList.Group title={t`Profile`}>
              <ActionList.LinkItem to={profile} active={profileOpened}>
                <ActionList.LeadingVisual>
                  <Icon name="objects/person" />
                </ActionList.LeadingVisual>
                <Trans>Public profile</Trans>
              </ActionList.LinkItem>
              <ActionList.LinkItem to={account} active={accountOpened}>
                <ActionList.LeadingVisual>
                  <Icon name="objects/gear" />
                </ActionList.LeadingVisual>
                <Trans>Account</Trans>
              </ActionList.LinkItem>
              <ActionList.LinkItem to={appearance} active={appearanceOpened}>
                <ActionList.LeadingVisual>
                  <Icon name="objects/magic-wand" />
                </ActionList.LeadingVisual>
                <Trans>Appearance</Trans>
              </ActionList.LinkItem>
              <ActionList.LinkItem to={language} active={languageOpened}>
                <ActionList.LeadingVisual>
                  <Icon name="objects/globe" />
                </ActionList.LeadingVisual>
                <Trans>Language</Trans>
              </ActionList.LinkItem>
            </ActionList.Group>
          </ActionList>
          <div className="max-w-3xl w-full">{children}</div>
        </div>
      </div>
    </section>
  );
};
