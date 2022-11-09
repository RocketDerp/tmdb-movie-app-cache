import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, locals }) => {
    try {
        const api_url = `https://api.themoviedb.org/3/person/${params.id}?api_key=${API_KEY}&append_to_response=combined_credits&language=${locals.region.locale}`
        const res = await fetch(api_url)
        const person: PersonAppendType = await res.json()
        return {
            person
        }
    }
    catch {
        throw error(400, 'not found');
    }
}
