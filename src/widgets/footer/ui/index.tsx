import { ReactComponent as Logo } from "@/shared/assets/logo.svg";
import { styled } from "@/shared/config/stitches/stitches.config";

export const Footer = () => {
  return <Root className="bg-gray-800 px-4 py-8"><Logo className="text-white" /></Root>;
};

const Root = styled("footer", {
  background: "$backgroundFooter",
  padding: "32px 16px"
});