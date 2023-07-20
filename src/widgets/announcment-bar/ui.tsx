import { Trans } from "@lingui/macro";

import { Text } from "@/shared/ui/typography";

export const AnnouncmentBar = () => {
  return (
    <div className="h-10 flex items-center justify-center bg-canvas-subtle">
      <Text>
        👀 <Trans>This is a demo client of the service</Trans> 👀
      </Text>
    </div>
  );
};
