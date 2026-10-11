// Genera /robots.txt: deja a los buscadores recorrer todo el sitio
// excepto el endpoint interno del chatbot, y les indica dónde está el mapa.
const SITE = 'https://web-decojade.vercel.app';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
