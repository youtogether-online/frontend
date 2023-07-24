import { Content } from "./content";
import { Group } from "./group";
import { Item } from "./item";
import { Label } from "./label";
import { InternalSelect } from "./select";
import { Separator } from "./separator";
import { Trigger } from "./trigger";
import { Value } from "./value";

export const Select = Object.assign(InternalSelect, {
  Trigger,
  Value,
  Content,
  Item,
  Group,
  Label,
  Separator,
});
