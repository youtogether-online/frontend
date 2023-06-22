import { createAuthByPasswordModel } from "./model";
import { AuthByPasswordForm } from "./ui";

export const AuthByPassword = {
  factory: createAuthByPasswordModel,
  View: AuthByPasswordForm,
};
