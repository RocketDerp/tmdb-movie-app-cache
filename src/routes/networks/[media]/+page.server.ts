import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, locals }) => {
	try {
		const region = locals.region.locale.substring(3, 5)
		const url = `https://api.themoviedb.org/3/watch/providers/${params.media}?api_key=${API_KEY}&watch_region=${region}&language=${locals.region.locale}`;
		const response = await fetch(url);
		const networks: Network[] = (await response.json()).results;
		return {
			networks,
			media_type: params.media
		}
	}
	catch {
		throw error(400, 'not found');
	}
}

// https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>
// &language=en-US
// &sort_by=popularity.desc
// &page=1
// &timezone=America%2FNew_York
// &include_null_first_air_dates=false
// &with_watch_monetization_types=flatrate
// &with_status=0
// &with_type=0