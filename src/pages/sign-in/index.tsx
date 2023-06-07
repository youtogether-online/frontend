import { createRouteView } from "atomic-router-react";

import { BaseLayout } from "@/widgets/layouts";

import { currentRoute } from "./model";
import { SignInPage } from "./page";

export const SignInRoute = {
  view: createRouteView({ route: currentRoute, view: SignInPage }),
  route: currentRoute,
  layout: BaseLayout,
};
