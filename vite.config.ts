import * as path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";
import { test } from "vitest";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: ["effector/babel-plugin", "typewind/babel"],
      },
    }),
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
