import { cva, cx, type VariantProps } from "cva";
import {
  type FC,
  forwardRef,
  Fragment,
  type KeyboardEvent,
  type LiHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

import { useSlots } from "@/shared/lib/use-slot";

import { type SxProp } from "../types";
import { Description } from "./description";
import { LeadingVisual } from "./leading-visual";
import { TrailingVisual } from "./trailing-visual";

export const itemVariants = cva(
  "rounded-md py-[6px] px-2 relative flex hover:cursor-pointer text-md aria-disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "hover:bg-action-list-item-default-hover-bg active:bg-action-list-item-default-active-bg text-fg-default",
        danger:
          "hover:bg-action-list-item-danger-hover-bg active:bg-action-list-item-danger-active-bg text-danger-fg",
      },
      active: {
        true: "font-bold before:(content-[''] bg-accent-fg rounded-md h-6 absolute w-1 top-[calc(50%-12px)] left-[calc(0.5rem*-1)] )",
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

export type ItemProps = {
  children: ReactNode;
  onSelect?: (event: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => void;
  asChild?: boolean;
  _PrivateItemWrapper?: FC<{ children: ReactNode }>;
} & SxProp &
  VariantProps<typeof itemVariants> &
  LiHTMLAttributes<HTMLLIElement>;

export const Item = forwardRef<HTMLLIElement, ItemProps>(
  (
    { sx, variant, active, onSelect, disabled, children, asChild, _PrivateItemWrapper, ...props },
    ref,
  ) => {
    const [slots, childrenWithoutSlots] = useSlots(children, {
      leadingVisual: LeadingVisual,
      trailingVisual: TrailingVisual,
      description: Description,
    });

    const ItemWrapper = _PrivateItemWrapper ?? Fragment;

    return (
      <li
        aria-disabled={Boolean(disabled)}
        className={cx(itemVariants({ variant, active, disabled }), sx)}
        ref={ref}
        onClick={onSelect}
        {...props}
      >
        <ItemWrapper>
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
        </ItemWrapper>
      </li>
    );
  },
);
