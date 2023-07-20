import { cva, type VariantProps } from "cva";
import {
  forwardRef,
  type HTMLProps,
  type InputHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import { Icon } from "../../icon";
import { type SxProp } from "../../types";

const textVariants = cva(
  [
    "text-md shadow-sm inline-flex bg-canvas-inset border-border-default border rounded-md text-fg-default px-3 py-1 block items-center px-2 w-[440px]",
    "focus-within:(outline-none border border-accent-fg shadow-sm)",
  ],
  {
    variants: {
      validationStatus: {
        success: "border-success-emphasis",
        error: "border-danger-emphasis",
        warning: "border-attention-emphasis",
      },
      size: {
        sm: "min-h-[28px]",
        md: "min-h-[32px]",
        lg: "min-h-[32px] h-10",
      },
      block: {
        true: "w-full",
      },
      disabled: {
        true: "bg-input-disabled-bg",
      },
    },
    defaultVariants: {
      size: "md",
      block: false,
    },
  },
);

type TextInputProps = {
  block?: boolean;
  loading?: boolean;
  leadingVisual?: ReactNode;
  trailingVisual?: ReactNode;
  trailingAction?: ReactElement<HTMLProps<HTMLButtonElement>>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  SxProp &
  VariantProps<typeof textVariants>;

const icon = "self-center shrink-0 flex items-center";

export const InternalTextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      size,
      validationStatus,
      loading,
      block,
      leadingVisual,
      trailingAction,
      trailingVisual,
      sx,
      ...props
    },
    ref,
  ) => {
    return (
      <span className={textVariants({ size, validationStatus, block, class: sx })}>
        {leadingVisual && <span className={icon}>{leadingVisual}</span>}
        <input
          className="w-full border-0 bg-transparent px-1 text-inherit focus-visible:outline-0 focus:outline-0"
          {...props}
          ref={ref}
        />
        {trailingVisual && <span className={icon}>{trailingVisual}</span>}
        {trailingAction && loading && <Icon sx="animate-spin" name="logos/youtogether-vertical" />}
        {trailingAction && !loading && <span className={icon}>{trailingAction}</span>}
      </span>
    );
  },
);
