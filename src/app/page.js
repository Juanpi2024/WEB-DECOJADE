import Image from 'next/image';
import Link from 'next/link';
import {
  Sprout, MapPin, MessageCircle, Boxes,
  ArrowDown, ArrowUpRight, Check,
} from 'lucide-react';
import CatalogExplorer from '@/components/CatalogExplorer';
import WholesaleCalculator from '@/components/WholesaleCalculator';
import { waLink } from '@/lib/products';

export default function Home() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[92svh] flex items-end overflow-hidden grain">
        <Image
          src="/vivero_hero.jpg"
          alt="Plantas de jade en maceteros de yeso en el vivero DecoJade de Parral"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center drift"
        />
        {/* Doble velo: uno vertical para el texto, uno cálido para unificar el color */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/72 to-forest-950/40" />
        <div className="absolute inset-0 bg-forest-900/25 mix-blend-multiply" />
        {/* Velo superior: sostiene la legibilidad del header sobre cualquier foto */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-forest-950/70 to-transparent" />

        <div className="container relative z-10 pb-16 pt-40 sm:pb-20">
          <div className="max-w-3xl">
            <span className="kicker text-olive-400 flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-olive-400/60" />
              Vivero propio · Parral, Maule
            </span>

            <h1 className="t-hero text-bone-100 mb-7">
              El jade no se compra.
              <br />
              <span className="text-olive-400 italic">Se hereda.</span>
            </h1>

            <p className="text-lg sm:text-xl text-bone-100/75 leading-relaxed max-w-xl mb-10">
              Siete años cultivando <em className="not-italic text-bone-100">Crassula ovata</em> desde
              el esqueje, en maceteros de yeso que hacemos nosotros mismos. Cada planta
              que vendemos creció acá, en Parral.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-14">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 bg-bone-100 text-forest-900 font-semibold px-8 py-4 rounded-full transition-all hover:bg-white hover:gap-3"
              >
                Ver los 7 formatos
                <ArrowDown size={18} strokeWidth={2.4} />
              </a>
              <Link
                href={waLink('Hola! Quiero preguntar por sus jades')}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 border border-bone-100/30 text-bone-100 font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-colors hover:bg-bone-100/10"
              >
                <MessageCircle size={18} />
                Preguntar por WhatsApp
              </Link>
            </div>

            <dl className="grid grid-cols-3 gap-4 sm:gap-10 max-w-lg border-t border-bone-100/15 pt-7">
              {[
                ['+7', 'años cultivando jade'],
                ['100%', 'producción propia'],
                ['+1.000', 'plantas por temporada'],
              ].map(([n, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl sm:text-4xl text-bone-100 tnum leading-none">{n}</dt>
                  <dd className="text-[0.68rem] sm:text-xs text-bone-100/60 mt-2 leading-snug">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ======================= BARRA DE CONFIANZA ======================= */}
      <section className="bg-bone-100 border-b border-forest-900/8">
        <div className="container grid grid-cols-2 lg:grid-cols-4 divide-x divide-forest-900/8">
          {[
            { Icon: Sprout, title: 'Del esqueje al árbol', desc: 'No revendemos. Producimos.' },
            { Icon: MapPin, title: 'Tarapacá #17, Parral', desc: 'Retiro con visita agendada' },
            { Icon: MessageCircle, title: 'Asesoría de por vida', desc: 'Te enseñamos a cuidarla' },
            { Icon: Boxes, title: 'Venta por mayor', desc: 'Desde 30 unidades' },
          ].map(({ Icon, title, desc }, i) => (
            <div key={title} className={`flex items-start gap-4 py-8 ${i % 2 === 0 ? 'pr-5 lg:px-7' : 'px-5 lg:px-7'}`}>
              <Icon size={20} strokeWidth={1.8} className="text-clay-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-sans font-semibold text-sm text-forest-900 leading-snug">{title}</h3>
                <p className="text-xs text-forest-800/80 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ CATÁLOGO ============================ */}
      <section id="catalogo" className="py-24 lg:py-32">
        <div className="container">
          <header className="max-w-2xl mb-14">
            <span className="kicker text-clay-600">El catálogo</span>
            <h2 className="t-section text-forest-900 mt-3 mb-5">
              Dos formatos, siete tamaños
            </h2>
            <p className="text-forest-800/80 leading-relaxed">
              Las plantas jóvenes y medianas van en macetero de yeso de producción propia.
              Las piezas grandes se montan como jardín bonsái en maceta abierta, con piedras
              y figura incluidas. Los precios son de retiro en el vivero.
            </p>
          </header>

          <CatalogExplorer />
        </div>
      </section>

      {/* ============================ MAYOREO ============================ */}
      <section id="mayoreo" className="relative py-24 lg:py-32 bg-forest-900 overflow-hidden grain">
        <div className="absolute -right-32 -top-32 w-[38rem] h-[38rem] rounded-full bg-forest-800/50 blur-3xl pointer-events-none" />

        <div className="container relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="kicker text-olive-400">Para negocios</span>
            <h2 className="t-section text-bone-100 mt-3 mb-6">
              Si vendes plantas, produzcámoslas juntos
            </h2>
            <p className="text-bone-100/70 leading-relaxed mb-6">
              Florerías, tiendas de decoración, organizadores de eventos y empresas que buscan
              un regalo corporativo que no termine en un cajón. Producimos más de 1.000 plantas
              por temporada y podemos reservar un lote a tu nombre.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Precio por unidad desde 30 plantas',
                'Mismo macetero de yeso, sin costo extra',
                'Coordinamos la fecha de entrega con anticipación',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-bone-100/80">
                  <Check size={16} strokeWidth={3} className="mt-1.5 shrink-0 text-olive-400" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-bone-100/15 pt-7">
              <div>
                <span className="font-display text-3xl text-olive-400 tnum leading-none">30</span>
                <span className="block text-xs text-bone-100/60 mt-1.5">unidades mínimo</span>
              </div>
              <div>
                <span className="font-display text-3xl text-olive-400 tnum leading-none">+1.000</span>
                <span className="block text-xs text-bone-100/60 mt-1.5">de capacidad por temporada</span>
              </div>
              <div>
                <span className="font-display text-3xl text-olive-400 tnum leading-none">33%</span>
                <span className="block text-xs text-bone-100/60 mt-1.5">bajo el precio al detalle</span>
              </div>
            </div>
          </div>

          <WholesaleCalculator />
        </div>
      </section>

      {/* =========================== FENG SHUI =========================== */}
      <section id="feng-shui" className="py-24 lg:py-32 bg-bone-100">
        <div className="container grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-4/5 rounded-card overflow-hidden ring-1 ring-forest-900/10">
              <Image
                src="/jade_bonsai_decorado.jpg"
                alt="Jade montado como jardín bonsái con piedras y figura de buda"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            {/* Nota flotante: aterriza el simbolismo en algo concreto */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 max-w-[15rem] bg-clay-500 text-bone-50 rounded-2xl p-5 shadow-xl">
              <p className="font-display text-lg leading-snug">
                «El que regala un jade está deseando prosperidad, no despachando un trámite.»
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="kicker text-clay-600">Por qué el jade</span>
            <h2 className="t-section text-forest-900 mt-3 mb-6">
              La planta que la gente sí conserva
            </h2>
            <p className="text-forest-800/80 leading-relaxed mb-5">
              La <em>Crassula ovata</em> guarda agua en sus hojas carnosas. Por eso perdona
              el olvido: aguanta semanas sin riego y sigue creciendo. En el Feng Shui esas
              mismas hojas simbolizan la riqueza que se acumula — de ahí el nombre árbol del dinero.
            </p>
            <p className="text-forest-800/80 leading-relaxed mb-8">
              Traducido a la práctica: es el regalo con la tasa de supervivencia más alta que
              puedes hacer. Y si igual se te complica, te asesoramos por WhatsApp las veces que haga falta.
            </p>

            <ul className="space-y-4 mb-9">
              {[
                ['Riego', 'Cada 2 o 3 semanas en verano, cada 4 a 6 en invierno.'],
                ['Luz', 'Cuatro a seis horas de luz al día. Le encanta la ventana.'],
                ['Vida útil', 'Décadas. Se pone más bonita con los años.'],
              ].map(([k, v]) => (
                <li key={k} className="flex flex-col sm:flex-row sm:gap-6 border-b border-forest-900/10 pb-4">
                  <span className="kicker text-forest-600 sm:w-24 shrink-0 pt-1">{k}</span>
                  <span className="text-forest-800/75">{v}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/cuidados"
              className="inline-flex items-center gap-2 font-semibold text-forest-800 border-b-2 border-clay-500 pb-1 transition-colors hover:text-clay-600"
            >
              Guía completa de cuidados
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================== HISTORIA =========================== */}
      <section className="py-24 lg:py-32">
        <div className="container max-w-3xl text-center">
          <span className="kicker text-clay-600">Quiénes somos</span>
          <h2 className="t-section text-forest-900 mt-3 mb-7">
            Empezamos con una planta
          </h2>
          <p className="text-lg text-forest-800/80 leading-relaxed mb-6">
            Hace más de siete años había un solo jade. Hoy hay cientos, en todas las etapas —
            esquejes enraizando, plantas de dos años en yeso, ejemplares de tronco grueso
            montados como bonsái. Todos crecieron en el mismo patio de Parral.
          </p>
          <p className="text-forest-800/80 leading-relaxed">
            No compramos plantas para revender. Eso es lo que nos permite darte un precio
            honesto y decirte con certeza qué edad tiene lo que te llevas.
          </p>

          <div className="rule-leaf my-14">
            <Sprout size={20} className="text-forest-400" />
          </div>

          {/* Tira editorial: tres momentos del mismo patio, en vez de un
              collage recortado a la fuerza. */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              ['/jade_chico_yeso.jpg', 'Plantas de dos años en macetero de yeso', 'aspect-3/4'],
              ['/vivero_hero.jpg', 'Lotes de jade listos en el vivero de Parral', 'aspect-3/4 mt-6 sm:mt-10'],
              ['/jade_bonsai_decorado.jpg', 'Ejemplar de tronco grueso montado como jardín bonsái', 'aspect-3/4'],
            ].map(([src, alt, extra]) => (
              <div key={src} className={`relative rounded-2xl overflow-hidden ring-1 ring-forest-900/10 ${extra}`}>
                <Image src={src} alt={alt} fill sizes="(max-width: 640px) 33vw, 240px" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="text-xs text-forest-800/75 mt-6">
            Esquejes, plantas en yeso y ejemplares montados como bonsái. Todo del mismo patio.
          </p>
        </div>
      </section>

      {/* ============================ VIVERO ============================ */}
      <section className="py-24 lg:py-32 bg-bone-100">
        <div className="container">
          <header className="max-w-2xl mb-12">
            <span className="kicker text-clay-600">Visítanos</span>
            <h2 className="t-section text-forest-900 mt-3 mb-5">
              Elige tu jade en persona
            </h2>
            <p className="text-forest-800/80 leading-relaxed">
              No hay dos ejemplares iguales, sobre todo en los formatos grandes. Si puedes venir,
              vienes y eliges el tuyo. Eso sí: escríbenos antes para asegurarte de que estemos.
            </p>
          </header>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 rounded-card overflow-hidden ring-1 ring-forest-900/10 bg-bone-50">
              <div className="aspect-16/10 relative">
                <iframe
                  title="Ubicación del vivero DecoJade en Parral"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Tarapac%C3%A1+17,+Parral,+Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-7 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <span className="kicker text-clay-600">Dirección</span>
                  <p className="font-display text-2xl text-forest-900 mt-1.5">Calle Tarapacá #17</p>
                  <p className="text-forest-800/80 text-sm">Parral, Región del Maule</p>
                </div>
                <Link
                  href={waLink('Hola! Quiero agendar una visita al vivero')}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-forest-800 text-bone-100 font-semibold px-6 py-3 rounded-full text-sm transition-colors hover:bg-forest-600"
                >
                  <MessageCircle size={16} />
                  Agendar visita
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 relative rounded-card overflow-hidden ring-1 ring-forest-900/10 bg-forest-100 min-h-[22rem]">
              <Image
                src="/afiche_oficial.png"
                alt="Afiche oficial de DecoJade con código QR y contacto"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================== CTA FINAL =========================== */}
      <section className="relative py-28 lg:py-36 bg-forest-950 text-center overflow-hidden grain">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <Image src="/jade_mediano_yeso.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>

        <div className="container relative z-10 max-w-2xl">
          <h2 className="t-section text-bone-100 mb-6">
            Escríbenos y te decimos qué hay listo hoy
          </h2>
          <p className="text-bone-100/60 mb-10 leading-relaxed">
            El stock cambia semana a semana. Cuéntanos qué buscas y para cuándo,
            y te mandamos fotos de lo que tenemos disponible ahora mismo.
          </p>
          <Link
            href={waLink('Hola! ¿Qué jades tienen disponibles hoy?')}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 bg-olive-400 text-forest-950 font-bold text-lg px-10 py-5 rounded-full transition-all hover:bg-bone-100 hover:gap-4"
          >
            <MessageCircle size={22} strokeWidth={2.2} />
            +56 9 8466 8005
          </Link>
          <p className="kicker text-bone-100/30 mt-8">
            Respondemos el mismo día
          </p>
        </div>
      </section>
    </>
  );
}
