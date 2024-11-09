import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  base: '',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        feed: resolve(__dirname, 'src/feed/index.html'),
        profile: resolve(__dirname, 'src/profile/index.html'),
      },
    },
  },
  plugins: [
    {
      name: 'copy-redirects',
      closeBundle() {
        const redirectsSrc = resolve(__dirname, '_redirects');
        const redirectsDest = resolve(__dirname, 'dist/_redirects');
        if (fs.existsSync(redirectsSrc)) {
          fs.copyFileSync(redirectsSrc, redirectsDest);
          console.log('_redirects file copied to dist folder');
        } else {
          console.warn('_redirects file not found at expected path.');
        }
      },
    },
  ],
});