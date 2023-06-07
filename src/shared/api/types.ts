import { type AuthSessionGetDone, type UserUsernameGetDone } from "./internal";

export type Session = AuthSessionGetDone["answer"];

export type User = UserUsernameGetDone["answer"];
