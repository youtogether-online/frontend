import { Trans } from "@lingui/macro";
import { modelView } from "effector-factorio";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";

import { createAuthByPasswordModel } from "./model";

export const AuthByPasswordForm = modelView(createAuthByPasswordModel, () => {
  const authByPasswordModel = createAuthByPasswordModel.useModel();

  const emailField = useUnit(authByPasswordModel.authByPasswordForm.fields.email);
  const passwordField = useUnit(authByPasswordModel.authByPasswordForm.fields.password);
  const form = useUnit(authByPasswordModel.authByPasswordForm);
  const formError = useUnit(authByPasswordModel.$authByPasswordError);
  const closeFlash = useUnit(authByPasswordModel.flashClosed);
  const { pending } = useUnit(authByPasswordModel.authByPasswordMutation);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    emailField.onChange(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    passwordField.onChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    form.submit();
  };

  return (
    <>
      {formError && <Form.Error onClose={closeFlash}>{formError}</Form.Error>}
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-border-default rounded-md bg-canvas-inset p-4"
      >
        <Form.Field name="login">
          <Form.Label>
            <Trans>Email address</Trans>
          </Form.Label>
          <Form.Control asChild>
            <TextInput
              value={emailField.value}
              onChange={handleEmailChange}
              block
              autoComplete="username"
              placeholder="example@gmail.com"
            />
          </Form.Control>
          {emailField.errors.length > 0 && (
            <Form.Validation variant="error">{emailField.errorText}</Form.Validation>
          )}
        </Form.Field>
        <Form.Field name="password">
          <Form.Label>
            <Trans>Password</Trans>
          </Form.Label>
          <Form.Control asChild>
            <TextInput
              value={passwordField.value}
              onChange={handlePasswordChange}
              type="password"
              block
              autoComplete="current-password"
              placeholder="12345678"
            />
          </Form.Control>
          {passwordField.errors.length > 0 && (
            <Form.Validation variant="error">{passwordField.errorText}</Form.Validation>
          )}
        </Form.Field>
        <Button type="submit" variant="primary" block disabled={pending}>
          {pending ? <Trans>Loading...</Trans> : <Trans>Authenticate</Trans>}
        </Button>
      </Form>
    </>
  );
});
