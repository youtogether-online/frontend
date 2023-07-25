import { invoke } from "@withease/factories";
import { createEvent, createStore, sample } from "effector";
import { modelFactory } from "effector-factorio";
import { combineEvents } from "patronum";

import { getSessionQuery } from "@/entities/session";

import { createSendCodeModel } from "./send-code";
import { createSubmitCodeModel } from "./submit-code";

export const createAuthByEmailModel = modelFactory(() => {
  const $$sendCode = invoke(createSendCodeModel);
  const $$submitCode = invoke(createSubmitCodeModel, { sendCodeForm: $$sendCode.sendCodeForm });

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

  sample({
    clock: combineEvents({
      events: [$$submitCode.submitCodeMutation.finished.success, getSessionQuery.finished.success],
    }),
    fn: () => "sendCode" as const,
    target: $currentStep,
  });

  return {
    $currentStep,
    prevStepClicked,
    $$sendCode,
    $$submitCode,
  };
});
