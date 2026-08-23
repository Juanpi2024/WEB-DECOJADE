'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { WHOLESALE, formatCLP, waLink } from '@/lib/products';

/**
 * Cotizador por mayor.
 * Un florista no quiere leer "precios especiales por volumen": quiere ver
 * el número. Mueve la barra, ve el total y le llega a Juan Pablo por
 * WhatsApp con la cantidad ya escrita.
 */
export default function WholesaleCalculator() {
    const { productName, unitPrice, retailPrice, minQty } = WHOLESALE;
    const [qty, setQty] = useState(50);

    // Porcentaje recorrido: pinta la parte izquierda del riel.
    // WebKit no tiene ::-moz-range-progress, así que se hace con un degradado.
    const pct = ((qty - minQty) / (300 - minQty)) * 100;

    const total = qty * unitPrice;
    const saving = qty * (retailPrice - unitPrice);
    const negotiable = qty >= 100;

    const message =
        `Hola! Quiero cotizar ${qty} unidades de ${productName} por mayor. ` +
        `Según la web serían ${formatCLP(total)} (${formatCLP(unitPrice)} c/u). ¿Lo confirmamos?`;

    return (
        <div className="rounded-card bg-forest-950/40 ring-1 ring-bone-100/15 p-7 sm:p-9 backdrop-blur-sm">
            <label htmlFor="qty" className="kicker text-olive-400 block mb-5">
                Calcula tu pedido
            </label>

            <div className="flex items-baseline gap-3 mb-1">
                <output htmlFor="qty" className="font-display text-6xl sm:text-7xl text-bone-100 tnum leading-none">
                    {qty}
                </output>
                <span className="text-bone-100/60 text-lg">unidades</span>
            </div>
            <p className="text-sm text-bone-100/60 mb-7">{productName} · desde {minQty} unidades</p>

            <input
                id="qty"
                type="range"
                min={minQty}
                max={300}
                step={10}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="range-jade mb-1"
                style={{ '--range-pct': `${pct}%` }}
                aria-describedby="qty-total"
            />
            <div className="flex justify-between kicker text-bone-100/55 mb-8">
                <span className="tnum">{minQty}</span>
                <span className="tnum">300</span>
            </div>

            <div id="qty-total" className="grid grid-cols-2 gap-4 mb-7">
                <div className="rounded-2xl bg-bone-100/8 p-5">
                    <span className="kicker text-bone-100/60 block mb-2">Total estimado</span>
                    <span className="font-display text-3xl text-bone-100 tnum">{formatCLP(total)}</span>
                </div>
                <div className="rounded-2xl bg-bone-100/8 p-5">
                    <span className="kicker text-bone-100/60 block mb-2">Ahorras</span>
                    <span className="font-display text-3xl text-olive-400 tnum">{formatCLP(saving)}</span>
                    <span className="block text-xs text-bone-100/55 mt-1.5">
                        vs. {formatCLP(retailPrice)} por unidad al detalle
                    </span>
                </div>
            </div>

            {negotiable && (
                <p className="text-sm text-olive-300 mb-6 flex gap-2">
                    <span aria-hidden>·</span>
                    Sobre 100 unidades conversemos el precio — a ese volumen calzamos la producción a tu pedido.
                </p>
            )}

            <Link
                href={waLink(message)}
                target="_blank"
                rel="noopener"
                className="inline-flex w-full items-center justify-center gap-2.5 bg-olive-400 text-forest-950 font-semibold px-8 py-4 rounded-full transition-colors hover:bg-bone-100"
            >
                <MessageCircle size={18} strokeWidth={2.2} />
                Enviar esta cotización
            </Link>

            <p className="text-xs text-bone-100/55 text-center mt-4">
                Es una estimación. El precio final lo confirmamos por WhatsApp según stock y fecha de entrega.
            </p>
        </div>
    );
}
