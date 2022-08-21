import type { RequestHandler } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

const api: string = import.meta.env.VITE_API_KEY

interface ShowRequest extends Request {
	media: MediaType
	id: number
	page: number
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body: ShowRequest = await request.json();
		const api_url = `https://api.themoviedb.org/3/trending/${body["media"]}/week?api_key=${api}&language=en-GB&page=${body["page"]}`
		const res_mov = await fetch(api_url);
		const res = (await res_mov.json()).results
		return new Response(String(JSON.stringify(res)));
	}
	catch {
		throw error(400, 'not found');
	}
}

