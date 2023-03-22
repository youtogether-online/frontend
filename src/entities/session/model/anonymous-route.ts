import {
  chainRoute,
  redirect,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from 'atomic-router'
import { createEvent, sample } from 'effector'
import { not } from 'patronum'
import { $isAuthorized } from '@/entities/session'

export const chainAnonymous = <Params extends RouteParams>(
  route: RouteInstance<Params>,
  replaceWith?: RouteInstance<Params>
) => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>()

  const alreadyAnonymous = sample({
    clock: sessionCheckStarted,
    filter: not($isAuthorized),
  })

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: alreadyAnonymous,
  })
}
