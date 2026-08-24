// ============================================================
// Fuente única de verdad del catálogo DecoJade.
// La home y la página de catálogo leen de aquí — si cambias un
// precio en este archivo, cambia en todo el sitio.
// ============================================================

export const WHATSAPP = '56984668005';

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const formatCLP = (value) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(value);

// ---- Plantas en macetero (hasta $12.000) ----
// Van en macetero plástico. El macetero de yeso de producción propia
// está disponible a pedido y sin costo, sólo hasta este rango de tamaño:
// para las piezas grandes todavía no hay moldes.
export const maceteroProducts = [
  {
    id: 'mini-x3',
    name: 'Mini',
    subtitle: 'Pack de 3',
    description:
      'Plantas jóvenes con raíz ya establecida. El recuerdo de matrimonio o evento que la gente sí se lleva a casa.',
    price: 1000,
    priceLabel: '$1.000',
    priceNote: 'el pack de 3 unidades',
    image: '/jade_1000_real.png',
    badge: 'Económica',
    benefits: ['Pack de 3 unidades', 'Ideal souvenir de evento', 'Disponible por mayor'],
    tags: ['souvenir', 'mayor'],
    budget: 1000,
  },
  {
    id: 'jade-chico',
    name: 'Jade Chico',
    subtitle: '2 años',
    description:
      'En pleno desarrollo. El regalo de cumpleaños que dura años, no una semana.',
    price: 3000,
    image: '/jade_chico_yeso.jpg',
    badge: 'Oferta',
    benefits: ['2 años de cultivo', 'Macetero incluido', 'Listo para regalar'],
    tags: ['regalo', 'souvenir'],
    budget: 3000,
  },
  {
    id: 'jade-mediano',
    name: 'Jade Mediano',
    subtitle: 'El equilibrio',
    description:
      'Presencia real sin gastar de más. El que se lleva quien quiere ver la planta desde la otra punta del living.',
    price: 7000,
    image: '/jade_mediano_yeso.jpg',
    badge: 'Más vendido',
    benefits: ['Planta mediana', 'Macetero incluido', 'La mejor relación precio/tamaño'],
    tags: ['regalo', 'casa'],
    budget: 7000,
  },
  {
    id: 'jade-mediano-plus',
    name: 'Jade Mediano+',
    subtitle: 'Un porte más',
    description:
      'Un paso más de tamaño y madurez. Para quien ya sabe dónde la va a poner y quiere que se note.',
    price: 10000,
    image: '/jade_mediano_plus_yeso.jpg',
    badge: 'Más porte',
    benefits: ['Mediana de 3 años', 'Macetero incluido', 'Tronco más formado'],
    tags: ['casa', 'regalo'],
    budget: 10000,
  },
  {
    id: 'jade-3-anos',
    name: 'Jade 3 Años',
    subtitle: 'Estándar de la casa',
    description:
      'Nuestro producto insignia. Tronco firme, follaje abundante, tres años de cultivo. Es el que producimos en volumen.',
    price: 12000,
    image: '/jade_3anos_yeso.jpg',
    badge: 'Producto estrella',
    featured: true,
    benefits: ['3 años de edad', 'Macetero incluido', 'Amplio stock disponible'],
    tags: ['casa', 'mayor', 'regalo'],
    budget: 12000,
  },
];

// ---- Jardín bonsái decorado: maceta abierta, el tipo varía según el ejemplar ----
export const bonsaiProducts = [
  {
    id: 'jade-destacado',
    name: 'Jade Destacado',
    subtitle: 'Jardín bonsái',
    description:
      'Ejemplar de 3 años de tronco grueso, montado en maceta abierta con piedras y figura incluidas. Cada uno sale distinto.',
    priceLabel: '$18.000 – $20.000',
    priceNote: 'según tamaño y grosor del tronco',
    variablePrice: true,
    price: 18000,
    image: '/jade_bonsai_decorado.jpg',
    badge: 'Premium decorado',
    benefits: ['Tronco grueso, forma escultural', 'Maceta abierta, según ejemplar', 'Piedras y figura incluidas'],
    tags: ['pieza', 'casa'],
    budget: 20000,
  },
  {
    id: 'jade-gigante',
    name: 'Jade Gigante',
    subtitle: 'Pieza central',
    description:
      'Más de 50 cm de altura montados como jardín bonsái. Es la planta que la visita comenta antes de sentarse.',
    priceLabel: 'desde $25.000',
    priceNote: 'según ejemplar · imagen referencial',
    variablePrice: true,
    price: 25000,
    image: '/jade_gigante_real.png',
    badge: 'Exclusivo',
    benefits: ['Más de 50 cm de altura', 'Maceta abierta, según ejemplar', 'Piedras y figura incluidas'],
    tags: ['pieza'],
    budget: 99000,
  },
];

export const allProducts = [...maceteroProducts, ...bonsaiProducts];

// Filtros de la guía rápida — sólo usan datos que sí conocemos
export const occasions = [
  { id: 'souvenir', label: 'Souvenir de evento' },
  { id: 'regalo', label: 'Un regalo' },
  { id: 'casa', label: 'Decorar mi casa' },
  { id: 'pieza', label: 'Una pieza central' },
  { id: 'mayor', label: 'Comprar por mayor' },
];

export const budgets = [
  { id: 'b3', label: 'Hasta $3.000', max: 3000 },
  { id: 'b12', label: 'Hasta $12.000', max: 12000 },
  { id: 'any', label: 'Sin límite', max: Infinity },
];

// El macetero de yeso es una opción, no el estándar. Sólo hasta $12.000,
// porque de ahí para arriba todavía no hay moldes de ese tamaño.
export const YESO = {
  maxPrice: 12000,
  nota: 'Macetero plástico incluido. Si lo prefieres en yeso de producción propia, lo pides sin costo (disponible hasta los $12.000).',
};

// Mayoreo — único tramo confirmado por el vivero
export const WHOLESALE = {
  productName: 'Jade 3 años',
  unitPrice: 8000,
  retailPrice: 12000,
  minQty: 30,
};
