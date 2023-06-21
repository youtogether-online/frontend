import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { type ComponentType } from "react";

export const withLocalization = (WrappedComponent: ComponentType) => () => {
  return (
    <I18nProvider i18n={i18n}>
      <WrappedComponent />
    </I18nProvider>
  );
};
