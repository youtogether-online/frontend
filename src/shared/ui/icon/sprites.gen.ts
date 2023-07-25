export interface SpritesMap {
  abstract: "check" | "cross";
  arrows: "arrow-left" | "caret-down";
  logos: "youtogether-horizontal" | "youtogether-vertical";
  objects: "gear" | "globe" | "magic-wand" | "person";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  abstract: ["check", "cross"],
  arrows: ["arrow-left", "caret-down"],
  logos: ["youtogether-horizontal", "youtogether-vertical"],
  objects: ["gear", "globe", "magic-wand", "person"],
};
