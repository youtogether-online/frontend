import { Form, type FormProps } from "@radix-ui/react-form";
import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";

import { type SxProp } from "../../types";

type InternalFormProps = {
  asChild: boolean;
  children: ReactNode;
} & SxProp &
  FormProps;

export const InternalForm = forwardRef<HTMLFormElement, InternalFormProps>(
  ({ children, sx, ...props }, ref) => {
    return (
      <Form ref={ref} className={clsx(sx)} {...props}>
        {children}
      </Form>
    );
  },
);
