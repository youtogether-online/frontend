import { Slot } from "@radix-ui/react-slot";
import { type ReactNode } from "react";

import { type SxProp } from "../../types";

type TextProps = {
  asChild?: boolean;
  children: ReactNode;
} & SxProp;

export const Text = ({ asChild, children, sx }: TextProps) => {
  const Component = asChild ? Slot : "p";

  return <Component className={sx}>{children}</Component>;
};
