import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

const api: string = import.meta.env.VITE_API_KEY

export const load: PageServerLoad = async ({ params }) => {
    try {
        const api_url = `https://api.themoviedb.org/3/person/${params.id}?api_key=${api}&language=en-US`
        const res = await fetch(api_url)
        const person: PersonType = await res.json()

        const known_for_api = `https://api.themoviedb.org/3/person/${params.id}/combined_credits?api_key=${api}&language=en-US`
        const resp = await fetch(known_for_api)
        const knownFor: KnownForType[] = (await resp.json()).cast;


        return {
            person,
            knownFor
        }
    }
    catch {
        throw error(400, 'not found');
    }
}