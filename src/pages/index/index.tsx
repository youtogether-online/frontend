import { useTranslation } from "react-i18next";
import { styled } from "@/shared/config/stitches/stitches.config";
import { Text } from "@/shared/ui/text";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Text variant="h1">
        Index Page
      </Text>
    </Section>
  );
};

const Section = styled("section", {});

export default IndexPage;
