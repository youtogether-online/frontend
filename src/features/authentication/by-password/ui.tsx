import { modelView } from "effector-factorio";
import { useForm } from "effector-forms";
import { useUnit } from "effector-react/effector-react.umd";
import { type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";

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
      <Form.Field name="email">
        <TextInput
          placeholder={t("email")}
          id="email"
          value={fields.email.value}
          autoComplete="email"
          onChange={(event) => fields.email.onChange(event.target.value)}
        />
      </Form.Field>
      <Form.Field name="password">
        <TextInput
          placeholder={t("password")}
          value={fields.password.value}
          onChange={(event) => fields.password.onChange(event.target.value)}
        />
      </Form.Field>
      <Button type="submit" variant="primary" block>
        {t("signIn")}
      </Button>
    </Form>
  );
});
