import { defineConfig } from 'vite';
import tailwindcss from 'vite-plugin-tailwindcss';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../public',
    rollupOptions: {
      input: './src/index.html',
    },
    publicDir: 'public',
  },
  plugins: [
    tailwindcss(),
  ],
});