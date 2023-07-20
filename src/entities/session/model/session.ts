import { createJsonQuery, createQuery } from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import {
  chainRoute,
  type RouteInstance,
  type RouteParams,
  type RouteParamsAndQuery,
} from "atomic-router";
import { createEvent, createStore, type Effect, type Event, sample } from "effector";
import { debug } from "patronum";

import { getAuthSessionResponse } from "@/shared/api";
import { getAuthSessionGetUrl, type Session } from "@/shared/api/internal";
import { appStarted } from "@/shared/config/init";

export const $session = createStore<Session | null>(null);

export const getSessionQuery = createJsonQuery({
  request: {
    method: "GET",
    url: getAuthSessionGetUrl(),
    headers: {
      credentials: "include",
    },
  },
  response: {
    contract: zodContract(getAuthSessionResponse),
  },
});

export const $isAuthorized = getSessionQuery.$succeeded;

sample({
  clock: appStarted,
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
