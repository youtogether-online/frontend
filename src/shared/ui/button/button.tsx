import { BaseButton } from "./base-button";
import { type ButtonProps } from "./types";

export const Button = ({ children, ...props }: ButtonProps) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};
