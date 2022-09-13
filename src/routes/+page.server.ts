import { error } from "@sveltejs/kit";

import { API_KEY } from '$env/static/private';

export const load = async () => {
    try {
        const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-GB&page=1`;
        const response = await fetch(url)
        const media_response: AllResponse = await response.json();
        return {
            media_data: media_response.results,
            total_pages: media_response.total_pages
        }
    }
    catch {
        throw error(400, 'not found');
    }
}
