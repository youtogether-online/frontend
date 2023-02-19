import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { SignInByPassword } from "@/features/authentication/byPassword";
import { SignInByEmail } from "@/features/authentication/byEmail";
import { testApi } from "@/shared/api/auth";

type signInModes = "signInWithPassword" | "signInWithEmail"

export const SignIn = () => {
  const { t } = useTranslation();
  const [currentSignInMode, setCurrentSignInMode] = useState<signInModes>("signInWithEmail");

  const handleChangeSignInMode = (mode: signInModes) => {
    setCurrentSignInMode(mode);
  };

  const handleTest = () => {
    const response = testApi();
    console.log(response);
  };

  return <Dialog title={t("signIn")} triggerText={t("signIn")}>
    {
      currentSignInMode === "signInWithEmail" &&
      <Fragment>
        <SignInByEmail />
        <Button css={{ marginTop: "8px" }} onClick={() => handleChangeSignInMode("signInWithPassword")}
                variant="text">{t("signInWithPassword")}
        </Button>
        <Button css={{ marginTop: "10px" }} onClick={handleTest} variant="text">Test</Button>
      </Fragment>
    }

    {currentSignInMode === "signInWithPassword" &&
      <Fragment>
        <SignInByPassword />
        <Button css={{ marginTop: "8px" }} onClick={() => handleChangeSignInMode("signInWithEmail")}
                variant="text">{t("signInWithEmail")}
        </Button>
      </Fragment>
    }
  </Dialog>;
};

