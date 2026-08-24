import Link from 'next/link';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import CatalogExplorer from '@/components/CatalogExplorer';
import WholesaleCalculator from '@/components/WholesaleCalculator';
import { allProducts, formatCLP, waLink, YESO } from '@/lib/products';

export const metadata = {
  // El layout ya añade " | DecoJade" con su template de título.
  title: 'Catálogo de plantas de jade en Parral',
  description:
    'Siete formatos de jade (Crassula ovata) cultivados en Parral: desde el pack mini de $1.000 hasta ejemplares de más de 50 cm montados como jardín bonsái. Precios de retiro en vivero.',
};

export default function CatalogoPage() {
  return (
    <>
      {/* ============================ CABECERA ============================ */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-forest-900 grain overflow-hidden">
        <div className="absolute -left-40 -bottom-40 w-[34rem] h-[34rem] rounded-full bg-forest-800/60 blur-3xl pointer-events-none" />
        <div className="container relative z-10 max-w-3xl">
          <span className="kicker text-olive-400 flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-olive-400/60" />
            Catálogo vigente
          </span>
          <h1 className="t-hero text-bone-100 mb-6">Todo lo que hay<br />en el vivero</h1>
          <p className="text-lg text-bone-100/70 leading-relaxed">
            Siete formatos, de $1.000 a piezas de más de 50 cm, todos cultivados por nosotros
            en Parral. Cada planta va con su macetero incluido. Los precios son de retiro en el
            vivero, con visita agendada por WhatsApp.
          </p>
        </div>
      </section>

      {/* ============================ PRODUCTOS ============================ */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <CatalogExplorer />
        </div>
      </section>

      {/* ========================= TABLA COMPARATIVA ========================= */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <header className="max-w-2xl mb-10">
            <span className="kicker text-clay-600">De un vistazo</span>
            <h2 className="t-section text-forest-900 mt-3 mb-4">Lista de precios</h2>
            <p className="text-forest-800/80 leading-relaxed">
              Para comparar rápido o para mandar por WhatsApp a quien decide la compra.
            </p>
          </header>

          <div className="rounded-card ring-1 ring-forest-900/10 bg-bone-50 overflow-x-auto">
            <table className="w-full min-w-[38rem] text-left">
              <thead>
                <tr className="border-b border-forest-900/10">
                  <th scope="col" className="kicker text-forest-800/75 px-6 py-4">Producto</th>
                  <th scope="col" className="kicker text-forest-800/75 px-6 py-4">Formato</th>
                  <th scope="col" className="kicker text-forest-800/75 px-6 py-4 text-right">Precio</th>
                  <th scope="col" className="sr-only">Consultar</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((p) => (
                  <tr key={p.id} className="border-b border-forest-900/6 last:border-0 hover:bg-forest-50 transition-colors">
                    <th scope="row" className="px-6 py-5 font-display text-lg font-normal text-forest-900">
                      {p.name}
                      {p.subtitle && (
                        <span className="block kicker text-forest-800/75 mt-1">{p.subtitle}</span>
                      )}
                    </th>
                    <td className="px-6 py-5 text-sm text-forest-800/80">
                      {p.tags?.includes('pieza') ? 'Bonsái decorado' : 'Macetero'}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="font-display text-xl text-forest-900 tnum whitespace-nowrap">
                        {p.priceLabel || formatCLP(p.price)}
                      </span>
                      {p.priceNote && (
                        <span className="block text-xs text-forest-800/75 mt-1">{p.priceNote}</span>
                      )}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <Link
                        href={waLink(`Hola! Me interesa el ${p.name}. ¿Tienen disponible?`)}
                        target="_blank"
                        rel="noopener"
                        aria-label={`Consultar por ${p.name}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-forest-700 hover:text-clay-600 transition-colors whitespace-nowrap"
                      >
                        Consultar
                        <ArrowUpRight size={15} strokeWidth={2.5} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-forest-800/75 mt-5 max-w-3xl leading-relaxed">
            Precios de retiro en Tarapacá #17, Parral. {YESO.nota} Los formatos con rango se
            cotizan según el ejemplar, porque no hay dos troncos iguales.
          </p>
        </div>
      </section>

      {/* ============================ MAYOREO ============================ */}
      <section id="mayoreo" className="relative py-24 lg:py-32 bg-forest-900 overflow-hidden grain">
        <div className="absolute -right-32 -top-24 w-[34rem] h-[34rem] rounded-full bg-forest-800/50 blur-3xl pointer-events-none" />
        <div className="container relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="kicker text-olive-400">Para negocios</span>
            <h2 className="t-section text-bone-100 mt-3 mb-6">
              ¿Compras para revender?
            </h2>
            <p className="text-bone-100/70 leading-relaxed mb-4">
              El Jade 3 años es el que producimos en volumen y el que te conviene para
              florería, tienda o evento corporativo. Mueve la barra y te llega el número.
            </p>
            <p className="text-bone-100/60 text-sm leading-relaxed">
              Para pedidos de otros formatos escríbenos: según la cantidad y la fecha,
              armamos el lote a pedido.
            </p>
          </div>
          <WholesaleCalculator />
        </div>
      </section>

      {/* =========================== CTA FINAL =========================== */}
      <section className="py-24 lg:py-28 bg-bone-100 text-center">
        <div className="container max-w-xl">
          <h2 className="t-section text-forest-900 mb-5">¿No sabes cuál elegir?</h2>
          <p className="text-forest-800/80 mb-9 leading-relaxed">
            Cuéntanos para quién es y cuánto quieres gastar. Te mandamos dos o tres fotos
            de lo que hay listo hoy y decides con la planta a la vista.
          </p>
          <Link
            href={waLink('Hola! Necesito ayuda para elegir un jade. Te cuento para quién es...')}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 bg-forest-800 text-bone-100 font-semibold px-8 py-4 rounded-full transition-all hover:bg-forest-600 hover:gap-3.5"
          >
            <MessageCircle size={18} />
            Ayúdenme a elegir
          </Link>
        </div>
      </section>
    </>
  );
}
