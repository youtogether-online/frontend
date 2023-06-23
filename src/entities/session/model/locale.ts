import { trackPreferredLanguages } from "@withease/web-api";
import { createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";
import { and, empty, not } from "patronum";

import { DEFAULT_LANGUAGE, languages } from "@/shared/config/i18n/languages";
import { loadLocaleFx } from "@/shared/config/i18n/load-locale";
import { appStarted } from "@/shared/config/init";

import { getSessionQuery } from "./session";

const { $language: $prefferedLanguage } = trackPreferredLanguages({
  setup: appStarted,
});

type Language = "en" | "ru";

const $language = createStore<Language | null>(null);

persist({
  store: $language,
  key: "language",
});

const languageSet = createEvent<Language>();

sample({
  clock: getSessionQuery.finished.success,
  fn: (session) => session.result.language,
  target: languageSet,
});

sample({
  clock: getSessionQuery.finished.failure,
  source: $language,
  filter: Boolean,
  target: languageSet,
});

sample({
  clock: getSessionQuery.finished.failure,
  source: $prefferedLanguage,
  filter: and(empty($language), not(empty($prefferedLanguage))),
  fn: (language) => {
    const primaryLanguage = language!.split("-")[0];

    return Object.keys(languages).includes(primaryLanguage)
      ? (primaryLanguage as Language)
      : DEFAULT_LANGUAGE;
  },
  target: languageSet,
});

sample({
  clock: languageSet,
  target: [loadLocaleFx, $language],
});
