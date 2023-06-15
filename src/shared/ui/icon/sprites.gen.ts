export interface SpritesMap {
  abstract: "cross";
  logos: "youtogether-horizontal" | "youtogether-vertical";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  abstract: ["cross"],
  logos: ["youtogether-horizontal", "youtogether-vertical"],
};
