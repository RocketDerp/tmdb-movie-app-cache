import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, locals }) => {
    try {
        const url =
            `https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}/episode/${params.episode_number}?api_key=${API_KEY}&language=${locals.region.locale}&append_to_response=credits`;
        const response = await fetch(url)
        const episode_details: EpisodesType = await response.json()
        return {
            episode_details
        }
    }
    catch {
        throw error(400, 'not found');
    }
}