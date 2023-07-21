import { type VariantProps } from "cva";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { type SxProp } from "../types";
import { type baseButtonVariants } from "./base-button";
import { type buttonVariants } from "./button";
import { type iconButtonVariants } from "./icon-button";

export type BaseButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  SxProp &
  VariantProps<typeof baseButtonVariants>;

export type ButtonProps = {
  trailingIcon?: ReactNode;
  trailingAction?: ReactNode;
  leadingIcon?: ReactNode;
  icon?: ReactNode;
} & BaseButtonProps &
  VariantProps<typeof buttonVariants>;

export type IconButtonProps = {
  icon: ReactNode;
} & BaseButtonProps &
  VariantProps<typeof iconButtonVariants>;
