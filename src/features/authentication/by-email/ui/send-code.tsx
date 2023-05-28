import { useForm } from "effector-forms";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { createByEmailModel } from "@/features/authentication/by-email";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";

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
      {formError && <Form.Validation>Error</Form.Validation>}
      <Form.Field name="email">
        <TextInput
          placeholder={t("email")}
          id="email"
          value={fields.email.value}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Button variant="primary" block>
        {t("getCode")}
      </Button>
    </Form>
  );
};
