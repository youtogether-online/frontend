import { InternalActionList } from "./action-list";
import { Description } from "./description";
import { Divider } from "./divider";
import { Group } from "./group";
import { Item } from "./item";
import { LeadingVisual } from "./leading-visual";
import { TrailingVisual } from "./trailing-visual";

export const ActionList = Object.assign(InternalActionList, {
  Description,
  Group,
  Item,
  LeadingVisual,
  Divider,
  TrailingVisual,
});
