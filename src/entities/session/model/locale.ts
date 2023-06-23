import { trackPreferredLanguages } from "@withease/web-api";
import { createEvent, createStore, sample } from "effector";

import { DEFAULT_LOCALE, locales } from "@/shared/config/i18n/languages";
import { loadLocaleFx } from "@/shared/config/i18n/load-locale";
import { appStarted } from "@/shared/config/init";

import { getSessionQuery } from "./session";

const { $language } = trackPreferredLanguages({
  setup: appStarted,
});

const localeSet = createEvent<string>();

sample({
  clock: getSessionQuery.finished.success,
  fn: (session) => session.result.language,
  target: localeSet,
});

sample({
  clock: getSessionQuery.finished.failure,
  source: $language,
  filter: Boolean,
  fn: (language) =>
    Object.keys(locales).includes(language.split("-")[0].toUpperCase())
      ? language.toUpperCase()
      : DEFAULT_LOCALE,
  target: localeSet,
});

sample({
  clock: localeSet,
  target: loadLocaleFx,
});
