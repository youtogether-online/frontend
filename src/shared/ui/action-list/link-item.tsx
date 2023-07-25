import { Link, type LinkProps } from "atomic-router-react";
import { cx } from "cva";
import { forwardRef } from "react";

import { Item, type ItemProps } from "./item";

export type LinkItemProps = Pick<ItemProps, "active" | "children" | "sx"> & LinkProps<any>;

export const LinkItem = forwardRef<HTMLAnchorElement, LinkItemProps>(
  ({ sx, active, ...props }, ref) => {
    return (
      <Item
        active={active}
        sx="p-0!"
        _PrivateItemWrapper={({ children, ...rest }) => {
          return (
            <Link
              {...rest}
              {...props}
              ref={ref}
              className={cx(
                "text-inherit hover:(text-inherit decoration-none) flex px-2 py-[6px] flex-grow",
                sx,
              )}
            >
              {children}
            </Link>
          );
        }}
      >
        {props.children}
      </Item>
    );
  },
);
