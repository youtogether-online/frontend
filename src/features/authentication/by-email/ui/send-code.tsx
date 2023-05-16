import { useForm } from "effector-forms";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { createByEmailModel } from "@/features/authentication/by-email";

import { Button, Form, Input } from "@/shared/ui";

export const SendCode = () => {
  const { t } = useTranslation();

  const byEmailModel = createByEmailModel.useModel();

  const { submit, fields, errorText } = useForm(byEmailModel.sendCodeForm);
  const { pending } = useUnit(byEmailModel.sendCodeMutation);
  const formError = useUnit(byEmailModel.$sendCodeFormError);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    fields.email.onChange(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit();
  };

  return (
    <Form onSubmit={handleFormSubmit} noValidate>
      {formError != null && <Form.Error error={formError.error} advice={formError.advice} />}
      <Form.Item error={errorText("email")}>
        <Input
          placeholder={t("email")}
          id="email"
          value={fields.email.value}
          onChange={handleInputChange}
          invalid={fields.email.hasError()}
        />
      </Form.Item>
      <Button type="submit" theme="primary" pending={pending} size="full">
        {t("getCode")}
      </Button>
    </Form>
  );
};
