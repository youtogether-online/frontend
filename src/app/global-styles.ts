import { globalCss } from "@/shared/config/stitches/stitches.config";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "inherit",
    fontFamily: "$openSans",
  },
  html: {
    boxSizing: "border-box",
  },
  "input::placeholder": {
    fontFamily: "$openSans",
    fontWeight: 400,
    fontSize: "13px",
  },
  body: {
    fontWeight: 400,
    fontFamily: "$openSans",
    background:
      "linear-gradient(0deg, rgba(190, 190, 190, 20%) 0%, rgba(255, 255, 255, 20%) 100%), #fff;",
    color: "$textPrimary",
  },
  ul: {
    listStyle: "none",
  },
  button: {
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
});
