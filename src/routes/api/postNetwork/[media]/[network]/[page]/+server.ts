import type { RequestHandler } from './$types'
import { error } from "@sveltejs/kit";
import { API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ params, locals }) => {
	const region = locals.region.locale.substring(3, 5)
	try {
		const api_url = `https://api.themoviedb.org/3/discover/${params.media}?api_key=${API_KEY}&watch_region=${region}&with_watch_providers=${params.network}&language=${locals.region.locale}&page=${params.page}`;
		const res_mov = await fetch(api_url);
		const res = (await res_mov.json()).results
		return new Response(String(JSON.stringify(res)));
	}
	catch {
		throw error(400, 'not found');
	}
}