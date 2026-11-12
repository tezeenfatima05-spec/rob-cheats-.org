/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/rob-run-cheats/'],
  ['/cheats/', '/products/rob-run-cheats/'],
  ['/cheats/lite', '/products/rob-run-cheats/'],
  ['/cheats/lite/', '/products/rob-run-cheats/'],
  ['/cheats/pro', '/products/rob-run-cheats/'],
  ['/cheats/pro/', '/products/rob-run-cheats/'],
  ['/cheats/elite', '/products/rob-run-cheats/rob-run/'],
  ['/cheats/elite/', '/products/rob-run-cheats/rob-run/'],
  ['/cheats/compare', '/blog/rob-run-features-overview/'],
  ['/cheats/compare/', '/blog/rob-run-features-overview/'],
  ['/products/rob-run-cheats/utilities', '/products/rob-run-cheats/utilities/'],
  ['/products/rob-run-cheats', '/products/rob-run-cheats/'],
  ['/products/dota-2-cheats', '/products/rob-run-cheats/'],
  ['/products/dota-2-cheats/', '/products/rob-run-cheats/'],
  ['/products/dota-2-cheats/elite', '/products/rob-run-cheats/rob-run/'],
  ['/products/dota-2-cheats/elite/', '/products/rob-run-cheats/rob-run/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
