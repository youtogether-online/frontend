import { chainAnonymous } from "@/entities/session";

import { routes } from "@/shared/routing";

export const currentRoute = routes.auth.signIn;
export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});
