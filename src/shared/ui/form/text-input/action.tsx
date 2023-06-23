import { cx } from "cva";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { tw } from "typewind";

import { Icon, type SpriteKey } from "../../icon";
import { type SxProp } from "../../types";

type ActionProps = {
  icon: SpriteKey;
} & SxProp &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Action = forwardRef<HTMLButtonElement, ActionProps>(({ icon, sx, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={cx(
        tw.rounded_sm.h_5.w_6.flex.items_center.justify_center.hover(tw.bg_canvasSubtle),
        sx,
      )}
    >
      <Icon name={icon} width="16px" height="16px"></Icon>
    </button>
  );
});
