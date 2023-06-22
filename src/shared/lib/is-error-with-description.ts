import { type ErrorWithCode } from "../api";

export const isErrorWithDescription = (
  error: ErrorWithCode,
): error is ErrorWithCode & Required<Pick<ErrorWithCode, "description">> => {
  return Boolean("description" in error);
};
