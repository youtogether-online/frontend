import { Form as FormPrimitive } from "@radix-ui/react-form";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { FormHTMLAttributes, forwardRef, ReactNode } from "react";

import { SxProp } from "../../types";

type FormProps = {
  asChild: boolean;
  children: ReactNode;
} & SxProp &
  FormHTMLAttributes<HTMLFormElement>;

export const InternalForm = forwardRef<HTMLFormElement, FormProps>(
  ({ asChild, children, sx }, ref) => {
    return (
      <FormPrimitive asChild={asChild} ref={ref} className={clsx(sx)}>
        {children}
      </FormPrimitive>
    );
  },
);
