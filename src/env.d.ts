interface ImportMetaEnv {
	readonly PUBLIC_POSTHOG_KEY?: string;
	readonly PUBLIC_POSTHOG_HOST?: string;
	readonly PUBLIC_SANITY_PROJECT_ID: string;
	readonly PUBLIC_SANITY_DATASET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
