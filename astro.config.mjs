import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://ccsmascots.com',
  base: '/',
  integrations: [react(), markdoc(), keystatic(), sitemap()],
  output: 'server',
  adapter: cloudflare({
    session: false,
  }),
});