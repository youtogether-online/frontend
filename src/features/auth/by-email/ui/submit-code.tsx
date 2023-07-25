import { Trans } from "@lingui/macro";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form/form";
import { TextInput } from "@/shared/ui/form/text-input";
import { Icon } from "@/shared/ui/icon";

import { createAuthByEmailModel } from "../model";

export const SubmitCode = () => {
  const authByEmailModel = createAuthByEmailModel.useModel();

  const codeField = useUnit(authByEmailModel.$$submitCode.submitCodeForm.fields.code);
  const formSubmit = useUnit(authByEmailModel.$$submitCode.submitCodeForm.submit);
  const formError = useUnit(authByEmailModel.$$submitCode.$formServerError);
  const goToPrevStep = useUnit(authByEmailModel.prevStepClicked);
  const closeFlash = useUnit(authByEmailModel.$$submitCode.flashClosed);
  const { pending } = useUnit(authByEmailModel.$$submitCode.submitCodeMutation);

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    codeField.onChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    formSubmit();
  };

  return (
    <>
      {formError && <Form.Error onClose={closeFlash}>{formError}</Form.Error>}
      <Form
        className="flex flex-col gap-4 border border-border-default rounded-md bg-canvas-inset p-4"
        onSubmit={handleSubmit}
      >
        <Form.Field name="code">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className={"flex items-center justify-center"}
              onClick={goToPrevStep}
            >
              <Icon name="arrows/arrow-left" viewBox="0 0 25 25" height="20" width="20" />
            </button>
            <Form.Label>
              <Trans>Code from email</Trans>
            </Form.Label>
          </div>
          <Form.Control asChild>
            <TextInput
              block
              value={codeField.value}
              onChange={handleCodeChange}
              placeholder="12345"
            />
          </Form.Control>
          {codeField.errors.length > 0 && (
            <Form.Validation variant="error">{codeField.errorText}</Form.Validation>
          )}
        </Form.Field>
        <Button variant="primary" type="submit" block disabled={pending}>
          {pending ? <Trans>Loading...</Trans> : <Trans>Submit code</Trans>}
        </Button>
      </Form>
    </>
  );
};
