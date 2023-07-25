import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";

import { appStarted } from "./config/init";

export const routes = {
  home: createRoute(),
  profile: createRoute<{ name: string }>(),
  auth: createRoute(),
  settings: {
    root: createRoute(),
    profile: createRoute(),
    account: createRoute(),
    appearance: createRoute(),
    language: createRoute(),
  },
};

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: "/",
      route: routes.home,
    },
    {
      path: "/:name",
      route: routes.profile,
    },
    {
      path: "/auth",
      route: routes.auth,
    },
    {
      path: "/settings/profile",
      route: [routes.settings.root, routes.settings.profile],
    },
    {
      path: "/settings/account",
      route: [routes.settings.root, routes.settings.account],
    },
    {
      path: "/settings/appearance",
      route: [routes.settings.root, routes.settings.appearance],
    },
    {
      path: "/settings/language",
      route: [routes.settings.root, routes.settings.language],
    },
  ],
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
