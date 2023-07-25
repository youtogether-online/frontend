import { SettingsLayout } from "@/layouts/settings";
import { createRouteView } from "atomic-router-react";

import { authorizedRoute, currentRoute } from "./model";
import { SettingsAccountPage } from "./page";

export const SettingsAccountRoute = {
  view: createRouteView({ route: authorizedRoute, view: SettingsAccountPage }),
  route: currentRoute,
  layout: SettingsLayout,
};
