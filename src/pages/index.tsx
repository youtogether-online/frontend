import { createRoutesView } from "atomic-router-react";

import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { ProfilePage } from "@/pages/profile";
import { SettingsPage } from "@/pages/settings";
import { SignInPage } from "@/pages/sign-in";

import { MainLayout } from "@/widgets/layouts/main-layout";
import { SignInLayout } from "@/widgets/layouts/sign-in-layout";

import { chainAnonymous, chainAuthorized } from "@/entities/session";

import { routes } from "@/shared/routes";

export const routesMap = [
  {
    path: "/",
    route: routes.home,
  },
  {
    path: "/settings",
    route: routes.settings,
  },
  {
    path: "/sign-in",
    route: routes.signIn,
  },
  {
    path: "/:username",
    route: routes.profile,
  },
];

export const Pages = createRoutesView({
  routes: [
    {
      route: routes.home,
      view: HomePage,
      layout: MainLayout,
    },
    {
      route: chainAuthorized({
        route: routes.settings,
        replaceWith: routes.signIn,
      }),
      view: SettingsPage,
      layout: MainLayout,
    },
    {
      route: chainAnonymous(routes.signIn),
      view: SignInPage,
      layout: SignInLayout,
    },
    {
      route: routes.profile,
      view: ProfilePage,
      layout: MainLayout,
    },
  ],
  otherwise: () => {
    return <NotFoundPage />;
  },
});
