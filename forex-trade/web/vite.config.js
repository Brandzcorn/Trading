import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public', // tells Vite to look for index.html in /public
  build: {
    outDir: '../dist', // output goes one level up as dist/
  },
});