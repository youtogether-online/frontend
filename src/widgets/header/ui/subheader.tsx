import { useTranslation } from "react-i18next";

import { styled } from "@/shared/config/stitches/stitches.config";
import { Text } from "@/shared/ui";

export const Subheader = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <Text variant="subtitle2" secondary>
        {t("subheader.openRoomsNow")} 0
      </Text>
    </Root>
  );
};

const Root = styled("div", {
  display: "flex",
  height: "35px",
  alignItems: "center",
});
