import { type ValidationError } from "../api";

export const mapValidationError = (error: ValidationError) => {
  const errors = [];

  const fields = (error as unknown as ValidationError)?.fields;

  for (const field in fields) {
    errors.push({
      rule: "backend",
      field,
      errorText: fields[field],
    });
  }

  return errors;
};
