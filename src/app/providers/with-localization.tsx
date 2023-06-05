import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { type ComponentType } from "react";

import { DEFAULT_LANGUAGE } from "@/shared/config/i18n/languages";
import { loadLocale } from "@/shared/config/i18n/load-locale";

loadLocale(DEFAULT_LANGUAGE);

export const withLocalization = (WrappedComponent: ComponentType) => () => {
  return (
    <I18nProvider i18n={i18n}>
      <WrappedComponent />
    </I18nProvider>
  );
};
