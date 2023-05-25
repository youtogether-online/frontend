import { cva, type VariantProps } from "cva";
import {
  type ComponentType,
  forwardRef,
  type HTMLProps,
  type InputHTMLAttributes,
  type ReactElement,
  ReactNode,
} from "react";
import { tw } from "typewind";

import { type SxProp } from "../../types";
import clsx from "clsx";
import { Icon } from "../../icon";

const textVariants = cva(
  [
    tw.text_md.shadow_sm.inline_flex.bg_canvasInset.border_borderDefault.border.rounded_md
      .text_fgDefault.px_3.py_1.block.items_center.px_2.w_["440px"],
    tw.focus_within(tw.outline_none.border.border_accentFg.shadow_sm)
  ],
  {
    variants: {
      validationStatus: {
        success: [tw.border_successEmphasis],
        error: [tw.border_dangerEmphasis],
        warning: [tw.border_attentionEmphasis],
      },
      size: {
        sm: [tw.min_h_["28px"]],
        md: [tw.min_h_["32px"]],
        lg: [tw.min_h_["32px"].h_10],
      },
      block: {
        true: [tw.w_full]
      },
      disabled: {
        true: [tw.bg_inputDisabledBg]
      }
    },
    defaultVariants: {
      size: "md",
      block: false
    }
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

const icon = tw.self_center.shrink_0.flex.items_center

export const InternalTextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ size, validationStatus, loading, block, leadingVisual, trailingAction, trailingVisual, ...props }, ref) => {
    return (
      <span className={clsx(textVariants({ size, validationStatus, block }))}>
        {leadingVisual && <span className={icon}>{leadingVisual}</span>}
        <input className={tw.bg_transparent.border_0.text_inherit.w_full.px_2.focus(tw.outline_0).focus_visible(tw.outline_0)} {...props} ref={ref} />
        {trailingVisual && <span className={icon}>{trailingVisual}</span>}
        {trailingAction && loading && <Icon sx={tw.animate_spin} name="common/loader" />}
        {trailingAction && !loading && <span className={icon}>{trailingAction}</span>}
      </span>
    );
  },
);
