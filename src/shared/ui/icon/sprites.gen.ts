export interface SpritesMap {
  common: "arrow-left";
  logos: "youtogether-horizontal" | "youtogether-vertical";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  common: ["arrow-left"],
  logos: ["youtogether-horizontal", "youtogether-vertical"],
};
