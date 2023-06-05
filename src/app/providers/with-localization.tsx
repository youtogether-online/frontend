import { i18n } from "@lingui/core";
import { detect, fromNavigator, fromStorage } from "@lingui/detect-locale";
import { I18nProvider } from "@lingui/react";
import { ComponentType, ReactNode } from "react";

import { DEFAULT_LANGUAGE } from "@/shared/config/i18n/languages";
import { loadLocale } from "@/shared/config/i18n/load-locale";

const detectedLanguage =
  detect(
    fromStorage("language"),
    // fromNavigator(),
    DEFAULT_LANGUAGE,
  ) || DEFAULT_LANGUAGE;

loadLocale(detectedLanguage);

export const withLocalization = (WrappedComponent: ComponentType) => () => {
  return (
    <I18nProvider i18n={i18n}>
      <WrappedComponent />
    </I18nProvider>
  );
};
