import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";

import { SignIn } from "@/widgets/sign-in";
import { createSignInModel } from "@/widgets/sign-in/model";

import { SearchBar } from "@/features/search-bar";

import { $isAuthorized, getSessionQuery, UserMenu } from "@/entities/session";

import { routes } from "@/shared/routes";
import { Avatar, Button, IconLogoHorizontal, NavLink } from "@/shared/ui";

interface HeaderProps {
  subheader?: boolean;
  navbar?: boolean;
  search?: boolean;
  user?: boolean;
  centerLogo?: boolean;
}

export const Header = ({ subheader, navbar, search, user, centerLogo }: HeaderProps) => {
  const { t } = useTranslation();

  const isAuthorized = useUnit($isAuthorized);
  const { data: session } = useUnit(getSessionQuery);

  const signInModel = createSignInModel.createModel();

  return (
    <div>
      <main>
        <Link to={routes.home}>
          <IconLogoHorizontal />
        </Link>
        {search && (
          <div>
            <SearchBar />
          </div>
        )}
        {user && (
          <div>
            {!isAuthorized && <Button>{t("signIn")}</Button>}
            {isAuthorized && session != null && (
              <Avatar
                url={session.avatar}
                alt={session.username.slice(0, 2)}
                fallback={session.username.slice(0, 2)}
              />
            )}
            <div>
              {!isAuthorized && <SignIn model={signInModel} />}
              {session != null && <UserMenu />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
