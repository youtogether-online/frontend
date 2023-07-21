import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { cx } from "cva";
import { forwardRef, type SVGProps } from "react";

import { type SxProp } from "../types";
import { type SpritesMap } from "./sprites.gen";

export type SpriteKey = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`;
}[keyof SpritesMap];

type IconProps = {
  name: SpriteKey;
} & SxProp &
  Omit<SVGProps<SVGSVGElement>, "name" | "type">;

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ name, viewBox, sx, ...props }, ref) => {
  const [spriteName, iconName] = name.split("/");

  return (
    <AccessibleIcon.Root label={iconName}>
      <svg
        focusable="false"
        ref={ref}
        aria-hidden
        viewBox={viewBox}
        {...props}
        className={cx("select-none inline-block text-inherit w-4 h-4", sx)}
      >
        <use xlinkHref={`/sprites/${spriteName}.svg#${iconName}`} />
      </svg>
    </AccessibleIcon.Root>
  );
});
