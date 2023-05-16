import { useTranslation } from "react-i18next";

import { Form, Input } from "@/shared/ui";

export const EditEmail = () => {
  const { t } = useTranslation();

  return (
    <Form>
      <Form.Item label={t("email")}>
        <Input />
      </Form.Item>
    </Form>
  );
};
