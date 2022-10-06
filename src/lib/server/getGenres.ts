import { error } from "@sveltejs/kit";
import { API_KEY } from '$env/static/private';
const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language-en-GB`;
const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language-en-GB`;

export const tv_genre = () => {

    fetch(GENRES_TV_API)
        .then(resp => resp.json())
        .then(tv_genre => tv_genre.genres)
    return tv_genre
}

export const movie_genre = () => {

    fetch(GENRES_MOVIE_API)
        .then(resp => resp.json())
        .then(movie_genre => movie_genre.genres)
    return movie_genre

}