import { createJsonMutation, declareParams } from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { t } from "@lingui/macro";
import { createEvent, createStore, sample } from "effector";
import { createForm } from "effector-forms";
import { z } from "zod";

import { getSessionQuery } from "@/entities/session";

import {
  getAuthEmailPostUrl,
  getEmailSendCodePostUrl,
  type postAuthEmailBody,
  type postEmailSendCodeBody,
  type ValidationError,
} from "@/shared/api";
import { createRule } from "@/shared/lib/effector-forms/zod";

export const $sendCodeError = createStore<ValidationError | null>(null);
export const $submitCodeError = createStore<ValidationError | null>(null);

export const $currentStep = createStore<"sendCode" | "submitCode">("sendCode");

export const goToPrevStep = createEvent();

export const sendCodeForm = createForm({
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
  },
});

export const submitCodeForm = createForm({
  fields: {
    code: {
      init: "",
      rules: [
        createRule<string>({
          name: "code",
          schema: z.string(),
        }),
      ],
    },
  },
});

export const submitCodeMutation = createJsonMutation({
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

export const sendCodeMutation = createJsonMutation({
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

sample({
  clock: sendCodeForm.formValidated,
  target: sendCodeMutation.start,
});

sample({
  clock: sendCodeMutation.finished.success,
  fn: () => "submitCode" as const,
  target: $currentStep,
});

sample({
  clock: goToPrevStep,
  fn: () => "sendCode" as const,
  target: $currentStep,
});

sample({
  clock: submitCodeForm.formValidated,
  source: {
    email: sendCodeForm.fields.email.$value,
    code: submitCodeForm.fields.code.$value,
  },
  target: submitCodeMutation.start,
});

sample({
  clock: submitCodeMutation.finished.success,
  target: getSessionQuery.start,
});
