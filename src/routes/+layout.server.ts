import { error } from "@sveltejs/kit";

import { API_KEY } from '$env/static/private';
const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language-en-GB`;
const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language-en-GB`;

export const load = async () => {
    try {
        const response_tv = await fetch(GENRES_TV_API)
        const tv_genre: Genre[] = (await (response_tv.json())).genres

        const response_movie = await fetch(GENRES_MOVIE_API)
        const movie_genre: Genre[] = (await (response_movie.json())).genres

        return {
            tv_genre,
            movie_genre
        }
    }
    catch {
        throw error(400, 'not found');
    }
}