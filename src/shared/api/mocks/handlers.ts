import { rest } from "msw";

import { accounts, session } from "./fixtures";

export const handlers = [
  rest.get("api/auth/session", async (req, res, ctx) => {
    const { session_id } = req.cookies;

    if (session_id === "abc") {
      return await res(ctx.status(200), ctx.json(session));
    }

    return await res(ctx.status(401));
  }),
  rest.post("api/auth/email", async (req, res, ctx) => {
    const { email, code } = await req.json();

    if (email === "frkam@icloud.com" && code === "12345") {
      return await res(ctx.status(200), ctx.cookie("session_id", "abc"));
    }

    return await res(ctx.status(400));
  }),
  rest.post("/api/auth/password", async (req, res, ctx) => {
    const { email, password } = await req.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (password.length < 8) {
      return await res(
        ctx.status(400),
        ctx.json({
          code: "validation",
          description: "Validation error",
          advice: "Try to enter the correct data",
          fields: {
            password: "Password length should be at least 8 symbols",
          },
        }),
      );
    }

    const user = accounts.find((account) => account.email === email);

    if (user?.password !== password) {
      return await res(
        ctx.status(400),
        ctx.json({
          description: "Incorrect email or password",
          code: "",
        }),
      );
    }

    if (!user) {
      return await res(
        ctx.status(400),
        ctx.json({
          description: "No user with such credentials was found",
          advice: "f",
          code: "not_found",
        }),
      );
    }

    return await res(ctx.status(200), ctx.cookie("session_id", "abc"));
  }),
  rest.post("api/email/send-code", async (req, res, ctx) => {
    return await res(ctx.status(200));
  }),
];
