import {
  SelectIcon,
  SelectTrigger,
  type SelectTriggerProps,
  SelectValue,
} from "@radix-ui/react-select";
import { cx } from "cva";
import { forwardRef } from "react";

import { Icon } from "../icon";

type TriggerProps = SelectTriggerProps;

export const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ placeholder, className }, ref) => {
    return (
      <SelectTrigger
        ref={ref}
        className={cx(
          "h-8 px-4 bg-canvas-inset w-full max-w-full border border-border-default rounded-md flex items-center justify-center text-md",
          className,
        )}
      >
        <SelectValue placeholder={placeholder} />
        <SelectIcon asChild>
          <Icon name="arrows/caret-down" sx="h-5 w-5 ml-auto" />
        </SelectIcon>
      </SelectTrigger>
    );
  },
);
