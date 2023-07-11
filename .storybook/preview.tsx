import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview, StoryFn } from "@storybook/react";

import "../src/app/index.css";
import React from "react";
import { tw } from 'typewind';

const withBackground = (StoryFn: StoryFn) => {
  return <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: "var(--color-canvas-inset)",
    height: "100vh",
    width: "100vw",
    padding: "12px",
    overflow: "auto"
  }}>
    <StoryFn />
  </div>
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    cssVariables: {
      defaultTheme: "Dark theme",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
  withBackground
];

export default preview;
