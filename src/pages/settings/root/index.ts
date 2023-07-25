import { BaseLayout } from "@/layouts/base";
import { createRouteView } from "atomic-router-react";

import { authorizedRoute, currentRoute } from "./model";
import { SettingsRootPage } from "./page";

export const SettingsRootRoute = {
  view: createRouteView({ route: authorizedRoute, view: SettingsRootPage }),
  route: currentRoute,
  layout: BaseLayout,
};
