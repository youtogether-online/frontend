import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";

import { SignIn } from "@/widgets/sign-in";
import { createSignInModel } from "@/widgets/sign-in/model";

import { $isAuthorized, getSessionQuery } from "@/entities/session";

import { routes } from "@/shared/routes";
import { Icon } from "@/shared/ui/icon";

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
          <Icon name="common/horizontal-logo" />
        </Link>
      </main>
    </div>
  );
};
