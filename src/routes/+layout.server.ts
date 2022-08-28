import { error } from "@sveltejs/kit";

const api: string = import.meta.env.VITE_API_KEY
const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api}&language-en-GB`;
const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language-en-GB`;

export const load = async () => {
    try {
        const response_tv = await fetch(GENRES_TV_API)
        const tv_genre: Genre[] = (await (response_tv.json())).genres

        const response_movie = await fetch(GENRES_MOVIE_API)
        const movie_genre: Genre[] = (await (response_movie.json())).genres
        console.log("==================fetching genres================")

        const localTheme = ''

        return {
            tv_genre,
            movie_genre,
            localTheme
        }
    }
    catch {
        throw error(400, 'not found');
    }
}