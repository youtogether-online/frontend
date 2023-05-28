import { useTranslation } from "react-i18next";

import { SignIn } from "@/widgets/sign-in";
import { createSignInModel } from "@/widgets/sign-in/model";

export const SignInPage = () => {
  const { t } = useTranslation();

  const signInModel = createSignInModel.createModel();

  return (
    <section>
      <div>
        <SignIn logo model={signInModel} />
      </div>
    </section>
  );
};
