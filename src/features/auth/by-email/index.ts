import { createAuthByEmailModel } from "./model";
import { AuthByEmailForm } from "./ui";

export const AuthByEmail = {
  View: AuthByEmailForm,
  factory: createAuthByEmailModel,
};
