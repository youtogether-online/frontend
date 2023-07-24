import {
  SelectItem,
  SelectItemIndicator,
  type SelectItemProps,
  SelectItemText,
} from "@radix-ui/react-select";
import { cx } from "cva";
import { type ElementRef, forwardRef } from "react";

import { Icon } from "../icon";

type ItemProps = SelectItemProps;

export const Item = forwardRef<ElementRef<typeof SelectItem>, ItemProps>(
  ({ className, children, ...props }, ref) => (
    <SelectItem
      ref={ref}
      className={cx(
        "py-2 pl-2 pr-8 cursor-default w-full flex relative select-none items-center outline-none rounded-sm focus:bg-accent-emphasis focus:text-fg-default",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 h-3.5 w-3.5 flex items-center justify-center">
        <SelectItemIndicator>
          <Icon name="abstract/check" sx="h-4 w-4" />
        </SelectItemIndicator>
      </span>

      <SelectItemText>{children}</SelectItemText>
    </SelectItem>
  ),
);
