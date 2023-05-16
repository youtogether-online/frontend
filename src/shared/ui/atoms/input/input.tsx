import { type InputHTMLAttributes, type ReactNode } from "react";

import { styled } from "@/shared/config/stitches/stitches.config";

export type InternalInputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  prefix?: ReactNode;
  postfix?: ReactNode;
};

export const InternalInput = ({
  invalid = false,
  prefix,
  postfix,
  ...inputProps
}: InternalInputProps) => {
  return (
    <Root invalid={invalid}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputStyled {...inputProps} />
      {postfix && <Postfix>{postfix}</Postfix>}
    </Root>
  );
};

const InputStyled = styled("input", {
  outline: "0px",
  height: "32px",
  border: "0px",
  padding: "$1 $2",
  borderRadius: "inherit",
  width: "100%",
  backgroundColor: "inherit",
  color: "$fgDefault",
  fontSize: "$body2",

  "&:placeholder": {
    color: "$fgMuted",
    fontWeight: "$semiBold",
  },
});

const Root = styled("span", {
  border: "1px solid $borderDefault",
  backgroundColor: "inherit",
  borderRadius: "$2",
  display: "flex",
  width: "100%",

  variants: {
    invalid: {
      true: {
        borderColor: "$dangerEmphasis",

        "&:focus-within": {
          borderColor: "$dangerEmphasis",
        },
      },
    },
  },
});

const Prefix = styled("span", {});

const Postfix = styled("span", {
  display: "flex",
  margin: "$1",
});
