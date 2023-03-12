import {
  chainRoute,
  createRoute,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from 'atomic-router'
import { createEvent, sample } from 'effector'
import { $isAuthenticated } from '@/entities/session'

export const routes = {
  home: createRoute(),
  catalog: createRoute(),
  profile: createRoute<{ username: string }>(),
  friends: createRoute<{ username: string }>(),
  signIn: createRoute(),
  settings: createRoute(),
}
