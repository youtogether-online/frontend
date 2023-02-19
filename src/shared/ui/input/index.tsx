import { styled } from "@/shared/config/stitches/stitches.config";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
  errorMessage?: string
}

export const Input = ({ invalid, children, errorMessage, ...inputProps }: InputProps) => {
  return <Container>
    <InputStyled invalid={invalid} {...inputProps} />
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Container>;
};

const InputStyled = styled("input", {
  borderRadius: "$roundedExtra",
  padding: "6px 12px",
  outline: "0px",
  border: "1px solid $borderSecondary",
  background: "$backgroundContainer",

  "&:placeholder": {
    color: "$textSecondary"
  },

  variants: {
    invalid: {
      true: {
        background: "$errorBackground",
        borderColor: "$errorBorder",
        color: "$errorText",

        "&::placeholder": {
          color: "$errorText"
        }
      }
    }
  }
});

const ErrorMessage = styled("span", {
  fontSize: "$error",
  color: "$error",
  marginTop: "4px",
  borderRadius: "$roundedExtra",
  backgroundColor: "$errorBackground",
  padding: "8px 8px"
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column"
});