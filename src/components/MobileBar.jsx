'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { waLink } from '@/lib/products';

/**
 * Barra fija inferior, sólo en celular.
 * En pantallas chicas el botón "Escribir" del header no cabe, y el cliente
 * perdía el WhatsApp de vista apenas bajaba del hero. Esta barra aparece
 * al pasar el hero —para no duplicar sus botones— y queda a mano del pulgar.
 * El botón redondo abre el chatbot, que en celular ya no flota encima de
 * todo el contenido.
 */
export default function MobileBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={`lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
                visible ? 'translate-y-0' : 'translate-y-full'
            }`}
            aria-hidden={!visible}
        >
            <div className="bg-bone-100/95 backdrop-blur-xl border-t border-forest-900/10 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center gap-3">
                <a
                    href={waLink('Hola! Quiero preguntar por sus jades')}
                    target="_blank"
                    rel="noopener"
                    data-wa="barra-movil"
                    tabIndex={visible ? 0 : -1}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-800 text-bone-100 font-semibold py-3.5 rounded-full min-h-[48px] active:bg-forest-600"
                >
                    <MessageCircle size={18} strokeWidth={2.2} />
                    Escribir por WhatsApp
                </a>
                <button
                    type="button"
                    onClick={() => window.dispatchEvent(new Event('decojade:abrir-chat'))}
                    tabIndex={visible ? 0 : -1}
                    aria-label="Abrir el chat con el experto DecoJade"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full ring-1 ring-forest-900/15 text-forest-800 active:bg-forest-900/5"
                >
                    <Sparkles size={20} strokeWidth={2} />
                </button>
            </div>
        </div>
    );
}
