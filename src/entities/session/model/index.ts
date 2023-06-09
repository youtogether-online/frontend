import { createQuery } from "@farfetched/core";
import {
  chainRoute,
  type RouteInstance,
  type RouteParams,
  type RouteParamsAndQuery,
} from "atomic-router";
import { createEvent, createStore, type Effect, type Event, sample } from "effector";

import { internalApi, type Session } from "@/shared/api";
import { appStarted } from "@/shared/config/init";

export const $session = createStore<Session | null>(null);

const getSessionQuery = createQuery({ effect: internalApi.authSessionGet });

sample({
  clock: appStarted,
  fn: () => ({}),
  target: getSessionQuery.start,
});

interface ChainParams {
  otherwise?: Event<void> | Effect<void, any, any>;
}

export const chainAuthorized = <Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams = {},
) => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const sessionReceivedAnonymous = createEvent<RouteParamsAndQuery<Params>>();

  const alreadyAuthenticated = sample({
    clock: sessionCheckStarted,
    source: getSessionQuery.$status,
    filter: (status) => status === "done",
  });

  const alreadyAnonymous = sample({
    clock: sessionCheckStarted,
    source: getSessionQuery.$status,
    filter: (status) => status === "fail",
  });

  sample({
    clock: sessionCheckStarted,
    source: getSessionQuery.$status,
    filter: (status) => status === "initial",
    target: getSessionQuery.start,
  });

  sample({
    clock: [alreadyAnonymous, getSessionQuery.$failed],
    source: { params: route.$params, query: route.$query },
    filter: route.$isOpened,
    target: sessionReceivedAnonymous,
  });

  if (otherwise) {
    sample({
      clock: sessionReceivedAnonymous,
      target: otherwise as Event<void>,
    });
  }

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAuthenticated, getSessionQuery.$succeeded],
    cancelOn: sessionReceivedAnonymous,
  });
};

export function chainAnonymous<Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams = {},
): RouteInstance<Params> {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const sessionReceivedAuthenticated = createEvent<RouteParamsAndQuery<Params>>();

  const alreadyAuthenticated = sample({
    clock: sessionCheckStarted,
    source: getSessionQuery.$status,
    filter: (status) => status === "done",
  });

  const alreadyAnonymous = sample({
    clock: sessionCheckStarted,
    source: getSessionQuery.$status,
    filter: (status) => status === "fail",
  });

  sample({
    clock: sessionCheckStarted,
    source: getSessionQuery.$status,
    filter: (status) => status === "initial",
    target: getSessionQuery.start,
  });

  sample({
    clock: [alreadyAuthenticated, getSessionQuery.$succeeded],
    source: { params: route.$params, query: route.$query },
    filter: route.$isOpened,
    target: sessionReceivedAuthenticated,
  });

  if (otherwise) {
    sample({
      clock: sessionReceivedAuthenticated,
      target: otherwise as Event<void>,
    });
  }

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAnonymous, getSessionQuery.$failed],
    cancelOn: sessionReceivedAuthenticated,
  });
}
