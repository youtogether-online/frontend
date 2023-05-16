import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";

import { getSessionQuery, signOutClicked } from "@/entities/session";

import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/atoms/button/button";
import { NavLink } from "@/shared/ui/atoms/navLink";
import { Text } from "@/shared/ui/atoms/text";

export const UserMenu = () => {
  const signOut = useUnit(signOutClicked);
  const { data: session } = useUnit(getSessionQuery);

  const { t, i18n } = useTranslation();

  if (session == null) {
    return null;
  }

  return (
    <div>
      <div>
        <Text variant="h5">{t("notifications")}</Text>
      </div>
      <div>
        <Text variant="h5">{session.username}</Text>
        <div>
          <div>
            <NavLink to={routes.profile} params={{ username: session.username }}>
              {t("yourProfile")}
            </NavLink>
          </div>
          <div>
            <NavLink to={routes.friends} params={{ username: session.username }}>
              {t("friends")}
            </NavLink>
          </div>
          <div>
            <NavLink to={routes.home}>{t("favorites")}</NavLink>
          </div>
          <div>
            <NavLink to={routes.settings}>{t("settings")}</NavLink>
          </div>
          <div>
            <Button variant="link" size="fitContent" onClick={signOut}>
              {t("exit")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
