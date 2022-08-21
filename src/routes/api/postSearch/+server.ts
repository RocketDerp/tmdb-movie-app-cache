import type { RequestHandler } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

const api: string = import.meta.env.VITE_API_KEY

interface SearchRequest extends Request {
    media: MediaType
    page: number
    query: string
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const body: SearchRequest = await request.json();
        const api_url = `https://api.themoviedb.org/3/search/${body["media"]}?api_key=${api}&language=en-US&page=${body["page"]}&include_adult=false&query=${body["query"]}`
        const res_mov = await fetch(api_url);
        const res = (await res_mov.json()).results
        return new Response(String(JSON.stringify(res)));
    }
    catch {
        throw error(400, 'not found');
    }
}
