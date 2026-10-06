import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const isProduction = process.env.CONTEXT === 'production' || !process.env.CONTEXT;
	const body = isProduction
		? `User-agent: *\nAllow: /\nDisallow: /studio\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`
		: 'User-agent: *\nDisallow: /\n';
	return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
