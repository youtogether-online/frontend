export interface SpritesMap {
  common:
    | "arrowLeft"
    | "bookmark"
    | "cross"
    | "exit"
    | "eye-none"
    | "eye-open"
    | "globe"
    | "key"
    | "laptop"
    | "loader"
    | "mail"
    | "moon"
    | "person"
    | "persons"
    | "search"
    | "sun";
  logos: "youtogether-horizontal" | "youtogether-vertical";
}

export const SPRITES_META: { [K in keyof SpritesMap]: Array<SpritesMap[K]> } = {
  common: [
    "arrowLeft",
    "bookmark",
    "cross",
    "exit",
    "eye-none",
    "eye-open",
    "globe",
    "key",
    "laptop",
    "loader",
    "mail",
    "moon",
    "person",
    "persons",
    "search",
    "sun",
  ],
  logos: ["youtogether-horizontal", "youtogether-vertical"],
};
