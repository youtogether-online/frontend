import "@unocss/reset/tailwind.css";
import { createEffect, sample } from "effector";
import { combineEvents } from "patronum";
import { createRoot } from "react-dom/client";
import "uno.css";
import "virtual:uno.css";
import "virtual:unocss-devtools";

import { loadLocaleFx } from "@/shared/config/i18n/load-locale";
import { appStarted } from "@/shared/config/init";

import App from "./application";

const root = createRoot(document.querySelector("#root") as HTMLElement);

appStarted();

const appDataLoaded = combineEvents({
  events: {
    setLocale: loadLocaleFx.done,
    // setTheme: setThemeFx.done,
  },
});

const renderAppFx = createEffect(() => {
  root.render(<App />);
});

sample({
  clock: appDataLoaded,
  target: renderAppFx,
});
