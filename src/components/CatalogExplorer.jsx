'use client';

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import Reveal from './Reveal';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { yesoProducts, bonsaiProducts, occasions, waLink } from '@/lib/products';

/**
 * Guía rápida del catálogo.
 * En vez de esconder productos al filtrar (que descoloca la grilla y le
 * oculta el rango completo al cliente), atenúa los que no calzan y deja
 * los recomendados en primer plano. Se ve todo, pero la vista te guía.
 */
export default function CatalogExplorer() {
    const [occasion, setOccasion] = useState(null);

    const matches = useMemo(() => {
        if (!occasion) return null;
        return new Set(
            [...yesoProducts, ...bonsaiProducts]
                .filter((p) => p.tags?.includes(occasion))
                .map((p) => p.id)
        );
    }, [occasion]);

    const dim = (id) => (matches && !matches.has(id) ? 'opacity-35 saturate-50 scale-[0.985]' : 'opacity-100');

    const count = matches ? matches.size : null;

    return (
        <div>
            {/* Chips de guía */}
            <div className="mb-12">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                    <span className="kicker text-forest-800/75 mr-1">¿Para qué lo buscas?</span>
                    {occasions.map((o) => {
                        const active = occasion === o.id;
                        return (
                            <button
                                key={o.id}
                                onClick={() => setOccasion(active ? null : o.id)}
                                aria-pressed={active}
                                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300 ${
                                    active
                                        ? 'bg-forest-800 text-bone-100 border-forest-800'
                                        : 'bg-transparent text-forest-800 border-forest-900/15 hover:border-forest-600 hover:bg-forest-900/4'
                                }`}
                            >
                                {o.label}
                            </button>
                        );
                    })}
                    {occasion && (
                        <button
                            onClick={() => setOccasion(null)}
                            className="text-sm text-clay-600 underline underline-offset-4 hover:text-clay-600 transition-colors"
                        >
                            Ver todo
                        </button>
                    )}
                </div>

                <p aria-live="polite" className="text-sm text-forest-800/80 mt-4">
                    {occasion
                        ? `Te recomendamos ${count} ${count === 1 ? 'opción' : 'opciones'} — el resto queda atenuado, pero sigue disponible.`
                        : 'Siete formatos, de $1.000 a piezas de más de 50 cm. Toca una opción y te marcamos las que calzan.'}
                </p>
            </div>

            {/* Formato Yeso */}
            <div className="mb-20">
                <FormatHeading
                    title="Formato Yeso"
                    note="Macetero de cemento blanco, hecho por nosotros"
                />
                {/* Grilla de 6 columnas: 5 productos entran como 3 + 2 sin
                    dejar un hueco suelto al final de la fila. */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
                    {yesoProducts.map((p, i) => (
                        <Reveal
                            key={p.id}
                            delay={(i % 3) * 90}
                            className={`h-full ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
                        >
                            <div className={`h-full transition-all duration-500 ${dim(p.id)}`}>
                                <ProductCard product={p} priority={i < 3} />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Formato Bonsái Decorado */}
            <div>
                <FormatHeading
                    title="Formato Bonsái Decorado"
                    note="Maceta abierta · piedras y figura incluidas"
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {bonsaiProducts.map((p, i) => (
                        <Reveal key={p.id} delay={i * 90} className="h-full lg:col-span-1">
                            <div className={`h-full transition-all duration-500 ${dim(p.id)}`}>
                                <ProductCard product={p} />
                            </div>
                        </Reveal>
                    ))}

                    {/* Tercera celda: en vez de dejar el hueco, abrimos la
                        puerta al encargo a medida — que es donde está el margen. */}
                    <Reveal delay={180} className="h-full sm:col-span-2 lg:col-span-1">
                        <aside className="flex h-full flex-col justify-center rounded-card border border-dashed border-forest-900/25 bg-forest-50/60 p-8 text-center">
                            <span className="kicker text-clay-600 mb-3">A pedido</span>
                            <h4 className="t-sub text-forest-900 mb-3">¿Buscas algo más grande?</h4>
                            <p className="text-sm text-forest-800/80 leading-relaxed mb-6">
                                Tenemos ejemplares que no publicamos porque hay uno solo de cada uno.
                                Cuéntanos qué imaginas y te mandamos fotos de lo que hay en el patio.
                            </p>
                            <Link
                                href={waLink('Hola! Busco un jade grande, fuera de catálogo. ¿Qué ejemplares tienen?')}
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center justify-center gap-2 self-center bg-forest-800 text-bone-50 text-sm font-semibold px-6 py-3 rounded-full transition-colors hover:bg-forest-600"
                            >
                                Pedir fotos
                                <ArrowUpRight size={16} strokeWidth={2.5} />
                            </Link>
                        </aside>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

function FormatHeading({ title, note }) {
    return (
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-7 pb-4 border-b border-forest-900/12">
            <h3 className="font-display text-2xl text-forest-900">{title}</h3>
            <span className="text-sm text-forest-800/75">{note}</span>
        </div>
    );
}
