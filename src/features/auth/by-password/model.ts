import {
  createJsonMutation,
  declareParams,
  type HttpError,
  isHttpError,
  isHttpErrorCode,
} from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { t } from "@lingui/macro";
import { createStore, type Json, sample } from "effector";
import { createForm } from "effector-forms";
import { debug, not } from "patronum";
import { z } from "zod";

import {
  type AuthPasswordFailedResponse,
  type ErrorWithCode,
  getAuthPasswordPostUrl,
  type postAuthPasswordBody,
  type ValidationError,
} from "@/shared/api/internal";
import { createRule } from "@/shared/lib/effector-forms/zod";
import { isValidationError } from "@/shared/lib/is-validation-error";

export const $formServerError = createStore<ValidationError | null>(null);

const authByPasswordMutation = createJsonMutation({
  params: declareParams<z.infer<typeof postAuthPasswordBody>>(),
  request: {
    method: "POST",
    url: getAuthPasswordPostUrl,
    body: (payload) => payload,
  },
  response: {
    contract: zodContract(z.object({})),
    status: {
      expected: 201,
    },
  },
});

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
  filter: (error) => {
    return isValidationError(error);
  },
  fn: (error) => {
    const errors = [];

    const fields = (error as unknown as AuthPasswordFailedResponse)?.fields;

    for (const field in fields) {
      errors.push({
        rule: "backend",
        field,
        errorText: fields[field],
      });
    }

    return errors;
  },
  target: authByPasswordForm.addErrors,
});
