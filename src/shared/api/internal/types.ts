import { type z } from "zod";

import { type getAuthSessionResponse } from "./contracts";

export type Session = z.infer<typeof getAuthSessionResponse>;

export type ValidationError = {
  fields: Record<string, string>;
  code: "invalid_validation";
  description?: string;
};

export type ErrorWithCode = {
  fields?: Record<string, string>;
  code: string;
  description?: string;
};
