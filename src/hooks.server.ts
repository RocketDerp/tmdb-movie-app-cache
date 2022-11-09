import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');
    let region = event.cookies.get('region');

    if (!theme) {
        theme = 'dark'
        event.cookies.set('theme', 'dark', { httpOnly: false, secure: false, sameSite: 'lax', path: '/', expires: new Date('Wed, 29 Dec 9999 23:59:59 GMT') });
    }
    if (!region) {
        const options = Intl.DateTimeFormat().resolvedOptions();
        region = options.locale;
        console.log('hooks, region , options ==>', region)
        event.cookies.set('region', region, { httpOnly: false, secure: false, sameSite: 'lax', path: '/', expires: new Date('Wed, 29 Dec 9999 23:59:59 GMT') });
    }
    event.locals.region = { locale: region }
    event.locals.theme = { mode: theme }
    const response = await resolve(event)
    return response
}