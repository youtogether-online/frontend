import { createJsonMutation, createJsonQuery } from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import {
  chainRoute,
  type RouteInstance,
  type RouteParams,
  type RouteParamsAndQuery,
} from "atomic-router";
import { createEvent, type Effect, type Event, sample } from "effector";
import { z } from "zod";

import {
  getAuthSessionDeleteUrl,
  getAuthSessionGetUrl,
  getAuthSessionResponse,
} from "@/shared/api";
import { appStarted } from "@/shared/config/init";

export const signOutClicked = createEvent();

export const signOutMutation = createJsonMutation({
  request: {
    method: "DELETE",
    url: getAuthSessionDeleteUrl(),
  },
  response: {
    contract: zodContract(z.null()),
  },
});

export const getSessionQuery = createJsonQuery({
  request: {
    method: "GET",
    url: getAuthSessionGetUrl(),
  },
  response: {
    contract: zodContract(getAuthSessionResponse),
  },
});

sample({
  clock: appStarted,
  target: getSessionQuery.start,
});

sample({
  clock: signOutClicked,
  target: signOutMutation.start,
});

sample({
  clock: signOutMutation.$succeeded,
  target: getSessionQuery.reset,
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
