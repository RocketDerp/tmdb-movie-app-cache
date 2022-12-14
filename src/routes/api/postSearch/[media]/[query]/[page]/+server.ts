import type { RequestHandler } from './$types'
import { error } from "@sveltejs/kit";
import { API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ params, locals }) => {
    try {
        const api_url = `https://api.themoviedb.org/3/search/${params.media}?api_key=${API_KEY}&language=${locals.region.locale}&page=${params.page}&include_adult=false&query=${params.query}`
        const res_mov = await fetch(api_url);
        const res = (await res_mov.json()).results
        return new Response(String(JSON.stringify(res)));
    }
    catch {
        throw error(400, 'not found');
    }
}
