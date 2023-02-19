import { useTranslation } from "react-i18next";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { emailValidation } from "@/shared/config/validation";
import { useForm } from "effector-forms";
import { getCodeForm } from "@/features/authentication/byEmail";
import { ChangeEvent, FormEvent } from "react";
import { styled } from "@/shared/config/stitches/stitches.config";

export const GetCode = () => {
  const { t } = useTranslation();

  const { submit, fields } = useForm(getCodeForm);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    fields.email.onChange(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit();
  };

  return <Form onSubmit={handleFormSubmit} noValidate>
    <Input placeholder={t("email")} type="email" id="email" value={fields.email.value}
           onChange={handleInputChange} invalid={fields.email.hasError()}
           errorMessage={t(fields.email.errorText(), { max: emailValidation.max })} />
    <Button type="submit" theme="primary">
      {t("getCode")}
    </Button>
  </Form>;
};

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "16px"
});