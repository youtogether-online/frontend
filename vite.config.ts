/// <reference types="vitest" />
import svg from "@neodx/svg/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["effector/babel-plugin", "typewind/babel"],
      },
    }),
    svg({
      root: "./src/shared/assets/icons",
      group: true,
      output: "./public/sprite",
      definitions: "./src/shared/ui/icon/sprite.h.ts",
      resetColors: {
        replaceUnknown: "currentColor",
      },
      optimize: true,
    }),
    tsconfigPath(),
    mkcert(),
  ],
  server: {
    hmr: false,
    watch: {
      usePolling: true,
    },
    strictPort: true,
    port: 5173,
    https: true,
  },
  preview: {
    port: 5173,
  },
  test: {
    environment: "jsdom",
  },
});
