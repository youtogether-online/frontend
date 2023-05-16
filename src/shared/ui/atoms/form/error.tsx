import { useTranslation } from "react-i18next";

import { type ServerErrorResponse } from "@/shared/api/internal/types";
import { styled } from "@/shared/config/stitches/stitches.config";
import { Text } from "@/shared/ui";

export const Error = ({ error, advice }: ServerErrorResponse) => {
  const { t } = useTranslation();

  return (
    <ErrorStyled>
      <Text variant="body1">{error || t("unknownError")}</Text>
      {advice && <Text variant="body2">{advice}</Text>}
    </ErrorStyled>
  );
};

const ErrorStyled = styled("div", {
  backgroundColor: "$errorBackground",
  padding: "12px",
  borderRadius: "$tertiary",
  color: "$errorText",
  display: "flex",
  gap: "4px",
  flexDirection: "column",
});
