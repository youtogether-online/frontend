import { ReactNode } from "react";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { tw } from "typewind";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={tw.flex_1.p_6}>
        {children}
      </main>
      <Footer />
    </>
  );
};
