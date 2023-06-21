import { createRouteView } from "atomic-router-react";

import { BaseLayout } from "@/layouts";

import { authorizedRoute, currentRoute } from "./model";
import { SettingsPage } from "./page";

export const SettingsRoute = {
  view: createRouteView({ route: authorizedRoute, view: SettingsPage }),
  route: currentRoute,
  layout: BaseLayout,
};
