import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";

import { SignIn } from "@/widgets/sign-in";
import { createSignInModel } from "@/widgets/sign-in/model";

import { SearchBar } from "@/features/search-bar";

import { $isAuthorized, getSessionQuery, UserMenu } from "@/entities/session";

import { styled } from "@/shared/config/stitches/stitches.config";
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
    <Root>
      <Main>
        <LinkLogo to={routes.home} centerLogo={centerLogo}>
          <IconLogoHorizontal />
        </LinkLogo>
        {search && (
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
        )}
        {user && (
          <User>
            {!isAuthorized && <Button>{t("signIn")}</Button>}
            {isAuthorized && session != null && (
              <Avatar
                url={session.avatar}
                alt={session.username.slice(0, 2)}
                fallback={session.username.slice(0, 2)}
              />
            )}
            <HoverMenu>
              {!isAuthorized && <SignIn model={signInModel} />}
              {session != null && <UserMenu />}
            </HoverMenu>
          </User>
        )}
      </Main>
    </Root>
  );
};

const Main = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "12px 0",
  height: "65px",
});

const SearchBarContainer = styled("div", {
  marginRight: "$4",
  height: "100%",
  width: "100%",
  maxWidth: "400px",
});

const Root = styled("header", {
  maxWidth: "$containerLg",
  width: "100%",
  margin: "0 auto",
});

const LinkLogo = styled(NavLink, {
  margin: "0 auto 0 0",
  color: "$headerLogo",

  variants: {
    centerLogo: {
      true: {
        margin: "0 auto",
      },
    },
  },
});

const HoverMenu = styled("div", {
  display: "flex",
  position: "absolute",
  zIndex: 100,
  top: "-13px",
  right: "-13px",
  opacity: 0,
  padding: "12px",
  backgroundColor: "$backgroundContainer",
  minWidth: "280px",
  borderRadius: "$tertiary",
  boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.1)",
  transform: "scale(0)",
  transformOrigin: "90% 10%",
  transition: "opacity 0.3s, transform 0.3s",

  "&:focus-within": {
    opacity: 1,
    transform: "scale(1)",
    transition: "opacity 0.3s, transform 0.3s",
  },
});

const User = styled("div", {
  position: "relative",

  [`&:hover ${HoverMenu}`]: {
    opacity: 1,
    transform: "scale(1)",
    transition: "opacity 0.3s, transform 0.3s",
  },
});
