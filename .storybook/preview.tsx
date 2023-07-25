import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview, StoryFn } from "@storybook/react";
import "../src/app/index.css"
import '@unocss/reset/tailwind.css';
import 'uno.css'; 

import React from "react";

const withBackground = (StoryFn: StoryFn) => {
  return <div className="absolute top-0 left-0 bg-canvas-default h-screen w-screen p-3 overflow-auto">
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
  withBackground,
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];

export default preview;
