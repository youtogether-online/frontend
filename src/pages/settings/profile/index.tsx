import { SettingsLayout } from "@/layouts/settings";
import { createRouteView } from "atomic-router-react";

import { authorizedRoute, currentRoute } from "./model";
import { SettingsProfilePage } from "./page";

export const SettingsProfileRoute = {
  view: createRouteView({ route: authorizedRoute, view: SettingsProfilePage }),
  route: currentRoute,
  layout: SettingsLayout,
};
