'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/**
 * "Del esqueje al árbol": sección fija a pantalla completa donde el scroll
 * hace avanzar el crecimiento del jade, etapa por etapa (como un video que
 * se adelanta con la rueda del mouse).
 *
 * Sin JavaScript o con "reducir movimiento" se ve como una secuencia normal
 * de cuatro bloques, uno debajo del otro.
 */
const STAGES = [
    {
        src: '/jade_1000_real.png',
        alt: 'Esqueje de jade recién enraizado en macetero pequeño',
        kicker: 'Etapa 1 · El esqueje',
        title: 'Todo parte',
        accent: 'con una hoja.',
        text: 'Cortamos el esqueje de nuestras propias plantas madre y lo dejamos enraizar en el patio.',
    },
    {
        src: '/jade_chico_yeso.jpg',
        alt: 'Lote de jades de dos años en maceteros de yeso',
        kicker: 'Etapa 2 · Dos años',
        title: 'A los dos años',
        accent: 'ya es regalo.',
        text: 'Hojas firmes, tallo que se endurece y su macetero de yeso hecho por nosotros.',
    },
    {
        src: '/jade_3anos_yeso.jpg',
        alt: 'Jades de tres años con el tronco más formado',
        kicker: 'Etapa 3 · Tres años',
        title: 'El tronco',
        accent: 'empieza a mandar.',
        text: 'Aquí el jade deja de ser plantita y toma forma de árbol pequeño.',
    },
    {
        src: '/jade_bonsai_decorado.jpg',
        alt: 'Jade de tronco grueso montado como jardín bonsái con piedras y figura',
        kicker: 'Etapa 4 · Ejemplar',
        title: 'Y termina siendo',
        accent: 'un árbol que se hereda.',
        text: 'Los de tronco grueso los montamos como jardín bonsái, con piedras y figura.',
    },
];

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export default function GrowthScrub() {
    const sectionRef = useRef(null);
    const [p, setP] = useState(0);
    const [live, setLive] = useState(false);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        let target = 0, cur = 0, raf;
        const measure = () => {
            const el = sectionRef.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            target = clamp(-r.top / (r.height - window.innerHeight));
        };
        const tick = () => {
            setLive(true);
            measure();
            cur += (target - cur) * 0.14;
            if (Math.abs(target - cur) < 0.0005) cur = target;
            setP((old) => (Math.abs(old - cur) > 0.0004 ? cur : old));
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    const n = STAGES.length;
    const pos = p * (n - 1);                 // 0..3 posición continua
    const active = Math.min(n - 1, Math.round(pos));

    if (!live) {
        // Versión estática: legible, sin efectos.
        return (
            <section className="bg-forest-950 py-16 sm:py-24" aria-label="Del esqueje al árbol">
                <div className="container grid sm:grid-cols-2 gap-10">
                    {STAGES.map((s) => (
                        <figure key={s.src}>
                            <div className="relative aspect-4/3 rounded-card overflow-hidden">
                                <Image src={s.src} alt={s.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                            </div>
                            <figcaption className="mt-5">
                                <span className="kicker text-olive-400">{s.kicker}</span>
                                <p className="t-sub text-bone-100 mt-2">{s.title} <em className="text-olive-400">{s.accent}</em></p>
                                <p className="text-bone-100/65 mt-2 text-sm">{s.text}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section
            ref={sectionRef}
            data-shot="crecimiento"
            className="relative bg-forest-950 h-[380vh] sm:h-[440vh]"
            aria-label="Del esqueje al árbol"
        >
            <div className="sticky top-0 h-svh overflow-hidden isolate">
                {/* Capas de imagen: cada etapa aparece, hace un "push-in" y se funde con la siguiente */}
                {STAGES.map((s, i) => {
                    const d = pos - i;                         // -1..1 alrededor de su turno
                    const opacity = clamp(1 - Math.abs(d) * 1.6);
                    const scale = 1.16 - clamp((d + 1) / 2) * 0.16;
                    return (
                        <div
                            key={s.src}
                            className="absolute inset-0 -z-10 will-change-transform"
                            style={{ opacity, transform: `scale(${scale})` }}
                            aria-hidden={i !== active}
                        >
                            <Image src={s.src} alt={s.alt} fill sizes="100vw" className="object-cover" priority={i === 0} />
                        </div>
                    );
                })}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/25" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/80 via-forest-950/20 to-transparent" />
                <div className="absolute inset-0 -z-10 grain" />

                <Viewfinder />

                {/* Línea de tiempo vertical */}
                <ol className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-7 text-right">
                    {STAGES.map((s, i) => (
                        <li key={s.src} className={`flex items-center justify-end gap-3 transition-colors duration-500 ${i <= active ? 'text-bone-100' : 'text-bone-100/35'}`}>
                            <span className="kicker">{s.kicker.split(' · ')[1]}</span>
                            <span className={`w-2.5 h-2.5 rounded-full border transition-all duration-500 ${i === active ? 'bg-olive-400 border-olive-400 scale-125 shadow-[0_0_12px_var(--color-olive-400)]' : i < active ? 'bg-bone-100/70 border-bone-100/70' : 'border-bone-100/40'}`} />
                        </li>
                    ))}
                </ol>

                {/* Titulares: cambian por etapa */}
                <div className="container absolute inset-x-0 bottom-[clamp(6rem,16vh,9rem)]">
                    <div className="relative min-h-[15rem] sm:min-h-[13rem] max-w-2xl">
                        {STAGES.map((s, i) => (
                            <div
                                key={s.src}
                                className={`absolute bottom-0 left-0 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
                                    i === active ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm pointer-events-none'
                                }`}
                            >
                                <span className="kicker text-olive-400 flex items-center gap-2.5 mb-5">
                                    <span className="w-8 h-px bg-olive-400/60" />
                                    {s.kicker}
                                </span>
                                <h2 className="t-hero text-bone-100">
                                    {s.title}
                                    <br />
                                    <span className="text-olive-400 italic">{s.accent}</span>
                                </h2>
                                <p className="text-bone-100/75 mt-5 max-w-md leading-relaxed">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* HUD */}
                <div className="hud absolute left-4 right-4 top-24 justify-between sm:top-auto sm:right-auto sm:left-[max(1.5rem,calc((100vw-1240px)/2+1.5rem))] sm:bottom-8" aria-hidden="true">
                    <span className="rec"><i />VIVERO</span>
                    <span>ETAPA <b>{active + 1}</b> / {n}</span>
                    <span>CRECIMIENTO <b>{Math.round(p * 100)}</b>%</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-bone-100/10">
                    <div className="h-full bg-olive-400 origin-left shadow-[0_0_12px_var(--color-olive-400)]" style={{ transform: `scaleX(${p})` }} />
                </div>
            </div>
        </section>
    );
}

export function Viewfinder({ className = '' }) {
    return (
        <div className={`viewfinder ${className}`} aria-hidden="true">
            <i /><i /><i /><i />
        </div>
    );
}
