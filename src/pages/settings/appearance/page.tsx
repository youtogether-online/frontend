import { t, Trans } from "@lingui/macro";
import { useUnit } from "effector-react";

import { $theme, themeChanged } from "@/entities/session";

import { type Theme, themesMap } from "@/shared/config/theme";
import { Form } from "@/shared/ui/form/form";
import { PageHead } from "@/shared/ui/pagehead";
import { Select } from "@/shared/ui/select";

export const SettingsAppearancePage = () => {
  const [theme, changeTheme] = useUnit([$theme, themeChanged]);

  const handleItemSelect = (value: Theme) => {
    changeTheme(value);
  };

  return (
    <>
      <PageHead>
        <Trans>Theme</Trans>
      </PageHead>
      <Form>
        <Form.Field name="theme">
          <Select value={theme ?? "dark"} onValueChange={handleItemSelect}>
            <Form.Control asChild>
              <Select.Trigger placeholder={t`Select theme`} />
            </Form.Control>
            <Select.Content position="popper">
              {Object.keys(themesMap).map((theme) => {
                return (
                  <Select.Item value={theme} key={theme}>
                    {themesMap[theme as Theme]}
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
