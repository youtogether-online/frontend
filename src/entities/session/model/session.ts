import { createJsonQuery } from '@farfetched/core'
import { createEvent, createStore, sample } from 'effector'
import { and, empty, not } from 'patronum'
import { getSessionUrl } from '@/entities/session/model/api'
import { UserDetailedContract } from './api/contract'
import { signOutMutation } from './sign-out'

export const appStarted = createEvent()
export const getSessionQuery = createJsonQuery({
  request: {
    method: 'GET',
    url: getSessionUrl,
  },
  response: {
    contract: UserDetailedContract,
  },
})
export const $isAuthorized = not(empty(getSessionQuery.$data))
export const $sessionLoaded = createStore(false)

sample({
  clock: signOutMutation.start,
  target: getSessionQuery.reset,
})

sample({
  clock: appStarted,
  filter: and(not(getSessionQuery.$pending), not($sessionLoaded)),
  target: getSessionQuery.start,
})

sample({
  clock: getSessionQuery.finished.finally,
  fn: () => true,
  target: $sessionLoaded,
})
