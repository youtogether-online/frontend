import { Trans } from "@lingui/macro";
import { tw } from "typewind";

import { Text } from "@/shared/ui/typography";

export const AnnouncmentBar = () => {
  return (
    <div className={tw.h_10.bg_canvasSubtle.flex.items_center.justify_center}>
      <Text>
        👀 <Trans>This is a demo client of the service</Trans> 👀
      </Text>
    </div>
  );
};
