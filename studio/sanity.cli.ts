import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
	api: { projectId: 'ylv78mng', dataset: 'production' },
	// Hosted at https://builder-portfolio.sanity.studio after `pnpm studio:deploy`.
	// After the first deploy, add the appId it prints to `deployment` below.
	studioHost: 'builder-portfolio',
	deployment: { autoUpdates: true },
});
