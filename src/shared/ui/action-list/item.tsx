import { cva, type VariantProps } from "cva";
import {
  forwardRef,
  type KeyboardEvent,
  type LiHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

import { type SxProp } from "../types";

const itemVariants = cva([], {
  variants: {
    variant: {
      default: {},
      danger: {},
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
});

type ItemProps = {
  children: ReactNode;
  onSelect: (event: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => void;
} & SxProp &
  VariantProps<typeof itemVariants> &
  LiHTMLAttributes<HTMLLIElement>;

export const Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ sx, variant, selected, active, disabled, ...props }, ref) => {
    return (
      <li
        className={itemVariants({ class: sx, variant, selected, active, disabled })}
        ref={ref}
        {...props}
      ></li>
    );
  },
);
