import { createJsonMutation, unknownContract } from '@farfetched/core'
import { redirect } from 'atomic-router'
import { createEvent, sample } from 'effector'
import { routes } from '@/shared/routes'
import { signOutUrl } from './api'

export const signOutMutation = createJsonMutation({
  request: {
    method: 'POST',
    url: signOutUrl,
  },
  response: {
    contract: unknownContract,
    status: {
      expected: 201,
    },
  },
})

export const signOutClicked = createEvent()

sample({
  clock: signOutClicked,
  target: [
    signOutMutation.start,
    redirect({
      route: routes.home,
      replace: true,
    }),
  ],
})
