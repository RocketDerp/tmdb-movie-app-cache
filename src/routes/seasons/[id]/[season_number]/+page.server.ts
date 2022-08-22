import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

const api: string = import.meta.env.VITE_API_KEY

export const load: PageServerLoad = async ({ params }) => {
    try {
        const url = `https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}?api_key=${api}&language=en-US`;
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
