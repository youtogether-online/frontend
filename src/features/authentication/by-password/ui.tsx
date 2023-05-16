import { modelView } from "effector-factorio";
import { useForm } from "effector-forms";
import { useUnit } from "effector-react/effector-react.umd";
import { type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { Button, Form, Input } from "@/shared/ui";

import { createByPasswordModel } from "./model";

export const SignInByPassword = modelView(createByPasswordModel, () => {
  const { t } = useTranslation();

  const byPasswordModel = createByPasswordModel.useModel();

  const { submit, fields, errorText } = useForm(byPasswordModel.byPasswordForm);
  const { pending } = useUnit(byPasswordModel.signInByPasswordMutation);
  const formError = useUnit(byPasswordModel.$formError);

  const handleGetCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  return (
    <Form onSubmit={handleGetCode}>
      {formError != null && <Form.Error error={formError.error} advice={formError.advice} />}
      <Form.Item error={errorText("email")}>
        <Input
          placeholder={t("email")}
          id="email"
          value={fields.email.value}
          autoComplete="email"
          onChange={(event) => fields.email.onChange(event.target.value)}
          invalid={fields.email.hasError()}
        />
      </Form.Item>
      <Form.Item error={errorText("password")}>
        <Input.Password
          placeholder={t("password")}
          value={fields.password.value}
          onChange={(event) => fields.password.onChange(event.target.value)}
          invalid={fields.password.hasError()}
        />
      </Form.Item>
      <Button type="submit" theme="primary" pending={pending} size="full">
        {t("signIn")}
      </Button>
    </Form>
  );
});
