import { Trans } from "@lingui/macro";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";
import { tw } from "typewind";

import { Button } from "@/shared/ui/button";
import { Flash } from "@/shared/ui/flash";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";

import { $submitCodeError, submitCodeForm } from "../model";

export const SubmitCode = () => {
  const codeField = useUnit(submitCodeForm.fields.code);
  const formSubmit = useUnit(submitCodeForm.submit);
  const formError = useUnit($submitCodeError);

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    codeField.onChange(event.target.value);
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    formSubmit();
  };

  return (
    <>
      {formError?.description && (
        <>
          <Flash variant="danger">{formError.description}</Flash>
        </>
      )}
      <Form className={tw.flex.flex_col.gap_4} onSubmit={handleSubmit}>
        <Form.Field name="code">
          <Form.Label>
            <Trans>Code from email</Trans>
          </Form.Label>
          <Form.Control asChild>
            <TextInput block value={codeField.value} onChange={handleCodeChange} />
          </Form.Control>
          {codeField.errors.length > 0 && (
            <Form.Validation variant="error">{codeField.errorText}</Form.Validation>
          )}
        </Form.Field>
        <Button variant="primary" type="submit" block>
          <Trans>Submit code</Trans>
        </Button>
      </Form>
    </>
  );
};
