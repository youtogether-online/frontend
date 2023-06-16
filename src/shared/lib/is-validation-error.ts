import { type ErrorWithCode, type ValidationError } from "../api";

export const isValidationError = (error: ErrorWithCode): error is ValidationError => {
  return Boolean(error && typeof error === "object" && "fields" in error);
};
