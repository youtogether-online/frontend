import { cva, cx, type VariantProps } from "cva";
import {
  forwardRef,
  type KeyboardEvent,
  type LiHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createSlot } from "react-slotify";

import { useSlots } from "@/shared/lib/use-slot";

import { type SxProp } from "../types";
import { Description } from "./description";
import { LeadingVisual } from "./leading-visual";
import { TrailingVisual } from "./trailing-visual";

const itemVariants = cva(
  [
    "rounded-md py-[6px] px-2 mx-2 relative flex hover:cursor-pointer text-md aria-disabled:cursor-not-allowed",
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

type ItemProps = {
  children: ReactNode;
  onSelect?: (event: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => void;
} & SxProp &
  VariantProps<typeof itemVariants> &
  LiHTMLAttributes<HTMLLIElement>;

export const TrailingVisualSlot = createSlot();

export const Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ sx, variant, active, onSelect, disabled, children, ...props }, ref) => {
    const [slots, childrenWithoutSlots] = useSlots(children, {
      leadingVisual: LeadingVisual,
      trailingVisual: TrailingVisual,
      description: Description,
    });

    return (
      <li
        aria-disabled={Boolean(disabled)}
        className={itemVariants({ class: sx, variant, active, disabled })}
        ref={ref}
        onClick={onSelect}
        {...props}
      >
        {slots.leadingVisual}
        <div
          className={cx(
            (slots.description?.props.variant === "block" && "flex-col items-start") ||
              "items-center",
            "flex",
          )}
        >
          {childrenWithoutSlots}
          {slots.description}
        </div>
        {slots.trailingVisual}
      </li>
    );
  },
);
