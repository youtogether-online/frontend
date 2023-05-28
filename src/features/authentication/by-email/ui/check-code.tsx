import { useForm } from "effector-forms";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { createByEmailModel } from "@/features/authentication/by-email";

import { Button, IconButton } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";
import { Icon } from "@/shared/ui/icon";

export const CheckCode = () => {
  const { t } = useTranslation();

  const byEmailModel = createByEmailModel.useModel();

  const { submit, fields, errorText } = useForm(byEmailModel.checkCodeForm);
  const returnToPreviousStep = useUnit(byEmailModel.returnToPrevStepClicked);
  const isLoading = useUnit(byEmailModel.checkCodeMutation.$pending);
  const formError = useUnit(byEmailModel.$checkCodeFormError);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    fields.code.onChange(event.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} noValidate>
        <Form.Field name="code">
          <IconButton
            onClick={returnToPreviousStep}
            icon={<Icon name="common/mail" />}
            type="button"
          />
          <TextInput
            placeholder={t("enterCodeFromEmail")}
            id="verification-code"
            onChange={handleInputChange}
          />
        </Form.Field>
      </Form>
      <Button type="submit" block onClick={handleFormSubmit} variant="primary">
        {t("send")}
      </Button>
    </div>
  );
};
