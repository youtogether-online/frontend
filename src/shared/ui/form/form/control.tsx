import { FormControl, type FormControlProps } from "@radix-ui/react-form";
import { type ComponentRef, forwardRef } from "react";

type ControlProps = FormControlProps;

export const Control = forwardRef<ComponentRef<typeof FormControl>, ControlProps>(
  ({ children, ...props }, ref) => {
    return (
      <FormControl ref={ref} {...props}>
        {children}
      </FormControl>
    );
  },
);
