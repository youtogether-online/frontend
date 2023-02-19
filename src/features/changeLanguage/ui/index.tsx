import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const availableLanguages = useMemo(() => i18n.languages, []);
  const currentLanguage = i18n.language;

  const switchLanguage = () => {
    const inactiveLanguage = availableLanguages.filter(language => language !== currentLanguage);

    i18n.changeLanguage(inactiveLanguage[0]);
  };

  return <div className="">
    <button onClick={switchLanguage} />
  </div>;
};
