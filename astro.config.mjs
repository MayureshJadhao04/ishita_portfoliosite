// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ishitayadav.com', // update when domain is confirmed
  vite: {
    plugins: [tailwindcss()]
  }
});