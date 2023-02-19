import { useTranslation } from "react-i18next";
import { useForm } from "effector-forms";
import { FormEvent } from "react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { signInByPasswordForm } from "@/features/authentication/byPassword";
import { styled } from "@/shared/config/stitches/stitches.config";
import { passwordValidation } from "@/shared/config/validation";

export const SignInByPassword = () => {
  const { t } = useTranslation();

  const { submit, fields } = useForm(signInByPasswordForm);
  const handleGetCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  return <Form onSubmit={handleGetCode} noValidate>
    <Input placeholder={t("email")} type="email" id="email" value={fields.email.value} autoComplete="email"
           onChange={(event) => fields.email.onChange(event.target.value)} invalid={fields.email.hasError()}
           errorMessage={t(fields.email.errorText())} />
    <Input placeholder={t("password")} type="password" id="current-password" autoComplete="current-password"
           value={fields.password.value}
           onChange={(event) => fields.password.onChange(event.target.value)} invalid={fields.password.hasError()}
           errorMessage={t(fields.password.errorText(), { min: passwordValidation.min })} />
    <Button type="submit" theme="primary">{t("signIn")}</Button>
  </Form>;
};

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "8px"
});

