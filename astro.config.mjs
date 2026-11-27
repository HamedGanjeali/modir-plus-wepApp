import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://modir-plus.ir',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
