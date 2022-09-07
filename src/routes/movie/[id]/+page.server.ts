import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos,credits,watch/providers`
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