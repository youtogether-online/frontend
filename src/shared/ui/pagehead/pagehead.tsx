import { cva, cx, type VariantProps } from "cva";
import { type ReactNode } from "react";

import { type SxProp } from "../types";

const pageHeadVariants = cva("", {
  variants: {
    variant: {
      default: ["text-fg-default"],
      danger: ["text-danger-fg"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type PageHeadProps = {
  children: ReactNode;
} & SxProp &
  VariantProps<typeof pageHeadVariants>;

export const PageHead = ({ children, sx, variant }: PageHeadProps) => {
  return (
    <div
      className={cx(
        "mb-4 flex flex-1 border-b border-border-muted pb-2",
        pageHeadVariants({ variant }),
        sx,
      )}
    >
      <h2 className="text-2xl font-400">{children}</h2>
    </div>
  );
};
