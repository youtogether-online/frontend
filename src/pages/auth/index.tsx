import { AuthLayout } from "@/layouts/auth";
import { createRouteView } from "atomic-router-react";

import { anonymousRoute, currentRoute } from "./model";
import { AuthPage } from "./page";

export const AuthRoute = {
  view: createRouteView({ route: anonymousRoute, view: AuthPage }),
  route: currentRoute,
  layout: AuthLayout,
};
