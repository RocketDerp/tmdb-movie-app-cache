import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

const api: string = import.meta.env.VITE_API_KEY

export const load: PageServerLoad = async ({ params }) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${api}&append_to_response=videos,credits,watch/providers`
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