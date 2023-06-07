import { createQuery } from "@farfetched/core";
import { createStore, sample } from "effector";

import { internalApi, type Session } from "@/shared/api";
import { appStarted } from "@/shared/config/init";

export const $session = createStore<Session | null>(null);

const getSessionQuery = createQuery({ effect: internalApi.authSessionGet });

sample({
  clock: appStarted,
  fn: () => ({}),
  target: getSessionQuery.start,
});
