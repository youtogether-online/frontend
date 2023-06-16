import { type Session, type User } from "@/shared/api";

export const session: Session = {
  email: "frkam@icloud.com",
  firstName: "Dmitry",
  lastName: "Moskalenko",
  isEmailVerified: false,
  name: "dmaowd",
  language: "RU",
  role: "USER",
  theme: "DARK",
};

export const user: User = {
  lastName: "Hodovaniuk",
  firstName: "Hlib",
  biography: "Mmm?",
  name: "kek",
  role: "USER",
};

export const accounts = [{ email: "frkam@icloud.com", password: "12345678910" }];
