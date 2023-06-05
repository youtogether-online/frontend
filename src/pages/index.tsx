import { createRoutesView } from "atomic-router-react";

import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { ProfilePage } from "@/pages/profile";
import { SettingsPage } from "@/pages/settings";
import { SignInPage } from "@/pages/sign-in";

import { routes } from "@/shared/routes";
import { BaseLayout } from "@/widgets/layouts";

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
      layout: BaseLayout,
    },
    {
      route: routes.settings,
      view: SettingsPage,
      layout: BaseLayout,
    },
    {
      route: routes.signIn,
      view: SignInPage,
      layout: BaseLayout,
    },
    {
      route: routes.profile,
      view: ProfilePage,
      layout: BaseLayout,
    },
  ],
  otherwise: () => {
    return <NotFoundPage />;
  },
});
