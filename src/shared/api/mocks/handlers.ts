import { rest } from "msw";

import { session } from "./fixtures";

export const handlers = [
  rest.get("api/auth/session", async (req, res, ctx) => {
    const { session_id } = req.cookies;

    if (session_id !== "abc") {
      return await res(ctx.status(401));
    }

    return await res(ctx.status(200), ctx.json(session));
  }),
  rest.post("api/auth/email", async (req, res, ctx) => {
    const { email, code } = req.params;

    if (email === "frkam@icloud.com" && code === "12345") {
      return await res(ctx.status(200), ctx.cookie("session_id", "abc"));
    }

    return await res(ctx.status(400));
  }),
  rest.post("api/email/send-code", async (req, res, ctx) => {
    const { email } = req.params;

    return await res(ctx.status(200));
  }),
];
