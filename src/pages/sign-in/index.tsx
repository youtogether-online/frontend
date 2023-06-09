import { createRouteView } from "atomic-router-react";

import { BaseLayout } from "@/widgets/layouts";

import { anonymousRoute, currentRoute } from "./model";
import { SignInPage } from "./page";

export const SignInRoute = {
  view: createRouteView({ route: anonymousRoute, view: SignInPage }),
  route: currentRoute,
  layout: BaseLayout,
};
