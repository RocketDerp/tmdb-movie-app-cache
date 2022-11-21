import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');
    let region = event.cookies.get('region');

    if (!theme) {
        theme = 'light'
        event.cookies.set('theme', 'light', { httpOnly: false, secure: false, sameSite: 'lax', path: '/', expires: new Date('Wed, 29 Dec 9999 23:59:59 GMT') });
    }
    if (!region) {
        const language = event.request.headers.get('accept-language')
        region = language?.substring(0, 5) || 'en-GB'
        event.cookies.set('region', region, { httpOnly: false, secure: false, sameSite: 'lax', path: '/', expires: new Date('Wed, 29 Dec 9999 23:59:59 GMT') });
    }
    event.locals.region = { locale: region }
    event.locals.theme = { mode: theme }
    const response = await resolve(event)
    return response
}