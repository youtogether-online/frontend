import { cx } from "cva";
import { type ButtonHTMLAttributes, forwardRef } from "react";

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
        "rounded-sm h-5 w-6 flex items-center justify-center hover:bg-canvas-subtle",
        sx,
      )}
    >
      <Icon name={icon} width="16px" height="16px"></Icon>
    </button>
  );
});
