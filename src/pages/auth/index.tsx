import { createRouteView } from "atomic-router-react";

import { AuthLayout } from "@/layouts";

import { anonymousRoute, currentRoute } from "./model";
import { AuthPage } from "./page";

export const AuthRoute = {
  view: createRouteView({ route: anonymousRoute, view: AuthPage }),
  route: currentRoute,
  layout: AuthLayout,
};
