import { CloseButton } from "./close-button";
import { Body, Content, Footer, Header, Title } from "./content";
import { InternalDialog } from "./dialog";
import { Trigger } from "./trigger";

export const Dialog = Object.assign(InternalDialog, {
  Trigger,
  Content,
  Body,
  Footer,
  Header,
  Title,
  CloseButton,
});
