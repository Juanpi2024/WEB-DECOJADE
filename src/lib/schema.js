// ============================================================
// Datos estructurados (schema.org) para buscadores.
// No se ven en la página: le explican a Google y a los asistentes
// de IA qué es cada cosa — un producto, su precio, una pregunta.
// Todo sale de products.js y faq.js, así que nunca se desalinea.
// ============================================================

import { allProducts } from './products';
import { faqs } from './faq';

export const SITE = 'https://web-decojade.vercel.app';

const nombreCompleto = (p) => (p.name.startsWith('Jade') ? p.name : `Jade ${p.name}`);

function oferta(p) {
  const base = {
    priceCurrency: 'CLP',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'DecoJade' },
  };
  if (p.variablePrice) {
    // Formatos con precio por ejemplar: se declara el rango, no un precio cerrado.
    return {
      '@type': 'AggregateOffer',
      lowPrice: p.price,
      ...(p.priceMax ? { highPrice: p.priceMax } : {}),
      ...base,
    };
  }
  return { '@type': 'Offer', price: p.price, url: `${SITE}/catalogo`, ...base };
}

export function catalogoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catálogo de plantas de jade DecoJade',
    itemListElement: allProducts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: nombreCompleto(p),
        description: `${p.subtitle ? p.subtitle + '. ' : ''}${p.description}`,
        image: `${SITE}${p.image}`,
        brand: { '@type': 'Brand', name: 'DecoJade' },
        category: 'Plantas > Suculentas > Crassula ovata',
        offers: oferta(p),
      },
    })),
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// Inserta un bloque JSON-LD. El "<" se escapa para que ningún texto
// del catálogo pueda cerrar la etiqueta <script> por accidente.
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
