import { cx } from "cva";
import { forwardRef, type SVGProps } from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";
import { type SpritesMap } from "./sprite.h";

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
    <svg
      focusable="false"
      ref={ref}
      aria-hidden
      viewBox={viewBox}
      className={cx(tw.select_none.fill_currentColor.w_["1em"].h_["1em"].inline_block, sx)}
      {...props}
    >
      <use xlinkHref={`/public/sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  );
});
