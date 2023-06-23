import { Slot } from "@radix-ui/react-slot";
import { type LinkProps } from "atomic-router-react";
import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";

import { NavLink } from "../nav-link";
import { type SxProp } from "../types";

const itemLinkVariants = cva([], {
  variants: {
    active: {
      true: [],
    },
  },
});

type ItemLinkProps = {
  asChild: boolean;
} & SxProp &
  LinkProps<any> &
  VariantProps<typeof itemLinkVariants>;

export const ItemLink = forwardRef<HTMLAnchorElement, ItemLinkProps>(
  ({ asChild, sx, active, children, ...props }, ref) => {
    const Component = asChild ? Slot : NavLink;

    return (
      <Component className={itemLinkVariants({ class: sx, active })} ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);
