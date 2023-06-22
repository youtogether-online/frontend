import { createEvent, createStore, sample } from "effector";
import { modelFactory } from "effector-factorio";

import { getSessionQuery } from "@/entities/session";

import { createSendCodeModel } from "./send-code";
import { createSubmitCodeModel } from "./submit-code";

export const createAuthByEmailModel = modelFactory(() => {
  const $$sendCode = createSendCodeModel();
  const $$submitCode = createSubmitCodeModel({ sendCodeForm: $$sendCode.sendCodeForm });

  const $currentStep = createStore<"sendCode" | "submitCode">("sendCode");

  const prevStepClicked = createEvent();

  sample({
    clock: $$sendCode.sendCodeMutation.finished.success,
    fn: () => "submitCode" as const,
    target: $currentStep,
  });

  sample({
    clock: prevStepClicked,
    fn: () => "sendCode" as const,
    target: $currentStep,
  });

  sample({
    clock: $$submitCode.submitCodeMutation.finished.success,
    target: getSessionQuery.start,
  });

  return {
    $currentStep,
    prevStepClicked,
    $$sendCode,
    $$submitCode,
  };
});
