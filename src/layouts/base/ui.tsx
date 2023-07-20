import { type ReactNode } from "react";

import { AnnouncmentBar } from "@/widgets/announcment-bar";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import { env } from "@/shared/config/env";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {env.PREVIEW && <AnnouncmentBar />}
      <Header />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </>
  );
};
