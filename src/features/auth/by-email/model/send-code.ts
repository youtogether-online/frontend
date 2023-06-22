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
import { z } from "zod";

import {
  type ErrorWithCode,
  getEmailSendCodePostUrl,
  type postEmailSendCodeBody,
} from "@/shared/api";
import { createRule } from "@/shared/lib/effector-forms/zod";
import { isValidationError } from "@/shared/lib/is-validation-error";
import { mapValidationError } from "@/shared/lib/map-validation-error";

export const createSendCodeModel = () => {
  const $formServerError = createStore<ErrorWithCode | null>(null);

  const sendCodeForm = createForm({
    fields: {
      email: {
        init: "",
        rules: [
          createRule<string>({
            name: "email",
            schema: z
              .string()
              .nonempty(`It's required property`)
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
    clock: sendCodeForm.formValidated,
    target: sendCodeMutation.start,
  });

  const sendCodeMutationError = sample({
    clock: sendCodeMutation.finished.failure,
    filter: isHttpErrorCode(400),
    fn: (error) => {
      return (error.error as unknown as HttpError<400>).response as ErrorWithCode;
    },
  });

  sample({
    clock: sendCodeMutationError,
    filter: (error) => !isValidationError(error),
    target: $formServerError,
  });

  sample({
    clock: sendCodeMutationError,
    filter: isValidationError,
    fn: mapValidationError,
    target: sendCodeForm.addErrors,
  });

  return {
    $formServerError,
    sendCodeForm,
    sendCodeMutation,
    flashClosed,
  };
};
