import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'app/test/setupTests',
    mockReset: true,
  },
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: fileURLToPath(new URL('./app', import.meta.url)),
      },
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./pages', import.meta.url)),
      },
      {
        find: '@shared',
        replacement: fileURLToPath(new URL('./shared', import.meta.url)),
      },
    ],
  },
});
