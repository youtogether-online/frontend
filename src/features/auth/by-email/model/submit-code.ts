import {
  createJsonMutation,
  declareParams,
  type HttpError,
  isHttpErrorCode,
} from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { t } from "@lingui/macro";
import { createEvent, createStore, sample } from "effector";
import { createForm } from "effector-forms";
import { type Form } from "effector-forms";
import { not } from "patronum";
import { z } from "zod";

import { type ErrorWithCode, getAuthEmailPostUrl, type postAuthEmailBody } from "@/shared/api";
import { createRule } from "@/shared/lib/effector-forms/zod";
import { isErrorWithDescription } from "@/shared/lib/is-error-with-description";
import { isValidationError } from "@/shared/lib/is-validation-error";
import { mapValidationError } from "@/shared/lib/map-validation-error";

export const createSubmitCodeModel = ({
  sendCodeForm,
}: {
  sendCodeForm: Form<{ email: string }>;
}) => {
  const $formServerError = createStore<string | null>(null);

  const submitCodeForm = createForm({
    filter: not($formServerError),
    fields: {
      code: {
        init: "",
        rules: [
          createRule<string>({
            name: "code",
            schema: z.string().nonempty(t`It's required property`),
          }),
        ],
      },
    },
  });

  const submitCodeMutation = createJsonMutation({
    params: declareParams<z.infer<typeof postAuthEmailBody>>(),
    request: {
      method: "POST",
      url: getAuthEmailPostUrl(),
      body: (payload) => payload,
    },
    response: {
      contract: zodContract(z.null()),
      status: {
        expected: 201,
      },
    },
  });

  const submitCodeMutationError = sample({
    clock: submitCodeMutation.finished.failure,
    filter: isHttpErrorCode(400),
    fn: (error) => {
      return (error.error as unknown as HttpError<400>).response as ErrorWithCode;
    },
  });

  const flashClosed = createEvent();

  sample({
    clock: flashClosed,
    target: $formServerError.reinit!,
  });

  sample({
    clock: submitCodeForm.fields.code.changed,
    target: $formServerError.reinit!,
  });

  sample({
    clock: submitCodeMutationError,
    filter: isErrorWithDescription,
    fn: (error) => error.description,
    target: $formServerError,
  });

  sample({
    clock: submitCodeMutationError,
    filter: isValidationError,
    fn: mapValidationError,
    target: submitCodeForm.addErrors,
  });

  sample({
    clock: submitCodeForm.formValidated,
    source: {
      email: sendCodeForm.fields.email.$value,
      code: submitCodeForm.fields.code.$value,
    },
    target: submitCodeMutation.start,
  });

  return {
    flashClosed,
    submitCodeMutation,
    $formServerError,
    submitCodeForm,
  };
};
