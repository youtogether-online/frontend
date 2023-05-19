import { BaseButton } from "./base-button";
import { IconButtonProps } from "./button.type";

export const IconButton = ({...props}: IconButtonProps) => {
  return <BaseButton {...props} />
};
