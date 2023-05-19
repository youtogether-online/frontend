import { cva, type VariantProps } from "cva";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { tw } from "typewind";

const button = cva(
  [tw.transition_colors, tw.border, tw.border_solid, tw.rounded_md, tw.cursor_pointer],
  {
    variants: {
      variant: {
        primary: [
          tw.bg_buttonPrimaryBg,
          tw.border_buttonPrimaryBorder,
          tw.text_buttonPrimaryText,
          tw.hover(tw.bg_buttonPrimaryHoverBg.border_buttonPrimaryBorder),
          tw.active(tw.border_buttonPrimaryBorder.bg_buttonPrimaryBg),
          tw.disabled(
            tw.bg_buttonPrimaryDisabledBg.text_buttonPrimaryDisabledText
              .border_buttonPrimaryDisabledBorder,
          ),
        ],
        secondary: [
          tw.bg_buttonBg,
          tw.text_buttonText,
          tw.border_buttonBorder,
          tw.hover(tw.border_buttonHoverBorder.bg_buttonHoverBg),
          tw.active(tw.bg_buttonBg.text_buttonText.border_buttonBorder),
          tw.disabled(tw.text_fgMuted),
        ],
        outline: [
          tw.bg_buttonBg,
          tw.text_buttonOutlineText,
          tw.border_buttonBorder,
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
          tw.bg_buttonBg,
          tw.border_buttonBorder,
          tw.text_buttonDangerText,
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
        sm: [tw.text_sm, tw.h_7, tw.px_2],
        md: [tw.text_md, tw.h_8, tw.px_3],
        lg: [tw.text_md, tw.h_10, tw.px_3],
      },
      disabled: {
        true: [tw.disabled(tw.pointer_events_none)],
      },
      block: {
        true: [tw.w_full],
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
      block: false,
      disabled: false,
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    children: ReactNode;
  };

export const Button = ({
  variant,
  block,
  size,
  disabled,
  leadingIcon,
  trailingIcon,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className={button({ variant, block, size, disabled })}
    >
      <span className={tw.flex.h_full.items_center.overflow_hidden.whitespace_nowrap}>
        {children}
      </span>
    </button>
  );
};
