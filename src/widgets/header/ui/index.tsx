import { ReactComponent as Logo } from "@/shared/assets/small-logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SignIn } from "@/widgets/signIn";
import { Text } from "@/shared/ui/text";
import { styled } from "@/shared/config/stitches/stitches.config";
import { SearchBar } from "@/features/searchBar/ui";
import { NavLink } from "@/shared/ui/navlink";

export const Header = () => {
  const { t } = useTranslation();

  return <Root>
    <Link to="/" className="flex items-center flex-col">
      <Logo className="text-black" />
    </Link>
    <Nav className="flex flex-1 gap-2">
      <Ul className="flex gap-4 items-center">
        <li>
          <NavLink to="/"><Text variant="body1">{t("header.mainPage.title")}</Text></NavLink>
        </li>
        <li>
          <NavLink to="/catalog"><Text variant="body1">{t("header.catalog.title")}</Text></NavLink>
        </li>
        <li>
          {/*TODO rework to dropdown menu*/}
          <NavLink to="/room" className="flex items-center">
            <Text variant="body1">{t("header.room.title")}</Text>
            {/*<MdKeyboardArrowDown />*/}
          </NavLink>
        </li>
      </Ul>
      <SearchBar />
      <SignIn />
    </Nav>
  </Root>;
};

const Root = styled("header", {
  backgroundColor: "$backgroundHeader",
  boxShadow: "$shadowHeader",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 32px"
});

const Nav = styled("nav", {
  display: "flex",
  flex: "1",
  gap: "16px"
});

const Ul = styled("ul", {
  display: "flex",
  gap: "6px",
  alignItems: "center"
});