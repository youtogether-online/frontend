import { t, Trans } from "@lingui/macro";
import { useUnit } from "effector-react";

import { $language, languageChanged } from "@/entities/session";

import { type Language } from "@/shared/api/internal/schemas";
import { languagesMap } from "@/shared/config/i18n/languages";
import { Form } from "@/shared/ui/form/form";
import { PageHead } from "@/shared/ui/pagehead";
import { Select } from "@/shared/ui/select";

export const SettingsLanguagePage = () => {
  const [language, changeLanguage] = useUnit([$language, languageChanged]);

  const handleItemSelect = (value: Language) => {
    changeLanguage(value);
  };

  return (
    <>
      <PageHead>
        <Trans>Language</Trans>
      </PageHead>
      <Form>
        <Form.Field name="theme">
          <Select value={language ?? "en"} onValueChange={handleItemSelect}>
            <Form.Control asChild>
              <Select.Trigger placeholder={t`Select theme`} />
            </Form.Control>
            <Select.Content position="popper">
              {Object.keys(languagesMap).map((lang) => {
                return (
                  <Select.Item value={lang} key={lang}>
                    {languagesMap[lang as Language]}
                  </Select.Item>
                );
              })}
            </Select.Content>
          </Select>
        </Form.Field>
      </Form>
    </>
  );
};
