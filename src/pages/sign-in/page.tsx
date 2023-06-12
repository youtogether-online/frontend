import { tw } from "typewind";

import { AuthByPassword } from "@/features/auth/by-password/ui";

export const SignInPage = () => {
  return (
    <section className={tw.max_w_["340px"].w_full.mx_auto}>
      <AuthByPassword />
    </section>
  );
};
