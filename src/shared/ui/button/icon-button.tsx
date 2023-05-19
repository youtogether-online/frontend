import { BaseButton } from "./base-button";
import { type IconButtonProps } from "./types";

export const IconButton = ({ ...props }: IconButtonProps) => {
  return <BaseButton {...props} />;
};
