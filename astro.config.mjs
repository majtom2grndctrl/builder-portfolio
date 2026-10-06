// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// Note: .env files aren't loaded into process.env here; defaults below cover local dev.
const env = process.env;

// Netlify sets URL (production) and DEPLOY_PRIME_URL (previews) at build time.
// Set SITE_URL to override once a custom domain is in place.
const site = env.SITE_URL || env.URL || env.DEPLOY_PRIME_URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		sanity({
			projectId: env.PUBLIC_SANITY_PROJECT_ID || 'ylv78mng',
			dataset: env.PUBLIC_SANITY_DATASET || 'production',
			apiVersion: '2026-10-01',
			// Static build: always read fresh content at build time.
			useCdn: false,
			studioBasePath: '/studio',
		}),
		react(),
		sitemap({ filter: (page) => !page.includes('/studio') }),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
