import { Trans } from "@lingui/macro";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";

import { createAuthByEmailModel } from "../model";

export const SendCode = () => {
  const authByEmailModel = createAuthByEmailModel.useModel();

  const emailField = useUnit(authByEmailModel.$$sendCode.sendCodeForm.fields.email);
  const formSubmit = useUnit(authByEmailModel.$$sendCode.sendCodeForm.submit);
  const formError = useUnit(authByEmailModel.$$sendCode.$formServerError);
  const closeFlash = useUnit(authByEmailModel.$$sendCode.flashClosed);
  const { pending } = useUnit(authByEmailModel.$$sendCode.sendCodeMutation);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    formSubmit();
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    emailField.onChange(event.target.value);
  };

  return (
    <>
      {formError && <Form.Error onClose={closeFlash}>{formError}</Form.Error>}
      <Form
        className={
          "flex flex-col gap-4 p-4 border border-border-default rounded-md bg-canvas-inset"
        }
        onSubmit={handleSubmit}
      >
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
        <Button variant="primary" block type="submit" disabled={pending}>
          {pending ? <Trans>Loading...</Trans> : <Trans>Get code</Trans>}
        </Button>
      </Form>
    </>
  );
};
