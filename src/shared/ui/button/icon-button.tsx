import { forwardRef } from "react";
import { tw } from "typewind";

import { BaseButton } from "./base-button";
import { type IconButtonProps } from "./types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ ...props }, ref) => {
  return <BaseButton ref={ref} sx={tw.text_fgDefault} {...props} />;
});
