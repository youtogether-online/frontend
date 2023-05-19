import { type VariantProps } from "cva";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { type baseButton } from "./base-button";

export type BaseButtonProps = VariantProps<typeof baseButton> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  trailingIcon?: ReactNode;
  trailingAction?: ReactNode;
  leadingIcon?: ReactNode;
  icon?: ReactNode;
} & BaseButtonProps;

export type IconButtonProps = {
  icon: ReactNode;
} & BaseButtonProps;
