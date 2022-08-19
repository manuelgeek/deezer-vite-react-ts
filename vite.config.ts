/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/utils/setup.ts',
    css: true,
  },
  preview: {
    port: Number(process.env.PORT) || 5000,
  },
})
