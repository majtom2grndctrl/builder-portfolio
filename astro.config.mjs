// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Netlify sets URL (production) and DEPLOY_PRIME_URL (previews) at build time.
// Set SITE_URL to override once a custom domain is in place.
const env = process.env;
const site = env.SITE_URL || env.URL || env.DEPLOY_PRIME_URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
