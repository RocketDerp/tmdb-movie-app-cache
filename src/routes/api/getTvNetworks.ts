import type { RequestHandler } from "@sveltejs/kit";

const api: string = import.meta.env.VITE_API_KEY

const TV_NETWORKS_API = `https://api.themoviedb.org/3/watch/providers/tv?api_key=${api}&language=en-US`

export const GET: RequestHandler = async () => {
	const response: Response = await fetch(TV_NETWORKS_API);
	const response_json = await response.json();
	const tv_network = response_json.results
	if (response.ok) {
		return {
			status: 200,
			body: JSON.stringify({ tv_network })
		}
	}
	return {
		status: 404
	}

}
