import { type VariantProps } from "cva";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { type SxProp } from "../types";
import { type baseButton } from "./base-button";

export type BaseButtonProps = VariantProps<typeof baseButton> & {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  SxProp;

export type ButtonProps = {
  trailingIcon?: ReactNode;
  trailingAction?: ReactNode;
  leadingIcon?: ReactNode;
  icon?: ReactNode;
} & BaseButtonProps;

export type IconButtonProps = {
  icon: ReactNode;
} & BaseButtonProps;
