import { Trans } from "@lingui/macro";
import { useState } from "react";
import { tw } from "typewind";

import { AuthByEmail } from "@/features/auth/by-email";
import { AuthByPassword } from "@/features/auth/by-password";

import { Button } from "@/shared/ui/button";

const $$authByPassword = AuthByPassword.factory.createModel();
const $$authByEmail = AuthByEmail.factory.createModel();

export const AuthPage = () => {
  const [authMethod, setAuthMethod] = useState<"email" | "password">("email");

  const handleSwitchAuthMethod = () => {
    if (authMethod === "email") {
      setAuthMethod("password");
    } else {
      setAuthMethod("email");
    }
  };

  return (
    <section className={tw.w_full.mx_auto}>
      <div className={tw.p_4.border.border_borderDefault.rounded_md.bg_canvasInset}>
        {authMethod === "password" ? (
          <AuthByPassword.View model={$$authByPassword} />
        ) : (
          <AuthByEmail.View model={$$authByEmail} />
        )}
        <Button variant="invisible" block sx={tw.mt_4} onClick={handleSwitchAuthMethod}>
          {authMethod === "password" ? (
            <Trans>Authenticate by email</Trans>
          ) : (
            <Trans>Authenticate by password</Trans>
          )}
        </Button>
      </div>
    </section>
  );
};
