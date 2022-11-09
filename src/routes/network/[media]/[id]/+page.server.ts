import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types'

import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, locals }) => {
    const region = locals.region.locale.substring(3, 5)
    try {
        const url = `https://api.themoviedb.org/3/discover/${params.media}?api_key=${API_KEY}&watch_region=${region}&with_watch_providers=${params.id}&language=${locals.region.locale}&page=1`;
        // console.log(url)
        const response = await fetch(url);
        const network_response: ShowResponse = await response.json();
        // console.log(network_response)
        return {
            media_data: network_response.results,
            total_pages: network_response.total_pages
        }
    }
    catch {
        throw error(400, 'not found');
    }
}

// https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate