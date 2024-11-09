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
        const redirectsPath = resolve(__dirname, '_redirects');  // Use absolute path
        if (existsSync(redirectsPath)) {
          try {
            console.log(`Copying _redirects from ${redirectsPath} to dist/_redirects`);
            copyFileSync(redirectsPath, resolve(__dirname, 'dist/_redirects'));
          } catch (error) {
            console.error(`Failed to copy _redirects: ${error.message}`);
          }
        } else {
          console.warn('Warning: _redirects file not found at expected path.');
        }
      }
    }
  ]
});