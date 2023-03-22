import { redirect } from 'atomic-router'
import { AxiosError } from 'axios'
import { createEffect, createEvent, sample } from 'effector'
import { internalApi } from '@/shared/api'
import { routes } from '@/shared/routes'

export const signOutFx = createEffect<void, void, AxiosError>(async () => {
  await internalApi.auth.signOut()
})

export const signOutClicked = createEvent()

sample({
  clock: signOutClicked,
  target: signOutFx,
})

sample({
  clock: signOutClicked,
  target: redirect({
    route: routes.home,
    replace: true,
  }),
})
