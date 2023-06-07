export interface SpritesMap {
  logos: "youtogether-horizontal" | "youtogether-vertical";
  common: "arrow-left";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  logos: ["youtogether-horizontal", "youtogether-vertical"],
  common: ["arrow-left"],
};
