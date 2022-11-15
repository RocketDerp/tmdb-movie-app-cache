import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, locals }) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=${locals.region.locale}&append_to_response=videos,credits,watch/providers,similar`
        console.log(url)
        const response = await fetch(url)
        const movie_details: MovieAppendType = await response.json();

        return {
            movie_details
        };
    }
    catch {
        throw error(400, 'not found');
    }
}