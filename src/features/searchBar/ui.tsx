import { styled } from "@/shared/config/stitches/stitches.config";
import { useTranslation } from "react-i18next";
import { ReactComponent as Search } from "@/shared/ui/icons/search.svg";

export const SearchBar = () => {
  const { t } = useTranslation();

  return <Label>
    <Input placeholder={t("header.search.placeholder")} />
    <Button>
      <Search />
    </Button>
  </Label>;
};

const Label = styled("label", {
  flex: "1",
  display: "flex",

  "& svg": {
    width: "24px",
    height: "24px"
  }
});

const Input = styled("input", {
  outline: "0px",
  width: "100%",
  background: "inherit",
  border: "1px solid $border",
  borderRadius: "$roundedExtra 0 0 $roundedExtra",
  padding: "8px 0px 8px 20px",
  borderRight: "none",

  "&::placeholder": {
    color: "$textTertiary"
  }
});

const Button = styled("button", {
  border: "1px solid $border",
  borderRadius: "0 $roundedExtra $roundedExtra 0",
  background: "none",
  padding: "0px 12px 0px 8px",
  cursor: "pointer"
});