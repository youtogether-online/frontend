import { type SVGProps } from "react";
import { tw } from "typewind";

import { type SpritesMap } from "./sprite.h";

type SpriteKey = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`;
}[keyof SpritesMap];

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: SpriteKey;
}

export const Icon = ({ name, className, viewBox, ...props }: IconProps) => {
  const [spriteName, iconName] = name.split("/");

  return (
    <svg
      focusable="false"
      aria-hidden
      viewBox={viewBox}
      className={tw.select_none.fill_currentColor.w_["1em"].h_["1em"].inline_block}
      {...props}
    >
      <use xlinkHref={`/public/sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  );
};
