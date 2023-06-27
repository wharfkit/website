import type { PageLoad } from './$types';
import { loadTranslations, locale, setLocale } from '$lib/translations';

export const prerender = true;

export const load = (async ({ params, url }) => {
  const { lang } = params;
  setLocale(lang)
  // const defaultLocale = 'en'; // get from cookie, user session, ...
  const initLocale = locale.get() // || defaultLocale; // set default if no locale already set
  await loadTranslations(initLocale); // keep this just before the `return`

  return {
    initLocale
  };
}) satisfies PageLoad;


const load
// TODO: Probably need a hook to set the locale on the client side
e.g.https://github.com/sveltekit-i18n/lib/blob/master/examples/locale-router/src/hooks.js