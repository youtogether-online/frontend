import { createEffect, sample } from "effector";
import { combineEvents } from "patronum";
import { createRoot } from "react-dom/client";

import { getSessionQuery } from "@/entities/session";

import { loadLocaleFx } from "@/shared/config/i18n/load-locale";
import { appStarted } from "@/shared/config/init";

import App from "./application";

const root = createRoot(document.querySelector("#root") as HTMLElement);

appStarted();

const appDataLoaded = combineEvents({
  events: {
    loadLocale: loadLocaleFx.finally,
    loadSession: getSessionQuery.finished.finally,
  },
});

const renderAppFx = createEffect(() => {
  root.render(<App />);
});

sample({
  clock: appDataLoaded,
  target: renderAppFx,
});
