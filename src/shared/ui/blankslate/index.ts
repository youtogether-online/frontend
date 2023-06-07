import { Action } from "./action";
import { InternalBlankslate } from "./blankslate";
import { Description } from "./description";
import { Heading } from "./heading";
import { Image } from "./image";

export const Blankslate = Object.assign(InternalBlankslate, {
  Heading,
  Action,
  Description,
  Image,
});
