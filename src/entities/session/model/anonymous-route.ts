import {
  chainRoute,
  redirect,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from 'atomic-router'
import { createEvent, sample } from 'effector'
import { and, debug, not } from 'patronum'
import { $isAuthorized, $sessionLoaded, getSessionFx } from '@/entities/session'
import { controls } from '@/shared/routes'

export const chainAnonymous = <Params extends RouteParams>(
  route: RouteInstance<Params>
) => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>()

  sample({
    clock: sessionCheckStarted,
    filter: and(not(getSessionFx.pending), not($sessionLoaded)),
    target: getSessionFx,
  })

  sample({
    clock: sessionCheckStarted,
    filter: and($isAuthorized, $sessionLoaded),
    target: controls.back,
  })

  const alreadyAnonymous = sample({
    clock: sessionCheckStarted,
    filter: and(not($isAuthorized), not(getSessionFx.pending)),
  })

  sample({
    clock: getSessionFx.done,
    filter: route.$isOpened,
    target: controls.back,
  })

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAnonymous, getSessionFx.fail],
  })
}
