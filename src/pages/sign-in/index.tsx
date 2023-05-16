import { useTranslation } from "react-i18next";

import { SignIn } from "@/widgets/sign-in";
import { createSignInModel } from "@/widgets/sign-in/model";

import { styled } from "@/shared/config/stitches/stitches.config";
import { Container } from "@/shared/ui/templates/container";

export const SignInPage = () => {
  const { t } = useTranslation();

  const signInModel = createSignInModel.createModel();

  return (
    <Section>
      <Container>
        <SignIn logo model={signInModel} />
      </Container>
    </Section>
  );
};

const Section = styled("section", {
  height: "100%",
  width: "350px",
  margin: "auto auto",
});
