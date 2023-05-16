import { type ReactNode } from "react";

import { Header } from "@/widgets/header";

import { Content } from "@/shared/ui";

interface SignInLayoutProps {
  children: ReactNode;
}

export const SignInLayout = ({ children }: SignInLayoutProps) => {
  return (
    <>
      <Header centerLogo />
      <Content>{children}</Content>
    </>
  );
};
