import { createClient } from '@sanity/client';

export const sanityClient = createClient({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'ylv78mng',
	dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2026-10-01',
	// Static build: always read fresh content at build time.
	useCdn: false,
});
