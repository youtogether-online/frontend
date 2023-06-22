/// <reference types="vitest" />
import importMetaEnv from "@import-meta-env/unplugin";
import { lingui } from "@lingui/vite-plugin";
import svg from "@neodx/svg/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["effector/babel-plugin", { factories: ["effector-forms"] }],
          "typewind/babel",
          "macros",
        ],
      },
    }),
    svg({
      root: "./src/shared/assets/icons",
      group: true,
      output: "./public/sprites",
      definitions: "./src/shared/ui/icon/sprites.gen.ts",
      resetColors: {
        replaceUnknown: "currentColor",
        replace: {
          from: ["#007DFF"],
          to: "var(--color-header-logo)",
        },
      },
    }),
    importMetaEnv.vite({ example: ".env.sample" }),
    tsconfigPath(),
    lingui(),
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
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  preview: {
    port: 5173,
  },
  test: {
    environment: "jsdom",
  },
});
