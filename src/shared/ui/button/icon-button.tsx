import { forwardRef } from "react";

import { BaseButton } from "./base-button";
import { type IconButtonProps } from "./types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ ...props }, ref) => {
  return <BaseButton ref={ref} sx="text-fg-default w-8 px-none" {...props} />;
});
