import { Trans } from "@lingui/macro";
import { useUnit } from "effector-react";
import { type ChangeEvent, type FormEvent } from "react";
import { tw } from "typewind";

import { Button } from "@/shared/ui/button";
import { Flash } from "@/shared/ui/flash";
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
        className={tw.flex.flex_col.gap_4.p_4.border.border_borderDefault.rounded_md.bg_canvasInset}
        onSubmit={handleSubmit}
      >
        <Form.Field name="code">
          <div className={tw.flex.items_center.gap_1}>
            <button
              type="button"
              className={tw.flex.items_center.justify_center}
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
