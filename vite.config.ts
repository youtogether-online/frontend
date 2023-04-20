import * as path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: ['effector/babel-plugin'],
      },
    }),
  ],
  server: {
    hmr: false,
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  preview: {
    port: 5173,
  },
})
