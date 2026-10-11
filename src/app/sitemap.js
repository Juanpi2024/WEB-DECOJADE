// Genera /sitemap.xml: la lista de páginas que Google debe indexar.
// Si agregas una página nueva al sitio, súmala aquí.
const SITE = 'https://web-decojade.vercel.app';

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/catalogo`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/cuidados`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
