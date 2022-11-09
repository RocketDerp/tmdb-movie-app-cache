import { API_KEY } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
    const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=${locals.region.locale}`;
    const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${locals.region.locale}`;
    const fetch_tv = async (): Promise<Genre[]> => {
        try {
            const response_tv = await fetch(GENRES_TV_API)
            const tv_genre = await (response_tv.json())
            return tv_genre.genres
        }
        catch {
            throw error(404, 'network error, genres request failed')
        }
    }

    const fetch_movie = async (): Promise<Genre[]> => {
        try {
            const response_movie = await fetch(GENRES_MOVIE_API)
            const movie_genre = await (response_movie.json())
            return movie_genre.genres
        }
        catch {
            throw error(404, 'no network')
        }
    }
    return {
        tv_genre: fetch_tv(),
        movie_genre: fetch_movie(),
        locale: locals.region.locale
    }
}