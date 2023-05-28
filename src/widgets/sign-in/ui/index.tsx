import { modelView } from "effector-factorio";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createSignInModel } from "@/widgets/sign-in/model";

import { SignInByEmail } from "@/features/authentication/by-email";
import { SignInByPassword } from "@/features/authentication/by-password";

import { Title } from "@/shared/ui/typography";

type SignInModes = "signInByEmail" | "signInWithPassword";

interface SignInProps {
  logo?: boolean;
}

export const SignIn = modelView(createSignInModel, ({ logo = false }: SignInProps) => {
  const { t } = useTranslation();
  const [currentSignInMode, setCurrentSignInMode] = useState<SignInModes>("signInByEmail");

  const signInModel = createSignInModel.useModel();

  return (
    <div>
      <Title order={4}>{t("signInOrSignUp")}</Title>
    </div>
  );
});
