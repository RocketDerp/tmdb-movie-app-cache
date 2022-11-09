import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, locals }) => {

    try {
        const url = `https://api.themoviedb.org/3/tv/${params.id}?api_key=${API_KEY}&language=${locals.region.locale}&append_to_response=videos,credits,watch/providers`
        const response = await fetch(url)
        const tv_details: TvAppendType = await response.json();
        return {
            tv_details
        };
    }
    catch {
        throw error(400, 'not found');
    }
}

