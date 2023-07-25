import { createRoutesView } from "atomic-router-react";

import { AuthRoute } from "./auth";
import { HomeRoute } from "./home";
import { NotFoundPage } from "./not-found";
import { SettingsRootRoute } from "./settings/root";

export const Pages = createRoutesView({
  routes: [AuthRoute, SettingsRootRoute, HomeRoute],
  otherwise: NotFoundPage,
});
