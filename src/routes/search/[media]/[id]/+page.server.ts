import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

const api: string = import.meta.env.VITE_API_KEY

export const load: PageServerLoad = async ({ params }) => {
    try {
        const url = `https://api.themoviedb.org/3/search/${params.media}?api_key=${api}&language=en-US&page=1&include_adult=false&query=${params.id}`
        const response = await fetch(url);
        const media_response: ShowResponse | MovieResponse | PersonResponse = await response.json();
        return {
            media_data: media_response.results,
            total_pages: media_response.total_pages
        }
    }
    catch {
        throw error(400, 'not found');
    }
}
