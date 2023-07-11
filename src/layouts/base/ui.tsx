import { type ReactNode, useEffect } from "react";
import { tw } from "typewind";

import { AnnouncmentBar } from "@/widgets/announcment-bar";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import { env } from "@/shared/config/env";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {env.PREVIEW && <AnnouncmentBar />}
      <Header />
      <main className={tw.flex_1.p_6}>{children}</main>
      <Footer />
    </>
  );
};
