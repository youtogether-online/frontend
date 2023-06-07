import { createRouteView } from "atomic-router-react";

import { BaseLayout } from "@/widgets/layouts";

import { currentRoute } from "./model";
import { SettingsPage } from "./page";

export const SettingsRoute = {
  view: createRouteView({ route: currentRoute, view: SettingsPage }),
  route: currentRoute,
  layout: BaseLayout,
};
