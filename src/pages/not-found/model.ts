import { redirect } from "atomic-router";
import { createEvent } from "effector";

import { routes } from "@/shared/routing";

export const goHomeClicked = createEvent();

redirect({
  clock: goHomeClicked,
  route: routes.home,
  replace: true,
});
