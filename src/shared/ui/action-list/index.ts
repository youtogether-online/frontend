import { InternalActionList } from "./action-list";
import { Description } from "./description";
import { Group } from "./group";
import { Item } from "./item";
import { ItemLink } from "./item-link";
import { LeadingVisual } from "./leading-visual";
import { TrailingVisual } from "./trailing-visual";

export const ActionList = Object.assign(InternalActionList, {
  Description,
  Group,
  ItemLink,
  Item,
  LeadingVisual,
  TrailingVisual,
});
