import { styled } from "@/shared/config/stitches/stitches.config";
import { IconLogoVertical } from "@/shared/ui";

export const Footer = () => {
  return (
    <InnerRoot>
      <Root>
        <IconLogoVertical color="#fff" />
      </Root>
    </InnerRoot>
  );
};

const InnerRoot = styled("footer", {
  background: "$backgroundFooter",
});

const Root = styled("div", {
  maxWidth: "$containerLg",
  width: "100%",
  margin: "0 auto",
  padding: "18px 0px",
});
