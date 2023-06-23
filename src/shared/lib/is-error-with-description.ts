import { type BadRequestError } from "../api";

export const isErrorWithDescription = (
  error: BadRequestError,
): error is BadRequestError & Required<Pick<BadRequestError, "description">> => {
  return Boolean("description" in error);
};
