import {
  createJsonMutation,
  declareParams,
  type HttpError,
  isHttpErrorCode,
} from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { t } from "@lingui/macro";
import { createEvent, createStore, sample } from "effector";
import { modelFactory } from "effector-factorio";
import { createForm } from "effector-forms";
import { not } from "patronum";
import { z } from "zod";

import { getSessionQuery } from "@/entities/session";

import {
  type BadRequestError,
  getAuthPasswordPostUrl,
  type postAuthPasswordBody,
  type ValidationError,
} from "@/shared/api/internal";
import { createRule } from "@/shared/lib/effector-forms/zod";
import { isErrorWithDescription } from "@/shared/lib/is-error-with-description";
import { mapValidationError } from "@/shared/lib/map-validation-error";

export const createAuthByPasswordModel = modelFactory(() => {
  const $authByPasswordError = createStore<string | null>(null);

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

  const authByPasswordForm = createForm({
    filter: not($authByPasswordError),
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
      password: {
        init: "",
        rules: [
          createRule<string>({
            name: "password",
            schema: z
              .string()
              .nonempty(t`It's required property`)
              .min(8, t`The password must consist of at least 8 characters`),
          }),
        ],
      },
    },
  });

  const flashClosed = createEvent();

  sample({
    clock: flashClosed,
    target: $authByPasswordError.reinit!,
  });

  sample({
    clock: [authByPasswordForm.fields.email.changed, authByPasswordForm.fields.password.changed],
    target: $authByPasswordError.reinit!,
  });

  sample({
    clock: authByPasswordForm.formValidated,
    target: authByPasswordMutation.start,
  });

  sample({
    clock: authByPasswordMutation.finished.success,
    target: getSessionQuery.start,
  });

  const authByPasswordBadRequest = sample({
    clock: authByPasswordMutation.finished.failure,
    filter: isHttpErrorCode(400),
    fn: (error) => (error.error as unknown as HttpError<400>).response as BadRequestError,
  });

  const authBYPasswordValidationError = sample({
    clock: authByPasswordMutation.finished.failure,
    filter: isHttpErrorCode(422),
    fn: (error) => (error.error as unknown as HttpError<422>).response as ValidationError,
  });

  sample({
    clock: authByPasswordBadRequest,
    filter: isErrorWithDescription,
    fn: (error) => error.description,
    target: $authByPasswordError,
  });

  sample({
    clock: authBYPasswordValidationError,
    fn: mapValidationError,
    target: authByPasswordForm.addErrors,
  });

  return {
    flashClosed,
    authByPasswordForm,
    $authByPasswordError,
    authByPasswordMutation,
  };
});
