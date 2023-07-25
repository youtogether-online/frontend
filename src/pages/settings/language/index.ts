import { SettingsLayout } from "@/layouts/settings";
import { createRouteView } from "atomic-router-react";

import { authorizedRoute, currentRoute } from "./model";
import { SettingsLanguagePage } from "./page";

export const SettingsLanguageRoute = {
  view: createRouteView({ view: SettingsLanguagePage, route: authorizedRoute }),
  route: currentRoute,
  layout: SettingsLayout,
};
