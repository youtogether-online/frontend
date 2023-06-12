import { reflect } from "@effector/reflect";
import { Trans } from "@lingui/macro";
import { useForm } from "effector-forms";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent, type FormEventHandler } from "react";
import { tw } from "typewind";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";

import { authByPasswordForm } from "./model";

export const AuthByPassword = () => {
  const emailField = useUnit(authByPasswordForm.fields.email);
  const passwordField = useUnit(authByPasswordForm.fields.password);
  const form = useUnit(authByPasswordForm);

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
    <Form
      onSubmit={handleSubmit}
      className={tw.bg_canvasSubtle.rounded_md.p_4.flex.flex_col.gap_4.border_borderMuted.border}
    >
      <Form.Field name="email">
        <Form.Label>
          <Trans>Email address</Trans>
        </Form.Label>
        <Form.Control asChild>
          <TextInput value={emailField.value} onChange={handleEmailChange} block />
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
          />
        </Form.Control>
        {passwordField.errors.length > 0 && (
          <Form.Validation variant="error">{passwordField.errorText}</Form.Validation>
        )}
      </Form.Field>
      <Button type="submit" variant="primary" block>
        <Trans>Submit</Trans>
      </Button>
    </Form>
  );
};
