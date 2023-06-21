import { i18n, type Messages } from "@lingui/core";
import { createEffect } from "effector";

export const loadLocaleFx = createEffect(async (locale: string) => {
  const { messages }: { messages: Messages } = await import(`./locales/${locale}.po`);

  i18n.load(locale, messages);
  i18n.activate(locale);
});
