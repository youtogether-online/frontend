import { createRoute, createRouterControls } from 'atomic-router'

export const routes = {
  home: createRoute(),
  catalog: createRoute(),
  profile: createRoute<{ username: string }>(),
  friends: createRoute<{ username: string }>(),
  signIn: createRoute(),
  settings: createRoute(),
}

export const controls = createRouterControls()
