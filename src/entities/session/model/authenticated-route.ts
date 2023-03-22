import {
  chainRoute,
  redirect,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from 'atomic-router'
import { createEvent, createStore, sample } from 'effector'
import { and, debug, not } from 'patronum'
import { $isAuthorized, $sessionLoaded, getSessionFx } from '@/entities/session'
import { routes } from '@/shared/routes'

export const chainAuthorized = <Params extends RouteParams>({
  route,
  replaceWith,
}: {
  route: RouteInstance<Params>
  replaceWith?: RouteInstance<Params>
}) => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>()

  sample({
    clock: sessionCheckStarted,
    filter: and(not(getSessionFx.pending), not($sessionLoaded)),
    target: getSessionFx,
  })

  const alreadyAuthorized = sample({
    clock: sessionCheckStarted,
    filter: $isAuthorized,
  })

  if (replaceWith) {
    sample({
      clock: sessionCheckStarted,
      filter: and(not($isAuthorized), $sessionLoaded),
      target: redirect({
        route: routes.signIn,
      }),
    })

    sample({
      clock: getSessionFx.fail,
      filter: route.$isOpened,
      target: redirect({
        route: routes.signIn,
      }),
    })
  }

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAuthorized, getSessionFx.done],
  })
}
