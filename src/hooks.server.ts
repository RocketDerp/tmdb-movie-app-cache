import type { Handle } from '@sveltejs/kit';
import { movie_genre, tv_genre } from '$lib/server/getGenres'
//calls getGenres on server start up

export const handle: Handle = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');

    if (!theme) {
        theme = 'dark'
        event.cookies.set('theme', 'dark', { sameSite: 'strict', path: '/', expires: new Date('Wed, 29 Dec 9999 23:59:59 GMT') });
    }
    const response = await resolve(event)
    event.locals.theme = { mode: theme }

    return response
}




