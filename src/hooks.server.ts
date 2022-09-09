import { error } from '@sveltejs/kit';
import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    try {
        const cookies = cookie.parse(event.request.headers.get('cookie') || '');
        const response = await resolve(event)
        event.locals.theme = cookies.theme || 'light';

        if (!cookies.theme) {
            const theme = event.request.headers.get('theme') || 'light';
            response.headers.append('set-cookie', `theme=${theme};SameSite=strict;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`);
        }

        return response
    }
    catch {
        throw error(400, 'not found');
    }
}



