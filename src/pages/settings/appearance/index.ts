import { SettingsLayout } from "@/layouts/settings";
import { createRouteView } from "atomic-router-react";

import { authorizedRoute, currentRoute } from "./model";
import { SettingsAppearancePage } from "./page";

export const SettingsAppearanceRoute = {
  view: createRouteView({ view: SettingsAppearancePage, route: authorizedRoute }),
  route: currentRoute,
  layout: SettingsLayout,
};
