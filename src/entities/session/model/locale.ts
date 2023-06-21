import { createEffect, createEvent, sample } from "effector";

import { DEFAULT_LOCALE, locales } from "@/shared/config/i18n/languages";
import { loadLocaleFx } from "@/shared/config/i18n/load-locale";

import { getSessionQuery } from "./session";

const getLocaleFromNavigatorFx = createEffect(() => {
  const language = navigator.language.split("-")[0].toUpperCase();

  const availableLocales = Object.keys(locales);

  if (availableLocales.includes(language)) {
    return language;
  }

  return DEFAULT_LOCALE;
});

const localeSet = createEvent<string>();

sample({
  clock: getSessionQuery.finished.success,
  fn: (session) => session.result.language,
  target: localeSet,
});

sample({
  clock: getSessionQuery.finished.failure,
  target: getLocaleFromNavigatorFx,
});

sample({
  clock: getLocaleFromNavigatorFx.done,
  fn: (locale) => locale.result,
  target: localeSet,
});

sample({
  clock: localeSet,
  target: loadLocaleFx,
});
