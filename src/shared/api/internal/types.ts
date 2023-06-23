import { type z } from "zod";

import { type getAuthSessionResponse } from "./contracts";

export type Session = z.infer<typeof getAuthSessionResponse>;

export type ValidationError = {
  fields: Record<string, string>;
};

export type BadRequestError = {
  code: string;
  description?: string;
};
