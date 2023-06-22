import { modelView } from "effector-factorio";
import { useUnit } from "effector-react";

import { createAuthByEmailModel } from "../model";
import { SendCode } from "./send-code";
import { SubmitCode } from "./submit-code";

export const AuthByEmailForm = modelView(createAuthByEmailModel, () => {
  const authByEmailModel = createAuthByEmailModel.useModel();
  const currentStep = useUnit(authByEmailModel.$currentStep);

  if (currentStep === "sendCode") {
    return <SendCode />;
  }

  return <SubmitCode />;
});
