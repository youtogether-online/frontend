import { Trans } from "@lingui/macro";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";
import { tw } from "typewind";

import { Button } from "@/shared/ui/button";
import { Flash } from "@/shared/ui/flash";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";

import { $sendCodeError, sendCodeFlashClosed, sendCodeForm } from "../model";

export const SendCode = () => {
  const emailField = useUnit(sendCodeForm.fields.email);
  const formSubmit = useUnit(sendCodeForm.submit);
  const formError = useUnit($sendCodeError);
  const closeFlash = useUnit(sendCodeFlashClosed);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    formSubmit();
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    emailField.onChange(event.target.value);
  };

  return (
    <>
      {formError?.description && (
        <Flash variant="danger" sx={tw.mb_4} onClose={closeFlash}>
          {formError.description}
        </Flash>
      )}
      <Form className={tw.flex.flex_col.gap_4} onSubmit={handleSubmit}>
        <Form.Field name="login">
          <Form.Label>
            <Trans>Email address</Trans>
          </Form.Label>
          <Form.Control asChild>
            <TextInput
              block
              autoComplete="username"
              placeholder="example@gmail.com"
              value={emailField.value}
              onChange={handleEmailChange}
            />
          </Form.Control>
          {emailField.errors.length > 0 && (
            <Form.Validation variant="error">{emailField.errorText}</Form.Validation>
          )}
        </Form.Field>
        <Button variant="primary" block type="submit">
          <Trans>Get code</Trans>
        </Button>
      </Form>
    </>
  );
};
