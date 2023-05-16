import { useTranslation } from "react-i18next";

import { EditEmail } from "@/features/edit-user-data/edit-email";
import { EditPassword } from "@/features/edit-user-data/edit-password";
import { EditPersonalData } from "@/features/edit-user-data/edit-personal-data";

import { styled } from "@/shared/config/stitches/stitches.config";
import { Text } from "@/shared/ui";

export const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Text variant="h1">{t("settings")}</Text>
      <EditUserData>
        <EditPersonalData />
        <EditPassword />
        <EditEmail />
      </EditUserData>
    </Section>
  );
};

const Section = styled("section", {});

const EditUserData = styled("div", {
  width: "480px",
  marginTop: "12px",
});
