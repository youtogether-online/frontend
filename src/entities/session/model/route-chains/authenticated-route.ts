import {
  chainRoute,
  redirect,
  type RouteInstance,
  type RouteParams,
  type RouteParamsAndQuery,
} from "atomic-router";
import { createEvent, sample } from "effector";
import { and, not } from "patronum";

import { $isAuthorized, $sessionLoaded, getSessionQuery } from "@/entities/session";

import { routes } from "@/shared/routes";

export const chainAuthorized = <Params extends RouteParams>({
  route,
  replaceWith,
}: {
  route: RouteInstance<Params>;
  replaceWith?: RouteInstance<Params>;
}) => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();

  sample({
    clock: sessionCheckStarted,
    filter: and(not(getSessionQuery.$pending), not($sessionLoaded)),
    target: getSessionQuery.start,
  });

  const alreadyAuthorized = sample({
    clock: sessionCheckStarted,
    filter: $isAuthorized,
  });

  if (replaceWith != null) {
    sample({
      clock: sessionCheckStarted,
      filter: and(not($isAuthorized), $sessionLoaded),
      target: redirect({
        route: routes.signIn,
      }),
    });

    sample({
      clock: getSessionQuery.finished.failure,
      filter: route.$isOpened,
      target: redirect({
        route: routes.signIn,
      }),
    });
  }

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAuthorized, getSessionQuery.finished.success],
  });
};
