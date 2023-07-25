import { Trans } from "@lingui/macro";

import { Button } from "@/shared/ui/button";
import { PageHead } from "@/shared/ui/pagehead";

export const SettingsAccountPage = () => {
  return (
    <>
      <PageHead variant="danger">
        <Trans>Delete Account</Trans>
      </PageHead>
      <div className="flex flex-col gap-4">
        <Button variant="danger" disabled>
          <Trans>Delete your account</Trans>
        </Button>
      </div>
    </>
  );
};
