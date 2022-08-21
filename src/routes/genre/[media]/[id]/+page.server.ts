import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

const api: string = import.meta.env.VITE_API_KEY

export const load: PageServerLoad = async ({ params }) => {
    try {
        const url = `https://api.themoviedb.org/3/discover/${params.media}?api_key=${api}&with_genres=${params.id}&page=1`
        const response = await fetch(url);
        const media_response: MovieResponse | ShowResponse = await response.json();
        return {
            media_data: media_response.results,
            total_pages: media_response.total_pages
        }
    }
    catch {
        throw error(400, 'not found');
    }
}
