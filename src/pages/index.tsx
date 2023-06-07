import { createRoutesView } from "atomic-router-react";

import { routes } from "@/shared/routing";

import { HomeRoute } from "./home";
import { NotFoundPage } from "./not-found";
import { SettingsRoute } from "./settings";
import { SignInRoute } from "./sign-in";

export const Pages = createRoutesView({
  routes: [SignInRoute, SettingsRoute, HomeRoute],
  otherwise: NotFoundPage,
});
