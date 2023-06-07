import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { Title } from "@/shared/ui/typography/title";

import { type SxProp } from "../types";

type HeadingProps = {
  children: ReactNode;
} & SxProp;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, sx }, ref) => {
  return (
    <Title sx={clsx(tw.font_bold, sx)} order={5} ref={ref}>
      {children}
    </Title>
  );
});
