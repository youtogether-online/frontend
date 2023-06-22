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
import { debug, not } from "patronum";
import { z } from "zod";

import {
  type ErrorWithCode,
  getEmailSendCodePostUrl,
  type postEmailSendCodeBody,
} from "@/shared/api";
import { createRule } from "@/shared/lib/effector-forms/zod";
import { isErrorWithDescription } from "@/shared/lib/is-error-with-description";
import { isValidationError } from "@/shared/lib/is-validation-error";
import { mapValidationError } from "@/shared/lib/map-validation-error";

export const createSendCodeModel = () => {
  const $formServerError = createStore<string | null>(null);

  const sendCodeForm = createForm({
    filter: not($formServerError),
    fields: {
      email: {
        init: "",
        rules: [
          createRule<string>({
            name: "email",
            schema: z
              .string()
              .nonempty(t`It's required property`)
              .email(t`Incorrect email`),
          }),
        ],
      },
    },
  });

  const sendCodeMutation = createJsonMutation({
    params: declareParams<z.infer<typeof postEmailSendCodeBody>>(),
    request: {
      method: "POST",
      url: getEmailSendCodePostUrl(),
      body: (payload) => payload,
    },
    response: {
      contract: zodContract(z.null()),
    },
  });

  const flashClosed = createEvent();

  sample({
    clock: flashClosed,
    target: $formServerError.reinit!,
  });

  sample({
    clock: sendCodeForm.fields.email.changed,
    target: $formServerError.reinit!,
  });

  sample({
    clock: sendCodeForm.formValidated,
    target: sendCodeMutation.start,
  });

  const sendCodeMutationBadRequest = sample({
    clock: sendCodeMutation.finished.failure,
    filter: isHttpErrorCode(400),
    fn: (error) => {
      return (error.error as unknown as HttpError<400>).response as ErrorWithCode;
    },
  });

  sample({
    clock: sendCodeMutationBadRequest,
    filter: isErrorWithDescription,
    fn: (error) => error.description,
    target: $formServerError,
  });

  sample({
    clock: sendCodeMutationBadRequest,
    filter: isValidationError,
    fn: mapValidationError,
    target: sendCodeForm.addErrors,
  });

  const sendCodeMutationNotFound = sample({
    clock: sendCodeMutation.finished.failure,
    filter: isHttpErrorCode(404),
  });

  sample({
    clock: sendCodeMutationNotFound,
    fn: () => t`STMP server doesn't work currently`,
    target: $formServerError,
  });

  return {
    $formServerError,
    sendCodeForm,
    sendCodeMutation,
    flashClosed,
  };
};
