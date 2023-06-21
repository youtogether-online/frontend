import { createRoutesView } from "atomic-router-react";

import { AuthRoute } from "./auth";
import { HomeRoute } from "./home";
import { NotFoundPage } from "./not-found";
import { SettingsRoute } from "./settings";

export const Pages = createRoutesView({
  routes: [AuthRoute, SettingsRoute, HomeRoute],
  otherwise: NotFoundPage,
});
