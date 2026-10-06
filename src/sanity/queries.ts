import { sanityClient } from './client';

export interface ProjectSummary {
	_id: string;
	title: string;
	slug: string;
	summary?: string;
	status?: string;
	stack?: string[];
}

export function getProjects(): Promise<ProjectSummary[]> {
	return sanityClient.fetch(
		`*[_type == "project" && defined(slug.current)] | order(featured desc, startedAt desc) {
			_id, title, "slug": slug.current, summary, status, stack
		}`,
	);
}
