import { t } from "@lingui/macro";

export const themesMap = {
  system: t`System`,
  light: t`Light`,
  dark: t`Dark`,
};

export type Theme = "light" | "dark" | "system";
