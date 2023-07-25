import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";

import { type SxProp } from "../types";

const avatar = cva("rounded-lg block overflow-hidden", {
  variants: {
    square: {
      true: "rounded-sm",
    },
  },
  defaultVariants: {
    square: false,
  },
});

type AvatarProps = VariantProps<typeof avatar> & {
  alt: string;
  src: string;
  fallback: string;
  fallbackColor: string;
  size?: number;
} & SxProp;

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ src, alt, square, fallback, size, sx, ...props }, ref) => {
    return (
      <AvatarPrimitive.Root
        className={avatar({ square, class: sx })}
        style={{ width: size, height: size }}
        {...props}
      >
        <AvatarPrimitive.Image
          src={src}
          alt={alt}
          ref={ref}
          className="block h-full w-full object-cover"
        />
        <AvatarPrimitive.Fallback
          delayMs={1000}
          className="h-full flex items-center justify-center bg-fg-subtle"
        >
          {fallback}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    );
  },
);
