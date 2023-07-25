import { InternalActionMenu } from "./action-menu";
import { Arrow } from "./arrow";
import { Content } from "./content";
import { Item } from "./item";
import { Link } from "./link";
import { Portal } from "./portal";
import { Trigger } from "./trigger";

export const ActionMenu = Object.assign(InternalActionMenu, {
  Trigger,
  Portal,
  Content,
  Item,
  Arrow,
  Link,
});
