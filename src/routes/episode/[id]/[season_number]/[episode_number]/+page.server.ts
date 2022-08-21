import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

const api: string = import.meta.env.VITE_API_KEY

export const load: PageServerLoad = async ({ params }) => {
    try {
        const url =
            `https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}/episode/${params.episode_number}?api_key=${api}&language=en-US`;
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
