import Link from 'next/link';
import { Plus, MessageCircle } from 'lucide-react';
import { faqs } from '@/lib/faq';
import { waLink } from '@/lib/products';

/**
 * Preguntas frecuentes.
 * Usa <details> nativo: abre y cierra sin JavaScript, funciona con teclado
 * y lector de pantalla, y Google lee las respuestas aunque estén cerradas.
 */
export default function Faq({ tono = 'claro' }) {
    const oscuro = tono === 'oscuro';

    return (
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <header className="lg:col-span-4">
                <span className={`kicker ${oscuro ? 'text-olive-400' : 'text-clay-600'}`}>Antes de escribirnos</span>
                <h2 className={`t-section mt-3 mb-5 ${oscuro ? 'text-bone-100' : 'text-forest-900'}`}>
                    Preguntas frecuentes
                </h2>
                <p className={`leading-relaxed mb-7 ${oscuro ? 'text-bone-100/70' : 'text-forest-800/80'}`}>
                    Lo que más nos preguntan por WhatsApp. Si tu duda no está acá, escríbenos
                    y te respondemos el mismo día.
                </p>
                <Link
                    href={waLink('Hola! Tengo una pregunta sobre los jades')}
                    target="_blank"
                    rel="noopener"
                    data-wa="faq"
                    className={`inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full text-sm transition-colors ${
                        oscuro
                            ? 'bg-olive-400 text-forest-950 hover:bg-bone-100'
                            : 'bg-forest-800 text-bone-100 hover:bg-forest-600'
                    }`}
                >
                    <MessageCircle size={16} />
                    Hacer otra pregunta
                </Link>
            </header>

            <div className="lg:col-span-8">
                {faqs.map((f) => (
                    <details
                        key={f.q}
                        className={`group border-b ${oscuro ? 'border-bone-100/15' : 'border-forest-900/12'}`}
                    >
                        <summary
                            className={`flex cursor-pointer list-none items-center justify-between gap-6 py-5 min-h-[44px] [&::-webkit-details-marker]:hidden ${
                                oscuro ? 'text-bone-100' : 'text-forest-900'
                            }`}
                        >
                            <span className="font-display text-lg sm:text-xl leading-snug">{f.q}</span>
                            <span
                                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-300 group-open:rotate-45 ${
                                    oscuro ? 'bg-bone-100/10 text-olive-400' : 'bg-forest-900/6 text-clay-600'
                                }`}
                                aria-hidden="true"
                            >
                                <Plus size={18} strokeWidth={2.2} />
                            </span>
                        </summary>
                        <p className={`pb-6 pr-12 leading-relaxed ${oscuro ? 'text-bone-100/70' : 'text-forest-800/80'}`}>
                            {f.a}
                        </p>
                    </details>
                ))}
            </div>
        </div>
    );
}
