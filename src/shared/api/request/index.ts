import { createEffect } from "effector";
import queryString from "query-string";

export type Request = {
  path: string;
  method: "POST" | "GET" | "DELETE" | "PUT" | "PATCH";
  body?: Record<string, unknown> | null;
  query?: Record<string, string>;
  header?: Record<string, string>;
  cookies?: string;
};

export type Response = {
  ok: boolean;
  body: unknown;
  status: number;
  headers: Record<string, string>;
};

export const requestFx = createEffect<Request, Response, Response>({
  handler: async ({ path, method, ...params }) => {
    const body = JSON.stringify(params.body);

    const headers = new Headers(params.header);

    const query = queryToString(params.query);

    const response = await fetch(`${import.meta.env.VITE_API_URL}${path}${query}`, {
      body,
      method,
      headers,
      credentials: "include",
    });

    const answer: Response = await response.json();

    const responder = {
      ok: response.ok,
      body: answer,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    };

    if (responder.ok) {
      return responder;
    }
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw responder;
  },
});

const queryToString = (query: Record<string, string> | undefined): string => {
  return query ? `${queryString.stringify(query)}` : "";
};