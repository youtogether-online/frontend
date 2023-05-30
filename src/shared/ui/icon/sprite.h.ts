export interface SpritesMap {
  common:
    | "arrowLeft"
    | "bookmark"
    | "cross"
    | "exit"
    | "eye-none"
    | "eye-open"
    | "globe"
    | "horizontal-logo"
    | "key"
    | "laptop"
    | "loader"
    | "mail"
    | "moon"
    | "person"
    | "persons"
    | "search"
    | "sun"
    | "vertical-logo";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  common: [
    "arrowLeft",
    "bookmark",
    "cross",
    "exit",
    "eye-none",
    "eye-open",
    "globe",
    "horizontal-logo",
    "key",
    "laptop",
    "loader",
    "mail",
    "moon",
    "person",
    "persons",
    "search",
    "sun",
    "vertical-logo",
  ],
};
