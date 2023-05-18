import { useTranslation } from "react-i18next";

import { EditEmail } from "@/features/edit-user-data/edit-email";
import { EditPassword } from "@/features/edit-user-data/edit-password";
import { EditPersonalData } from "@/features/edit-user-data/edit-personal-data";

import { Text } from "@/shared/ui";

export const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Text variant="h1">{t("settings")}</Text>
      <div>
        <EditPersonalData />
        <EditPassword />
        <EditEmail />
      </div>
    </section>
  );
};
