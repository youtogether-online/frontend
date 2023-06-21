import {
  createJsonMutation,
  declareParams,
  type HttpError,
  isHttpErrorCode,
} from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { t } from "@lingui/macro";
import { createStore, sample } from "effector";
import { createForm } from "effector-forms";
import { z } from "zod";

import { getSessionQuery } from "@/entities/session";

import {
  type ErrorWithCode,
  getAuthPasswordPostUrl,
  type postAuthPasswordBody,
  type ValidationError,
} from "@/shared/api/internal";
import { createRule } from "@/shared/lib/effector-forms/zod";
import { isValidationError } from "@/shared/lib/is-validation-error";
import { mapValidationError } from "@/shared/lib/map-validation-error";

const authByPasswordMutation = createJsonMutation({
  params: declareParams<z.infer<typeof postAuthPasswordBody>>(),
  request: {
    method: "POST",
    url: getAuthPasswordPostUrl,
    body: (payload) => payload,
  },
  response: {
    contract: zodContract(z.null()),
    status: {
      expected: 201,
    },
  },
});

export const $formServerError = createStore<ValidationError | null>(null);

export const authByPasswordForm = createForm({
  fields: {
    email: {
      init: "",
      rules: [
        createRule<string>({
          name: "email",
          schema: z.string().email(t`Incorrect email`),
        }),
      ],
    },
    password: {
      init: "",
      rules: [
        createRule<string>({
          name: "password",
          schema: z.string().min(8, t`The password must consist of at least 8 characters`),
        }),
      ],
    },
  },
});

sample({
  clock: authByPasswordForm.formValidated,
  target: authByPasswordMutation.start,
});

sample({
  clock: authByPasswordMutation.finished.success,
  target: getSessionQuery.start,
});

sample({
  clock: sample({
    clock: authByPasswordMutation.finished.failure,
    filter: isHttpErrorCode(400),
    fn: (error) => {
      return (error.error as unknown as HttpError<400>).response as ErrorWithCode;
    },
  }),
  filter: (error: ErrorWithCode): error is ValidationError => {
    return !isValidationError(error);
  },
  target: $formServerError,
});

sample({
  clock: sample({
    clock: authByPasswordMutation.finished.failure,
    filter: isHttpErrorCode(400),
    fn: (error) => {
      return (error.error as unknown as HttpError<400>).response as ErrorWithCode;
    },
  }),
  filter: (error: ErrorWithCode): error is ValidationError => {
    return isValidationError(error);
  },
  fn: mapValidationError,
  target: authByPasswordForm.addErrors,
});
