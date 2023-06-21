import { useUnit } from "effector-react";

import { $currentStep } from "../model";
import { SendCode } from "./send-code";
import { SubmitCode } from "./submit-code";

export const AuthByEmail = () => {
  const currentStep = useUnit($currentStep);

  if (currentStep === "sendCode") {
    return <SendCode />;
  }

  return <SubmitCode />;
};
