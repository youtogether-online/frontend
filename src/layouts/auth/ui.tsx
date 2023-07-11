import { Link } from "atomic-router-react";
import { type ReactNode } from "react";
import { tw } from "typewind";

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
      <div className={tw.mt_10.flex.flex_col.p_6.gap_8.mx_auto.items_center}>
        <Link to={routes.home}>
          <Icon name="logos/youtogether-vertical" viewBox="0 0 140 80" height="80" width="140" />
        </Link>
        <main className={tw.w_["340px"]}>{children}</main>
      </div>
    </>
  );
};
