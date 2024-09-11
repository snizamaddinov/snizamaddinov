import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', 
  build: {
    outDir: '../public',
    rollupOptions: {
      input: './src/index.html',
    }
  }
});
