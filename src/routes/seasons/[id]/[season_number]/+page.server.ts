import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const url = `https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}?api_key=${API_KEY}&append_to_response=aggregate_credits`;
        const response = await fetch(url);
        const season_details: SeasonType = await response.json();
        return {
            season_details
        };
    }
    catch {
        throw error(400, 'not found');
    }
}
