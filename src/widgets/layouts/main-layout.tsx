import { type ReactNode } from "react";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import { Content } from "@/shared/ui";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header navbar subheader search user />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};
