import { useTranslation } from "react-i18next";

import { styled } from "@/shared/config/stitches/stitches.config";
import { routes } from "@/shared/routes";
import { NavLink } from "@/shared/ui";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <Navigation>
      <div>
        <Ul>
          <Li>
            <NavLink to={routes.home}>{t("navigation.title.home")}</NavLink>
          </Li>
          <Li>
            <NavLink to={routes.home}>{t("navigation.title.rooms")}</NavLink>
          </Li>
          <Li>
            <NavLink to={routes.catalog}>{t("navigation.title.catalog")}</NavLink>
          </Li>
        </Ul>
      </div>
      <div>
        <Ul>
          <Li>
            <NavLink to={routes.home}>{t("navigation.title.supportUs")}</NavLink>
          </Li>
          <Li>
            <NavLink to={routes.home}>{t("navigation.title.feedback")}</NavLink>
          </Li>
        </Ul>
      </div>
    </Navigation>
  );
};
const Navigation = styled("nav", {
  flex: "1",
  height: "30px",
  display: "flex",
  justifyContent: "space-between",
});

const Ul = styled("ul", {
  display: "flex",
  height: "100%",
  gap: "16px",
  alignItems: "center",
});

const Li = styled("li", {});
