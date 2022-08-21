import type { RequestHandler } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

const api: string = import.meta.env.VITE_API_KEY

interface GenreRequest extends Request {
	media: MediaType
	genre: number
	page: number
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body: GenreRequest = await request.json();
		const api_url = `https://api.themoviedb.org/3/discover/${body["media"]}?api_key=${api}&with_genres=${body["genre"]}&page=${body["page"]}`
		const res_mov = await fetch(api_url)
		const res = (await res_mov.json()).results
		return new Response(String(JSON.stringify(res)));
	}
	catch {
		throw error(400, 'not found');
	}
}
