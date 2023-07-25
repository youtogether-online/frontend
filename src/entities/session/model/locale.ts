import { createJsonMutation, declareParams } from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { trackPreferredLanguages } from "@withease/web-api";
import { createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";
import { and, empty, not } from "patronum";

import { getUserPatchUrl, patchUserResponse } from "@/shared/api";
import { defaultLanguage, languagesMap } from "@/shared/config/i18n/languages";
import { loadLocaleFx } from "@/shared/config/i18n/load-locale";
import { appStarted } from "@/shared/config/init";

import { getSessionQuery } from "./session";

const { $language: $prefferedLanguage } = trackPreferredLanguages({
  setup: appStarted,
});

type Language = "en" | "ru";

export const $language = createStore<Language | null>(null);

export const setLanguageMutation = createJsonMutation({
  params: declareParams<{ language: Language }>(),
  request: {
    method: "PATCH",
    url: getUserPatchUrl(),
    body: (payload) => payload,
  },
  response: {
    contract: zodContract(patchUserResponse),
  },
});

persist({
  store: $language,
  key: "language",
});

export const languageChanged = createEvent<Language>();

sample({
  clock: languageChanged,
  fn: (language) => ({ language }),
  target: setLanguageMutation.start,
});

sample({
  clock: setLanguageMutation.finished.success,
  target: getSessionQuery.refresh,
});

sample({
  clock: getSessionQuery.finished.success,
  fn: (session) => session.result.language,
  target: $language,
});

sample({
  clock: getSessionQuery.finished.failure,
  source: $prefferedLanguage,
  filter: and(empty($language), not(empty($prefferedLanguage))),
  fn: (language) => {
    const primaryLanguage = language!.split("-")[0];

    return Object.keys(languagesMap).includes(primaryLanguage)
      ? (primaryLanguage as Language)
      : defaultLanguage;
  },
  target: $language,
});

sample({
  clock: getSessionQuery.finished.finally,
  source: $language,
  filter: Boolean,
  target: loadLocaleFx,
});
