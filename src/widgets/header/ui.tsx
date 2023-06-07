import { Link } from "atomic-router-react";
import { tw } from "typewind";

import { routes } from "@/shared/routing";
import { Icon } from "@/shared/ui/icon";

export const Header = () => {
  return (
    <header className={tw.h_16.flex.p_4.text_headerText.bg_headerBg.items_center.flex_nowrap}>
      <Link to={routes.home}>
        <Icon name="logos/youtogether-horizontal" sx={tw.h_8.w_40.text_fgDefault} />
      </Link>
    </header>
  );
};
