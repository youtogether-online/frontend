import { cva, type VariantProps } from "cva";
import { tw } from "typewind";

import { type ButtonProps } from "./types";

export const baseButton = cva(
  [tw.transition_colors.border.border_solid.rounded_md.cursor_pointer.flex.gap_2.items_center],
  {
    variants: {
      variant: {
        primary: [
          tw.bg_buttonPrimaryBg.border_buttonPrimaryBorder.text_buttonPrimaryText,
          tw.hover(tw.bg_buttonPrimaryHoverBg.border_buttonPrimaryBorder),
          tw.active(tw.border_buttonPrimaryBorder.bg_buttonPrimaryBg),
          tw.disabled(
            tw.bg_buttonPrimaryDisabledBg.text_buttonPrimaryDisabledText
              .border_buttonPrimaryDisabledBorder,
          ),
        ],
        secondary: [
          tw.bg_buttonBg.text_buttonText.border_buttonBorder,
          tw.hover(tw.border_buttonHoverBorder.bg_buttonHoverBg),
          tw.active(tw.bg_buttonBg.text_buttonText.border_buttonBorder),
          tw.disabled(tw.text_fgMuted),
        ],
        outline: [
          tw.bg_buttonBg.text_buttonOutlineText.border_buttonBorder,
          tw.hover(
            tw.bg_buttonOutlineHoverBg.border_buttonOutlineHoverBorder.text_buttonOutlineHoverText,
          ),
          tw.active(
            tw.bg_buttonOutlineSelectedBg.text_buttonOutlineSelectedText
              .border_buttonOutlineSelectedBorder,
          ),
          tw.disabled(tw.bg_buttonOutlineDisabledBg.text_buttonOutlineDisabledText),
        ],
        danger: [
          tw.bg_buttonBg.border_buttonBorder.text_buttonDangerText,
          tw.hover(
            tw.text_buttonDangerHoverText.border_buttonDangerHoverBorder.bg_buttonDangerHoverBg,
          ),
          tw.active(
            tw.text_buttonDangerSelectedText.border_buttonDangerSelectedBorder
              .bg_buttonDangerSelectedBg,
          ),
          tw.disabled(tw.bg_buttonDangerDisabledBg.text_buttonDangerDisabledText),
        ],
        invisible: [
          tw.text_accentFg.border_none,
          tw.hover(tw.bg_buttonInvisibleHoverBg),
          tw.active(tw.bg_buttonInvisibleSelectedBg),
        ],
      },
      size: {
        sm: [tw.text_sm.h_7.px_2],
        md: [tw.text_md.h_8.px_3],
        lg: [tw.text_md.h_10.px_3],
      },
      disabled: {
        true: [tw.disabled(tw.pointer_events_none)],
      },
      block: {
        true: [tw.w_full],
      },
      alignContent: {
        center: [tw.justify_center],
        start: [tw.justify_start],
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
      block: false,
      disabled: false,
      alignContent: "center",
    },
  },
);

const buttonIcon = tw.h_full.flex.items_center;

export const BaseButton = ({
  trailingIcon,
  trailingAction,
  leadingIcon,
  icon,
  variant,
  size,
  alignContent,
  block,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={baseButton({ disabled, variant, size, alignContent, block })}
      {...props}
    >
      {icon ?? (
        <>
          {leadingIcon && <span className={buttonIcon}>{leadingIcon}</span>}
          <span className={tw.overflow_hidden.whitespace_nowrap.text_inherit}>{children}</span>
          {trailingIcon && <span className={buttonIcon}>{trailingIcon}</span>}
          {trailingAction && <span className={buttonIcon}>{trailingAction}</span>}
        </>
      )}
    </button>
  );
};
