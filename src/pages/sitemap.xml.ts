import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../data/site';
import { PRODUCTS } from '../data/products';

export const GET: APIRoute = () => {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, '');
  const routes = [
    '/',
    '/guide/',
    ...PRODUCTS.map((product) => `/products/${product.slug}/`),
  ];

  const urlsXml = routes
    .map(
      (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
