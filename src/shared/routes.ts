import { createRoute, createRouterControls } from "atomic-router";

export const routes = {
  home: createRoute(),
  profile: createRoute<{ username: string }>(),
  signIn: createRoute(),
  settings: createRoute(),
};

export const controls = createRouterControls();
