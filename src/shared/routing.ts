import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";

import { appStarted } from "./config/init";

export const routes = {
  home: createRoute(),
  profile: createRoute<{ username: string }>(),
  auth: {
    signIn: createRoute(),
  },
  settings: createRoute(),
};

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: "/",
      route: routes.home,
    },
    {
      path: "/:id",
      route: routes.profile,
    },
    {
      path: "/sign-in",
      route: routes.auth.signIn,
    },
    {
      path: "/settings",
      route: routes.settings,
    },
  ],
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
