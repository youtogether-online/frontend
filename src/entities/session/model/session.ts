import { AxiosError } from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { empty, not } from 'patronum'
import { DetailedUser } from '@/entities/user/types'
import { internalApi } from '@/shared/api'

export const appMounted = createEvent()
export const signOutClicked = createEvent()

export const getSessionFx = createEffect<void, DetailedUser, AxiosError>()
// async () => {
//   return {
//     username: 'frkam',
//     biography: 'Cookie`s lover',
//     userRole: 'USER',
//     email: 'g**p@gmail.com',
//     language: 'EN',
//     theme: 'SYSTEM',
//   }
// }
export const $session = createStore<DetailedUser | null>(null).reset(
  signOutClicked
)
export const $isAuthenticated = not(empty($session))

sample({
  clock: appMounted,
  target: getSessionFx,
})

sample({
  clock: getSessionFx.doneData,
  target: $session,
})
