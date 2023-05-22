import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import { type AnchorHTMLAttributes, forwardRef, type ReactNode } from "react";
import { tw } from "typewind";

const link = cva([tw.text_accentFg, tw.hover(tw.underline)], {
  variants: {
    muted: {
      true: [tw.text_fgMuted, tw.hover(tw.no_underline.text_accentFg)],
    },
    underline: {
      true: [tw.underline],
    },
  },
});

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    children: ReactNode;
    asChild?: boolean;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, asChild, underline, muted, ...props }, ref) => {
    const Component = asChild ? Slot : "a";

    return (
      <Component ref={ref} {...props} className={link({ muted, underline })}>
        {children}
      </Component>
    );
  },
);
