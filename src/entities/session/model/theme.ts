import { createJsonMutation, declareParams } from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { trackMediaQuery } from "@withease/web-api";
import { createEffect, createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";
import { and, equals } from "patronum";

import { getUserPatchUrl, patchUserResponse } from "@/shared/api";
import { appStarted } from "@/shared/config/init";
import { type Theme } from "@/shared/config/theme";

import { getSessionQuery } from "./session";

export const themeChanged = createEvent<Theme>();

export const $theme = createStore<Theme | null>(null);

const { light, dark } = trackMediaQuery(
  { light: "(prefers-color-scheme: light)", dark: "(prefers-color-scheme: dark)" },
  { setup: appStarted },
);

export const setThemeFx = createEffect((theme: Exclude<Theme, "system">) => {
  const { documentElement } = document;

  documentElement.classList.remove(...documentElement.classList);
  documentElement.classList.add(theme.toLowerCase());
});

export const setThemeMutation = createJsonMutation({
  params: declareParams<{ theme: Theme }>(),
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
  store: $theme,
  key: "theme",
});

sample({
  clock: themeChanged,
  fn: (theme) => ({ theme }),
  target: setThemeMutation.start,
});

sample({
  clock: setThemeMutation.finished.success,
  target: getSessionQuery.refresh,
});

sample({
  clock: getSessionQuery.finished.success,
  fn: ({ result }) => result.theme,
  target: $theme,
});

sample({
  clock: getSessionQuery.finished.failure,
  filter: Boolean,
  fn: () => "system" as const,
  target: $theme,
});

sample({
  clock: getSessionQuery.finished.finally,
  source: $theme,
  filter: (theme): theme is Exclude<Theme, "system"> => {
    return theme !== "system";
  },
  target: setThemeFx,
});

sample({
  clock: [light.matched, getSessionQuery.finished.finally],
  filter: and(light.$matches, equals($theme, "system")),
  fn: () => "light" as const,
  target: setThemeFx,
});

sample({
  clock: [dark.matched, getSessionQuery.finished.finally],
  filter: and(dark.$matches, equals($theme, "system")),
  fn: () => "dark" as const,
  target: setThemeFx,
});
