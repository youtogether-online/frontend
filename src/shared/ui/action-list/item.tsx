import { cva, cx, type VariantProps } from "cva";
import {
  forwardRef,
  type KeyboardEvent,
  type LiHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createSlot } from "react-slotify";
import { tw } from "typewind";

import { useSlots } from "@/shared/lib/use-slot";

import { type SxProp } from "../types";
import { Description } from "./description";
import { LeadingVisual } from "./leading-visual";
import { TrailingVisual } from "./trailing-visual";

const itemVariants = cva(
  [
    tw.rounded_md.py_["6px"].px_2.mx_2.relative.flex
      .hover(tw.cursor_pointer)
      .text_md.aria_disabled(tw.cursor_not_allowed),
  ],
  {
    variants: {
      variant: {
        default: [
          tw.hover(tw.bg_actionListItemDefaultHoverBg).active(tw.bg_actionListItemDefaultActiveBg)
            .text_fgDefault,
        ],
        danger: [
          tw.hover(tw.bg_actionListItemDangerHoverBg).active(tw.bg_actionListItemDangerActiveBg)
            .text_dangerFg,
        ],
      },
      active: {
        true: [
          tw.before(
            tw.content_[" "].bg_accentFg.rounded_md.h_6.absolute.w_1.top_["calc(50%-12px)"].left_[
              "calc(0.5rem*-1)"
            ],
          ),
        ],
      },
      disabled: {
        true: [
          tw.cursor_not_allowed.text_fgMuted.hover(tw.bg_transparent).active(tw.bg_transparent),
        ],
      },
    },
    compoundVariants: [
      {
        active: true,
        variant: "default",
        class: tw.bg_actionListItemDefaultSelectedBg.active(tw.bg_actionListItemDefaultSelectedBg),
      },
      {
        active: true,
        variant: "danger",
        class: tw.bg_actionListItemDangerSelectedBg.active(tw.bg_actionListItemDangerSelectedBg),
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
        <div className={cx(slots.description?.props.variant === "block" && tw.flex_col, tw.flex)}>
          {childrenWithoutSlots}
          {slots.description}
        </div>
        {slots.trailingVisual}
      </li>
    );
  },
);
