import { createEvent, sample } from 'effector'
import { getSessionFx } from '@/entities/session'

export const signInClicked = createEvent()

sample({
  clock: signInClicked,
  target: getSessionFx,
})
