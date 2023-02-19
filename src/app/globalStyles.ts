import { globalCss } from "@/shared/config/stitches/stitches.config";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    margin: 0, padding: 0, boxSizing: "inherit"
  },
  "html": {
    boxSizing: "border-box"
  },
  "body": {
    fontWeight: 400,
    fontFamily: "$openSans",
    color: "$text",
    backgroundColor: "$backgroundLayout"
  },
  "ul": {
    listStyle: "none"
  }
});