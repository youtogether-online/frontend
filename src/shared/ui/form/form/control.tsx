import { FormControl, type FormControlProps } from "@radix-ui/react-form";
import { type ReactNode } from "react";

type ControlProps = FormControlProps & {
  children: ReactNode;
};

export const Control = ({ children, ...props }: ControlProps) => {
  return <FormControl {...props}>{children}</FormControl>;
};
