import { useTranslation } from "react-i18next";

import { SignIn } from "@/widgets/sign-in";
import { createSignInModel } from "@/widgets/sign-in/model";

import { Container } from "@/shared/ui/templates/container";

export const SignInPage = () => {
  const { t } = useTranslation();

  const signInModel = createSignInModel.createModel();

  return (
    <section>
      <Container>
        <SignIn logo model={signInModel} />
      </Container>
    </section>
  );
};