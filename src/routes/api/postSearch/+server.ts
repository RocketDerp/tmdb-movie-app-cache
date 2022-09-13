import type { RequestHandler } from "./$types";
import { error } from "@sveltejs/kit";

import { API_KEY } from '$env/static/private';

type BodyType = {
    media: MediaType
    page: number
    query: string
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const body: BodyType = await request.json();
        const api_url = `https://api.themoviedb.org/3/search/${body.media}?api_key=${API_KEY}&language=en-US&page=${body.page}&include_adult=false&query=${body.query}`
        const res_mov = await fetch(api_url);
        const res = (await res_mov.json()).results
        return new Response(String(JSON.stringify(res)));
    }
    catch {
        throw error(400, 'not found');
    }
}
