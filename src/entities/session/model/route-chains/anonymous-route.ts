import {
  chainRoute,
  type RouteInstance,
  type RouteParams,
  type RouteParamsAndQuery,
} from "atomic-router";
import { createEvent, sample } from "effector";
import { and, not } from "patronum";

import { $isAuthorized, $sessionLoaded, getSessionQuery } from "@/entities/session";

import { controls } from "@/shared/routes";

export const chainAnonymous = <Params extends RouteParams>(route: RouteInstance<Params>) => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();

  sample({
    clock: sessionCheckStarted,
    filter: and(not(getSessionQuery.$pending), not($sessionLoaded)),
    target: getSessionQuery.start,
  });

  sample({
    clock: sessionCheckStarted,
    filter: and($isAuthorized, $sessionLoaded),
    target: controls.back,
  });

  const alreadyAnonymous = sample({
    clock: sessionCheckStarted,
    filter: and(not($isAuthorized), not(getSessionQuery.$pending)),
  });

  sample({
    clock: getSessionQuery.finished.success,
    filter: route.$isOpened,
    target: controls.back,
  });

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAnonymous, getSessionQuery.finished.failure],
  });
};
