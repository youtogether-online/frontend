import { defineConfig } from "orval";

export default defineConfig({
  youtogether: {
    input: "https://youtogether-online.github.io/mock/src/docs/OpenAPI.yaml",
    output: {
      workspace: "./src/shared/api/internal",
      target: "./contracts.ts",
      schemas: "./schemas",
      client: "zod",
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
});
