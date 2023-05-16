import { modelView } from "effector-factorio";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createSignInModel } from "@/widgets/sign-in/model";

import { SignInByEmail } from "@/features/authentication/by-email";
import { SignInByPassword } from "@/features/authentication/by-password";

import { Button, IconKey, IconLogoVertical, IconMail, Text } from "@/shared/ui";

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
      <Text variant="h4" centered>
        {t("signInOrSignUp")}
      </Text>
      {currentSignInMode === "signInByEmail" ? (
        <div>
          <SignInByEmail model={signInModel.byEmailModel} />
          <Text variant="body1" secondary centered>
            {t("or")}
          </Text>
          <Button
            variant="outlined"
            onClick={() => {
              setCurrentSignInMode("signInWithPassword");
            }}
            size="full"
            icon={<IconKey />}
          >
            {t("signInWithPassword")}
          </Button>
        </div>
      ) : (
        <div>
          <SignInByPassword model={signInModel.byPasswordModel} />
          <Text variant="body2" secondary centered>
            {t("or")}
          </Text>
          <Button
            variant="outlined"
            size="full"
            onClick={() => {
              setCurrentSignInMode("signInByEmail");
            }}
            icon={<IconMail />}
          >
            {t("signInByEmail")}
          </Button>
        </div>
      )}
      {logo && (
        <div>
          <IconLogoVertical color="rgba(0, 0, 0, 80%)" />
        </div>
      )}
    </div>
  );
});
