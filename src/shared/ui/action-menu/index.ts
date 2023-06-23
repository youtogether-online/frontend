import { InternalActionMenu } from "./action-menu";
import { Content } from "./content";
import { Portal } from "./portal";
import { Trigger } from "./trigger";

export const ActionMenu = Object.assign(InternalActionMenu, { Trigger, Portal, Content });
