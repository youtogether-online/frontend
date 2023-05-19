import { ButtonProps } from "./button.type";
import { BaseButton } from "./base-button";

export const Button = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      {...props}
    >
      {children}
    </BaseButton>
  );
};
