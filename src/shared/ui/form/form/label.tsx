import { Label as LabelPrimitive } from "@radix-ui/react-form";
import clsx from "clsx";
import { forwardRef, type LabelHTMLAttributes, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../../types";

type LabelProps = {
  asChild?: boolean;
  children: ReactNode;
  required?: boolean;
} & SxProp &
  LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ asChild, children, required, sx }, ref) => {
    return (
      <LabelPrimitive className={clsx(tw.text_md.font_bold, sx)} asChild={asChild} ref={ref}>
        {children}
        <span>{required && "*"}</span>
      </LabelPrimitive>
    );
  },
);
