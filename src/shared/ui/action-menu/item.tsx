import { DropdownMenuItem, type DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";

import { type SxProp } from "../types";

export const itemVariants = cva(
  [
    "rounded-md py-[6px] px-2 mx-2 relative flex hover:cursor-pointer text-md aria-disabled:cursor-not-allowed",
    "data-[highlighted]:bg-action-list-item-default-selected-bg",
  ],
  {
    variants: {
      variant: {
        default:
          "hover:bg-action-list-item-default-hover-bg active:bg-action-list-item-default-active-bg text-fg-default",
        danger:
          "hover:bg-action-list-item-danger-hover-bg active:bg-action-list-item-danger-active-bg text-danger-fg",
      },
      active: {
        true: "before:(content-[''] bg-accent-fg rounded-md h-6 absolute w-1 top-[calc(50%-12px)] left-[calc(0.5rem*-1)] )",
      },
      disabled: {
        true: "cursor-not-allowed text-fg-muted hover:bg-transparent active:bg-transparent",
      },
    },
    compoundVariants: [
      {
        active: true,
        variant: "default",
        class:
          "bg-action-list-item-default-selected-bg active:bg-action-list-item-default-selected-bg",
      },
      {
        active: true,
        variant: "danger",
        class:
          "bg-action-list-item-danger-selected-bg active:bg-action-list-item-danger-selected-bg",
      },
    ],
    defaultVariants: {
      variant: "default",
      active: false,
      disabled: false,
    },
  },
);

type ItemProps = DropdownMenuItemProps & SxProp & VariantProps<typeof itemVariants>;

export const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, variant, active, disabled, sx, ...props }, ref) => {
    return (
      <DropdownMenuItem
        className={itemVariants({ variant, active, disabled, class: sx })}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </DropdownMenuItem>
    );
  },
);
