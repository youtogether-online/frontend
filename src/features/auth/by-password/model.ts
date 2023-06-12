import type * as typed from "typed-contracts";
import { createMutation } from "@farfetched/core";
import { t } from "@lingui/macro";
import { createStore, sample } from "effector";
import { createForm } from "effector-forms";
import { z } from "zod";

import { internalApi } from "@/shared/api";
import { createRule } from "@/shared/lib/effector-forms/zod";

const $formServerError = createStore<internalApi.AuthPasswordPostFail | null>(null);

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
    filter: (error) => !(error.error.status === "bad_request" && error.error.error.fields),
    fn: (error) => error.error,
  }),
  target: $formServerError,
});

sample({
  clock: sample({
    clock: authByPasswordMutation.finished.failure,
    filter: (error) => {
      return Boolean(error.error.status === "bad_request" && error.error.error.fields);
    },
    fn: (error) => error.error.error,
  }),
  fn: (error) => {
    const errors = [];
    // TODO: Improve typings
    for (const field in (error as typed.Get<typeof internalApi.authPasswordPostBadRequest>)
      .fields) {
      errors.push({
        rule: "backend",
        field,
        // Omit fields because effector-openapi-preset don't type objects correctrly
        errorText: (
          error as Omit<typed.Get<typeof internalApi.authPasswordPostBadRequest>, "fields"> & {
            fields: Record<string, string>;
          }
        ).fields[field],
      });
    }

    return errors;
  },
  target: authByPasswordForm.addErrors,
});
