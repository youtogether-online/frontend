import type * as typed from "typed-contracts";
import { createMutation } from "@farfetched/core";
import { t } from "@lingui/macro";
import { createStore, sample } from "effector";
import { createForm } from "effector-forms";
import { debug } from "patronum";
import { z } from "zod";

import { internalApi } from "@/shared/api";
import { createRule } from "@/shared/lib/effector-forms/zod";

export const $formServerError = createStore<typed.Get<
  typeof internalApi.authPasswordPostBadRequest
> | null>(null);

const authByPasswordMutation = createMutation({ effect: internalApi.authPasswordPost });

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
  fn: (state) => ({ body: state }),
  target: authByPasswordMutation.start,
});

sample({
  clock: sample({
    clock: authByPasswordMutation.finished.failure,
    fn: (error) => error.error,
  }),
  filter: (
    error: internalApi.AuthPasswordPostFail,
  ): error is {
    status: "bad_request";
    error: typed.Get<typeof internalApi.authPasswordPostBadRequest>;
  } => Boolean(error.status === "bad_request" && error.error.code !== "validation"),
  fn: (error) => error.error,
  target: $formServerError,
});

sample({
  clock: sample({
    clock: authByPasswordMutation.finished.failure,
    fn: (error) => error.error,
  }),
  filter: (
    error: internalApi.AuthPasswordPostFail,
  ): error is {
    status: "bad_request";
    error: typed.Get<typeof internalApi.authPasswordPostBadRequest>;
  } => Boolean(error.status === "bad_request" && error.error.code === "validation"),
  fn: (error) => {
    const errors = [];
    // Redefine `fields` because openapi doesnt provide correct typings
    for (const field in error.error.fields as Record<string, string>) {
      errors.push({
        rule: "backend",
        field,
        errorText: (error.error.fields as Record<string, string>)[field],
      });
    }

    return errors;
  },
  target: authByPasswordForm.addErrors,
});
