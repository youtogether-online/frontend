import { type ReactNode } from "react";

import { Header } from "@/widgets/header";

interface SignInLayoutProps {
  children: ReactNode;
}

export const SignInLayout = ({ children }: SignInLayoutProps) => {
  return (
    <>
      <Header centerLogo />
      <div>{children}</div>
    </>
  );
};
