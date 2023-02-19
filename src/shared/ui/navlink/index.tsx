import { styled } from "@/shared/config/stitches/stitches.config";
import { Link } from "react-router-dom";

export const NavLink = styled(Link, {
  color: "$textPrimary",
  textDecoration: "none"
});