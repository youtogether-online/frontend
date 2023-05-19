import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "cva";
import { tw } from "typewind";

const avatar = cva([tw.rounded_lg.block.overflow_hidden], {
  variants: {
    square: {
      true: [tw.rounded_sm],
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

export const Avatar = ({ src, alt, square, fallback, size }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root className={avatar({ square })} style={{ width: size, height: size }}>
      <AvatarPrimitive.Image src={src} alt={alt} className={tw.w_full.h_full.object_cover.block} />
      <AvatarPrimitive.Fallback
        delayMs={1000}
        className={tw.flex.justify_center.items_center.h_full.bg_fgSubtle}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
