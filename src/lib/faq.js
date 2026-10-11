// ============================================================
// Preguntas frecuentes de DecoJade.
// Una sola fuente: la sección de la web, los datos para Google
// (FAQPage) y el chatbot leen este archivo. Si cambia cómo
// entregas o cobras, se cambia aquí y queda igual en todas partes.
// ============================================================

import { YESO } from './products';

export const ENTREGA = {
  direccion: 'Calle Tarapacá #17, Parral',
  despacho: 'Despacho a domicilio dentro de Parral, coordinado por WhatsApp según la dirección.',
  fueraDeParral: false,
};

export const PAGO = ['efectivo', 'transferencia bancaria'];

export const ANTICIPACION_PEDIDOS_GRANDES = 'dos semanas';

export const faqs = [
  {
    q: '¿Hacen despacho?',
    a: 'Sí, dentro de Parral te la llevamos a domicilio. Escríbenos con tu dirección y coordinamos el día. Si prefieres, también puedes retirarla en el vivero, en Calle Tarapacá #17, agendando tu visita antes por WhatsApp.',
  },
  {
    q: '¿Envían a otras ciudades?',
    a: 'Por ahora no. Trabajamos con retiro en el vivero o despacho dentro de Parral.',
  },
  {
    q: '¿Cómo puedo pagar?',
    a: 'En efectivo o por transferencia bancaria. Te mandamos los datos por WhatsApp al confirmar tu pedido.',
  },
  {
    q: '¿Con cuánta anticipación pido souvenirs o compras por mayor?',
    a: 'Con dos semanas. Así alcanzamos a preparar el lote completo para tu fecha, y el macetero de yeso si lo quieres. Escríbenos cuanto antes con la cantidad y el día del evento.',
  },
  {
    q: '¿El macetero viene incluido?',
    a: `Sí, todas van con su macetero plástico. Hasta los $${YESO.maxPrice.toLocaleString('es-CL')} puedes pedirlo en yeso de producción propia, sin costo. Para las piezas más grandes todavía no hay macetero de yeso de ese tamaño.`,
  },
  {
    q: '¿Puedo ir a elegir mi planta?',
    a: 'Claro, y en los formatos grandes te lo recomendamos, porque no hay dos ejemplares iguales. Solo avísanos antes por WhatsApp: el vivero no tiene horario fijo de atención.',
  },
  {
    q: '¿Es difícil de cuidar?',
    a: 'Es de las plantas más fáciles que existen. Guarda agua en sus hojas, así que se riega cada 2 o 3 semanas en verano y cada 4 a 6 en invierno. Lo que la mata es el exceso de riego, no el olvido. Y si tienes dudas, te asesoramos por WhatsApp las veces que haga falta.',
  },
];
