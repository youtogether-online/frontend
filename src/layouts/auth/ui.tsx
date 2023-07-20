import { Link } from "atomic-router-react";
import { type ReactNode } from "react";

import { AnnouncmentBar } from "@/widgets/announcment-bar";

import { env } from "@/shared/config/env";
import { routes } from "@/shared/routing";
import { Icon } from "@/shared/ui/icon";

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      {env.PREVIEW && <AnnouncmentBar />}
      <div className="mx-auto mt-10 flex flex-col items-center gap-8 p-6">
        <Link to={routes.home}>
          <Icon name="logos/youtogether-vertical" viewBox="0 0 140 80" height="80" width="140" />
        </Link>
        <main className="w-[340px]">{children}</main>
      </div>
    </>
  );
};
