import { AxiosError } from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { and, debug, empty, not, or } from 'patronum'
import { DetailedUser } from '@/entities/user'
import { internalApi } from '@/shared/api'
import { signOutFx } from './sign-out'

export const appStarted = createEvent()
export const getSessionFx = createEffect<void, DetailedUser, AxiosError>(
  async () => {
    const { data } = await internalApi.users.getSessionData()
    return data
  }
)

export const $session = createStore<DetailedUser | null>(null).reset(
  signOutFx.done
)
export const $isAuthorized = not(empty($session))
export const $sessionLoaded = createStore(false)

sample({
  clock: appStarted,
  filter: and(not(getSessionFx.pending), not($sessionLoaded)),
  target: getSessionFx,
})

sample({
  clock: getSessionFx.doneData,
  target: $session,
})

sample({
  clock: getSessionFx.finally,
  fn: () => true,
  target: $sessionLoaded,
})
