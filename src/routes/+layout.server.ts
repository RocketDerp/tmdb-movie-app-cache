import { movie_genre, tv_genre } from '$lib/server/getGenres';

export const load = async () => {
    return {
        movie_genre,
        tv_genre
    }
}

