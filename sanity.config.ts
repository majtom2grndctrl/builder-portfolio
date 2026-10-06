import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
	name: 'builder-portfolio',
	title: 'Builder Portfolio',
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'ylv78mng',
	dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
	plugins: [structureTool(), visionTool()],
	schema: { types: schemaTypes },
});
