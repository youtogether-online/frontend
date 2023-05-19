import { cva, type VariantProps } from "cva";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { tw } from "typewind";

const button = cva(
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

const icon = tw.h_full.flex.items_center;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    LeadingIcon?: ReactNode;
    TrailingIcon?: ReactNode;
    TrailingAction?: ReactNode;
    children: ReactNode;
  };

export const Button = ({
  variant,
  block,
  size,
  disabled,
  LeadingIcon,
  TrailingIcon,
  alignContent,
  TrailingAction,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className={button({ variant, block, size, disabled, alignContent })}
    >
      {LeadingIcon && <span className={icon}>{LeadingIcon}</span>}
      <span className={tw.overflow_hidden.whitespace_nowrap.text_inherit}>{children}</span>
      {TrailingIcon && <span className={icon}>{TrailingIcon}</span>}
      {TrailingAction && <span className={icon}>{TrailingAction}</span>}
    </button>
  );
};
