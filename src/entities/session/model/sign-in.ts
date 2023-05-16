import { createEvent, sample } from "effector";

import { getSessionQuery } from "@/entities/session";

export const signInClicked = createEvent();

sample({
  clock: signInClicked,
  target: getSessionQuery.start,
});
