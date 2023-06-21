export interface SpritesMap {
  abstract: "cross";
  arrows: "arrow-left";
  logos: "youtogether-horizontal" | "youtogether-vertical";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  abstract: ["cross"],
  arrows: ["arrow-left"],
  logos: ["youtogether-horizontal", "youtogether-vertical"],
};
