import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import { renderPage } from './src/render/page.js';

const readContent = (name) => JSON.parse(readFileSync(new URL(`./content/${name}.json`, import.meta.url), 'utf8'));

const renderContentPlugin = {
  name: 'render-content',
  transformIndexHtml: (html) =>
    renderPage(html, {
      profile: readContent('profile'),
      experience: readContent('experience'),
      projects: readContent('projects'),
    }),
  configureServer(server) {
    server.watcher.add('content');
    server.watcher.on('change', (file) => {
      if (file.includes('/content/')) server.ws.send({ type: 'full-reload' });
    });
  },
};

export default defineConfig({
  publicDir: 'static',
  build: {
    outDir: 'public',
    emptyOutDir: true,
  },
  plugins: [renderContentPlugin],
});
