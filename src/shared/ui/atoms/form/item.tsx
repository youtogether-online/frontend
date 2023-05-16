import { type ReactNode } from "react";

import { styled } from "@/shared/config/stitches/stitches.config";

import { Text } from "../text";

interface FormItemProps {
  label?: string;
  error?: string;
  children: ReactNode;
}

export const Item = ({ label, error, children }: FormItemProps) => {
  return (
    <Root>
      {label && <Label variant="caption">{label}</Label>}
      <Children>{children}</Children>
      {error && <Error variant="caption">{error}</Error>}
    </Root>
  );
};

const Root = styled("div", {});

// TODO: Delete children component and change way of styling
const Children = styled("div", {
  display: "flex",
  gap: "5px",
  marginTop: "4px",

  "& span": {
    flex: "1",
  },
});

const Error = styled(Text, {
  color: "$errorText",
});

const Label = styled(Text, {
  color: "$textSecondary",
});
