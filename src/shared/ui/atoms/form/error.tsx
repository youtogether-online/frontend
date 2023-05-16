import { useTranslation } from "react-i18next";

import { type ServerErrorResponse } from "@/shared/api/internal/types";
import { styled } from "@/shared/config/stitches/stitches.config";
import { Text } from "@/shared/ui";

export const Error = ({ error, advice }: ServerErrorResponse) => {
  const { t } = useTranslation();

  return (
    <div>
      <Text variant="body1">{error || t("unknownError")}</Text>
      {advice && <Text variant="body2">{advice}</Text>}
    </div>
  );
};
