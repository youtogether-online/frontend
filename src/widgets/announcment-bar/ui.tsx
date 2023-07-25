import { Trans } from "@lingui/macro";

export const AnnouncmentBar = () => {
  return (
    <div className="h-10 flex items-center justify-center bg-canvas-subtle">
      <p>
        👀 <Trans>This is a demo client of the service</Trans> 👀
      </p>
    </div>
  );
};
