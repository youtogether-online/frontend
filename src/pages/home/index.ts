import { BaseLayout } from "@/layouts";
import { createRouteView } from "atomic-router-react";

import { currentRoute } from "./model";
import { HomePage } from "./page";

export const HomeRoute = {
  view: createRouteView({ route: currentRoute, view: HomePage }),
  route: currentRoute,
  layout: BaseLayout,
};
