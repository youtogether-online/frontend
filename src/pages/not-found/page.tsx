import { BaseLayout } from "@/layouts";
import { Trans } from "@lingui/macro";
import { useUnit } from "effector-react";
import { tw } from "typewind";

import { Blankslate } from "@/shared/ui/blankslate";
import { Button } from "@/shared/ui/button";

import { goHomeClicked } from "./model";

export const NotFoundPage = () => {
  const goHome = useUnit(goHomeClicked);

  const handleGoHome = () => {
    goHome();
  };

  return (
    <BaseLayout>
      <section className={tw.flex.justify_center.items_center}>
        <Blankslate>
          <Blankslate.Heading>
            <Trans>Page Not Found</Trans>
          </Blankslate.Heading>
          <Blankslate.Action>
            <Button variant="primary" onClick={handleGoHome}>
              <Trans>Go home</Trans>
            </Button>
          </Blankslate.Action>
        </Blankslate>
      </section>
    </BaseLayout>
  );
};
