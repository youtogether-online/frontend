import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, cx } from "cva";
import { forwardRef } from "react";

import { type ButtonProps } from "./types";

export const baseButtonVariants = cva(
  "transition-colors border border-solid rounded-md cursor-pointer flex gap-2 items-center justify-center",
  {
    variants: {
      variant: {
        primary: [
          "bg-button-primary-bg border-button-primary-border text-button-primary-text",
          "hover:(bg-button-primary-hover-bg border-button-primary-border)",
          "active:(border-button-primary-border bg-button-primary-bg)",
          "disabled:(bg-button-primary-disabled-bg text-button-primary-disabled-text border-button-primary-disabled-border)",
        ],
        secondary: [
          "bg-button-bg text-button-text border-button-border",
          "hover:(border-button-hover-border bg-button-hover-bg)",
          "active:(bg-button-bg text-button-text border-button-border)",
          "disabled:text-fg-muted",
        ],
        outline: [
          "bg-button-bg text-button-outline-text border-button-border",
          "hover:(bg-button-outline-hover-bg border-button-outline-hover-border text-button-outline-hover-text)",
          "active:(bg-button-outline-selected-bg text-button-outline-selected-text border-button-outline-selected-border)",
          "disabled:(bg-button-outline-disabled-bg text-button-outline-disabled-text)",
        ],
        danger: [
          "bg-button-bg border-button-border text-button-danger-text",
          "hover:(text-button-danger-hover-text border-button-danger-hover-border bg-button-danger-hover-bg)",
          "active:(text-button-danger-telected-text border-button-danger-selected-border bg-button-danger-selected-bg)",
          "disabled:(bg-button-danger-disabled-bg text-button-danger-disabled-text)",
        ],
        invisible: [
          "text-accent-fg border-transparent",
          "hover:bg-button-invisible-hover-bg",
          "active:bg-button-invisible-selected-bg",
        ],
      },
      disabled: {
        true: "disabled:pointer-events-none",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "secondary",
      disabled: false,
    },
  },
);

const buttonIcon = "h-full flex items-center h-4 w-4";

export const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      trailingIcon,
      trailingAction,
      leadingIcon,
      icon,
      variant,
      size,
      disabled,
      block,
      children,
      sx,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        disabled={disabled}
        className={cx(baseButtonVariants({ disabled, variant, block }), sx)}
        ref={ref}
        {...props}
      >
        {leadingIcon && <span className={buttonIcon}>{leadingIcon}</span>}
        <Slottable>{icon ? <span className="h-4 w-4">{icon}</span> : children}</Slottable>
        {trailingIcon && <span className={buttonIcon}>{trailingIcon}</span>}
        {trailingAction && <span className={buttonIcon}>{trailingAction}</span>}
      </Component>
    );
  },
);
