import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import { type AnchorHTMLAttributes, forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

const link = cva([tw.text_accentFg], {
  variants: {},
});

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    children: ReactNode;
    asChild?: boolean;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "a";

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);
