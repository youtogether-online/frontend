import { trackMediaQuery } from "@withease/web-api";
import { createEffect, createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";
import { and, equals, not } from "patronum";

import { appStarted } from "@/shared/config/init";

import { getSessionQuery } from "./session";

type theme = "LIGHT" | "DARK" | "SYSTEM";

const themeChanged = createEvent<theme>();

const $theme = createStore<theme>("SYSTEM");

const { light, dark } = trackMediaQuery(
  { light: "(prefers-color-scheme: light)", dark: "(prefers-color-scheme: dark)" },
  { setup: appStarted },
);

export const setThemeFx = createEffect((theme: Exclude<theme, "SYSTEM">) => {
  const { documentElement } = document;

  documentElement.classList.remove(...documentElement.classList);
  documentElement.classList.add(theme.toLowerCase());
});

persist({
  store: $theme,
  key: "theme",
});

sample({
  clock: getSessionQuery.finished.success,
  fn: (result) => result.result.theme,
  target: themeChanged,
});

sample({
  clock: themeChanged,
  target: $theme,
});

sample({
  clock: themeChanged,
  filter: (theme): theme is Exclude<theme, "SYSTEM"> => {
    return Boolean(not(equals(theme, "SYSTEM")));
  },
  target: setThemeFx,
});

sample({
  clock: getSessionQuery.finished.failure,
  source: $theme,
  filter: (theme): theme is Exclude<theme, "SYSTEM"> => {
    return Boolean(not(equals(theme, "SYSTEM")));
  },

  target: setThemeFx,
});

sample({
  clock: [getSessionQuery.finished.finally, light.matched],
  filter: and(light.$matches, equals($theme, "SYSTEM")),
  fn: () => "LIGHT" as const,
  target: setThemeFx,
});

sample({
  clock: [getSessionQuery.finished.finally, dark.matched],
  filter: and(dark.$matches, equals($theme, "SYSTEM")),
  fn: () => "DARK" as const,
  target: setThemeFx,
});
