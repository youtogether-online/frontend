import { chainAuthorized } from "@/entities/session";

import { routes } from "@/shared/routing";

export const currentRoute = routes.settings.language;
export const authorizedRoute = chainAuthorized(currentRoute, {
  otherwise: routes.auth.open,
});
