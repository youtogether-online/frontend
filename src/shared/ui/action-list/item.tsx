import { cva, type VariantProps } from "cva";
import {
  forwardRef,
  type KeyboardEvent,
  type LiHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { tw } from "typewind";

import { type SxProp } from "../types";

const itemVariants = cva(
  [
    tw.rounded_md.py_["6px"].px_2.mx_2
      .hover(tw.cursor_pointer)
      .text_md.aria_disabled(tw.cursor_not_allowed).text_fgDefault,
  ],
  {
    variants: {
      variant: {
        default: [tw.hover(tw.bg_actionListItemDefaultHoverBg)],
        danger: [tw.hover(tw.bg_actionListItemDangerHoverBg).text_dangerFg],
      },
      selected: {
        true: [],
      },
      active: {
        true: [],
      },
      disabled: {
        true: [],
      },
    },
    defaultVariants: {
      variant: "default",
      selected: false,
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

export const Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ sx, variant, selected, active, disabled, ...props }, ref) => {
    return (
      <li
        aria-disabled={Boolean(disabled)}
        className={itemVariants({ class: sx, variant, selected, active, disabled })}
        ref={ref}
        {...props}
      ></li>
    );
  },
);
