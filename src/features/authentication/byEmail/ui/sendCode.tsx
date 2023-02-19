import { useTranslation } from "react-i18next";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { styled } from "@/shared/config/stitches/stitches.config";
import { ChangeEvent, FormEvent } from "react";
import { useForm } from "effector-forms";
import { returnToGetCodeEvent, sendCodeForm } from "@/features/authentication/byEmail";
import { ReactComponent as ArrowLeft } from "@/shared/ui/icons/arrowLeft.svg";
import { useUnit } from "effector-react";

export const SendCode = () => {
  const { t } = useTranslation();

  const { submit, fields } = useForm(sendCodeForm);
  const returnToGetCode = useUnit(returnToGetCodeEvent);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    fields.code.onChange(event.target.value);
  };

  return <>
    <Form onSubmit={handleFormSubmit} noValidate>
      <Input placeholder={t("enterCodeFromEmail")} type="text" id="verification-code" onChange={handleInputChange}
             errorMessage={t(fields.code.errorText())} invalid={fields.code.hasError()} autoFocus />
      <Button type="submit" theme="primary">
        {t("send")}
      </Button>
    </Form>
    <Button variant="icon" onClick={returnToGetCode} align="topLeft" icon={<ArrowLeft />}></Button>
  </>;
};

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "16px"
});
