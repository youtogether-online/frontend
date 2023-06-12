import { createEffect } from "effector";
import queryString from "query-string";

export type Request = {
  path: string;
  method: "POST" | "GET" | "DELETE" | "PUT" | "PATCH";
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  body?: Record<string, unknown> | null | void;
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
    contentDefault(headers, "application/json; charset=utf-8");

    const query = queryToString(params.query);

    const response = await fetch(`${import.meta.env.VITE_API_URL}${path}${query}`, {
      body,
      method,
      headers,
      credentials: "include",
    });

    const answer: Response = contentIs(response.headers, "application/json")
      ? await response.json()
      : await response.text();

    return {
      ok: response.ok,
      body: answer,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    };
  },
});

function contentIs(headers: Headers, type: string): boolean {
  return headers.get("content-type")?.includes(type) ?? false;
}

function contentDefault(headers: Headers, type: string): Headers {
  if (!headers.has("content-type")) {
    headers.set("content-type", type);
  }
  return headers;
}

const queryToString = (query: Record<string, string> | undefined): string => {
  return query ? `${queryString.stringify(query)}` : "";
};
