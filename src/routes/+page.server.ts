import { error } from "@sveltejs/kit";
import { API_KEY } from '$env/static/private';
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {

    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=${locals.region.locale}&page=1`;
    const response = await fetch(url)
    if (response.ok) {
        const media_response: AllResponse = await response.json();
        return {
            media_data: media_response.results,
            total_pages: media_response.total_pages
        }
    }
    else {
        throw error(400, 'network error, tv and movie request failure');
    }
}
