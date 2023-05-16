import { useTranslation } from "react-i18next";


import { Form, Input, Text } from "@/shared/ui";

export const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Input placeholder="Movies" postfix={<Text variant="keyboard">/</Text>} />
    </div>
  );
};
