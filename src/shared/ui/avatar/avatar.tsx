import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";

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
};

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ src, alt, square, fallback, size, ...props }, ref) => {
    return (
      <AvatarPrimitive.Root
        className={avatar({ square })}
        style={{ width: size, height: size }}
        {...props}
      >
        <AvatarPrimitive.Image
          src={src}
          alt={alt}
          ref={ref}
          className={"w-full h-full object-cover block"}
        />
        <AvatarPrimitive.Fallback
          delayMs={1000}
          className={"flex justify-center items-center h-full bg-fg-subtle"}
        >
          {fallback}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    );
  },
);
