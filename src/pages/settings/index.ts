import { createRoutesView } from "atomic-router-react";

import { SettingsAccountRoute } from "./account";
import { SettingsAppearanceRoute } from "./appearance";
import { SettingsLanguageRoute } from "./language";
import { SettingsProfileRoute } from "./profile";

export const SettingsPages = createRoutesView({
  routes: [
    SettingsProfileRoute,
    SettingsAccountRoute,
    SettingsAppearanceRoute,
    SettingsLanguageRoute,
  ],
  otherwise: () => "notFound",
});
