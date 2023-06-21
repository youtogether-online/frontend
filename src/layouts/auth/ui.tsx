import { type ReactNode } from "react";
import { tw } from "typewind";

import { Header } from "@/widgets/header";

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Header />
      <main className={tw.flex_1.mt_10}>{children}</main>
    </>
  );
};
