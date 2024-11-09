import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, existsSync } from 'fs';

export default defineConfig({
  base: '',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [
    {
      name: 'copy-redirects',
      buildEnd() {
        const redirectsPath = '_redirects';
        if (existsSync(redirectsPath)) {
          copyFileSync(redirectsPath, 'dist/_redirects');
        } else {
          console.warn('Warning: _redirects file not found.');
        }
      }
    }
  ]
});