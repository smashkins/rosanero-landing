import type { AstroGlobal } from 'astro';
import { ui, DEFAULT_LOCALE, type Locale } from './ui';

export { ui, DEFAULT_LOCALE, LOCALES, localeName } from './ui';
export type { Locale } from './ui';

/**
 * Resolve the current request's locale from the Astro context. Falls back
 * to the default locale (Italian) when running outside a routed context.
 */
export function getLocale(astro?: AstroGlobal | { currentLocale?: string }): Locale {
  const raw = astro?.currentLocale;
  if (raw === 'en') return 'en';
  return DEFAULT_LOCALE;
}

/** Look up the translation bundle for a locale. */
export function t(locale: Locale): (typeof ui)[Locale] {
  return ui[locale] ?? ui[DEFAULT_LOCALE];
}

/**
 * Prepend the locale segment to an internal href, unless it's the default
 * locale (Italian, served at the root) or the href is an absolute URL,
 * a mail/tel link or an in-page anchor.
 */
export function localizedHref(href: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return href;
  if (/^(?:https?:|mailto:|tel:|#)/.test(href)) return href;
  if (!href.startsWith('/')) return href;
  // /privacy/  ->  /en/privacy/
  return `/${locale}${href}`;
}

/**
 * Given the current URL pathname, compute the equivalent path in the
 * target locale. Clicking EN on `/privacy/` gives `/en/privacy/`, clicking
 * IT on `/en/privacy/` gives `/privacy/`.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const stripped = pathname.replace(/^\/en(\/|$)/, '/');
  const canonical = stripped === '' ? '/' : stripped;
  if (target === DEFAULT_LOCALE) return canonical;
  return canonical === '/' ? `/${target}/` : `/${target}${canonical}`;
}
