import { FormControl, type FormControlProps } from "@radix-ui/react-form";

type ControlProps = FormControlProps;

export const Control = ({ children, ...props }: ControlProps) => {
  return <FormControl {...props}>{children}</FormControl>;
};
