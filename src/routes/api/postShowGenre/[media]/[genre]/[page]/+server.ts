import type { RequestHandler } from './$types'
import { error } from "@sveltejs/kit";
import { API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ params, locals }) => {
	try {
		const api_url = `https://api.themoviedb.org/3/discover/${params.media}?api_key=${API_KEY}&language=${locals.region.locale}&with_genres=${params.genre}&page=${params.page}`
		const res_mov = await fetch(api_url)
		const res = (await res_mov.json()).results
		return new Response(String(JSON.stringify(res)));
	}
	catch {
		throw error(400, 'not found');
	}
}
