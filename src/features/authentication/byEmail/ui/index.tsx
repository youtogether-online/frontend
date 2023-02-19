import { useUnit } from "effector-react";
import { $currentSignInStep } from "@/features/authentication/byEmail";
import { GetCode } from "@/features/authentication/byEmail/ui/getCode";
import { SendCode } from "@/features/authentication/byEmail/ui/sendCode";

export const SignInByEmail = () => {
  const currentSignInStep = useUnit($currentSignInStep);
    
  if (currentSignInStep === "getCode") {
    return <GetCode />;
  }

  return <SendCode />;
};

