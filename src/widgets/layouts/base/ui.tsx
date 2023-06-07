import { type ReactNode } from "react";
import { tw } from "typewind";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={tw.flex_1.p_6}>{children}</main>
      <Footer />
    </>
  );
};
