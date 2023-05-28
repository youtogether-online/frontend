import * as Form from "@radix-ui/react-form";
import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

import { type SxProp } from "../../types";

type FieldProps = {
  children: ReactNode;
  name: string;
} & SxProp;

export const Field = forwardRef<HTMLDivElement, FieldProps>(({ children, name, sx }, ref) => {
  return (
    <Form.Field
      name={name}
      className={clsx(tw.flex.flex_col.gap_["0.5"].justify_between.items_baseline, sx)}
      ref={ref}
    >
      {children}
    </Form.Field>
  );
});
