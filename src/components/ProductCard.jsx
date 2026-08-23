import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { formatCLP, waLink } from '@/lib/products';

export default function ProductCard({ product, priority = false }) {
    const {
        name, subtitle, price, priceLabel, priceNote,
        image, badge, benefits, description, featured, variablePrice,
    } = product;

    const displayPrice = priceLabel || formatCLP(price);

    // Sólo los formatos sin precio cerrado invitan a "Consultar".
    // El resto lleva un CTA de compra, que convierte mejor.
    const cta = variablePrice ? 'Consultar' : 'Lo quiero';
    const message = variablePrice
        ? `Hola! Me interesa el ${name} (${displayPrice}). ¿Qué ejemplares tienen disponibles?`
        : `Hola! Me interesa el ${name} (${displayPrice}). ¿Tienen stock?`;

    return (
        <article
            className={`group relative flex h-full flex-col overflow-hidden rounded-card bg-bone-50 transition-all duration-500 hover:-translate-y-1.5 ${
                featured
                    ? 'ring-2 ring-clay-500 shadow-[0_18px_50px_-24px_rgba(174,123,80,0.55)]'
                    : 'ring-1 ring-forest-900/8 hover:ring-forest-900/16 hover:shadow-[0_18px_50px_-28px_rgba(31,51,36,0.5)]'
            }`}
        >
            <div className="relative aspect-4/3 overflow-hidden bg-forest-100">
                <Image
                    src={image}
                    alt={`${name} — DecoJade`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={priority}
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                {/* Velo inferior: asienta el badge y da profundidad sin lavar la foto */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-950/45 to-transparent" />

                {badge && (
                    <span
                        className={`absolute top-4 left-4 kicker px-3 py-1.5 rounded-full backdrop-blur-md ${
                            featured
                                ? 'bg-clay-500 text-bone-50'
                                : 'bg-bone-50/90 text-forest-800'
                        }`}
                    >
                        {badge}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-4">
                    {subtitle && <span className="kicker text-clay-600">{subtitle}</span>}
                    <h3 className="t-sub text-forest-900 mt-1.5 group-hover:text-forest-600 transition-colors">
                        {name}
                    </h3>
                </div>

                <p className="text-[0.94rem] leading-relaxed text-forest-800/80 mb-6">
                    {description}
                </p>

                <ul className="space-y-2.5 mb-7">
                    {benefits?.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-sm text-forest-800/80">
                            <Check size={15} strokeWidth={3} className="mt-1 shrink-0 text-forest-500" />
                            {benefit}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-4 pt-5 border-t border-forest-900/10">
                    <div className="min-w-0">
                        <span className="block font-display text-3xl leading-none text-forest-900 tnum">
                            {displayPrice}
                        </span>
                        {/* La nota ocupa su línea siempre: así los pies de
                            todas las tarjetas de una fila quedan alineados. */}
                        <span className="block text-xs text-forest-800/75 mt-1.5 min-h-[1rem]">
                            {priceNote || '\u00A0'}
                        </span>
                    </div>

                    <Link
                        href={waLink(message)}
                        target="_blank"
                        rel="noopener"
                        aria-label={`${cta}: ${name}`}
                        className="shrink-0 inline-flex items-center gap-1.5 bg-forest-800 text-bone-50 text-sm font-semibold pl-5 pr-4 py-3 rounded-full transition-colors hover:bg-forest-600"
                    >
                        {cta}
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
