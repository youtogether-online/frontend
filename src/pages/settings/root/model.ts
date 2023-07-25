import { chainAuthorized } from "@/entities/session";

import { routes } from "@/shared/routing";

export const currentRoute = routes.settings.root;

export const authorizedRoute = chainAuthorized(currentRoute, {
  otherwise: routes.home.open,
});
