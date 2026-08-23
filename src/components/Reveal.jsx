'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Aparición suave al entrar en pantalla.
 * Regla de oro: si el JavaScript no corre, el contenido se ve igual.
 * Por eso el estado "oculto" lo aplica el propio componente al montarse,
 * nunca el HTML que llega del servidor.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [armed, setArmed] = useState(false);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !('IntersectionObserver' in window)) return;

        setArmed(true);

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
        );
        io.observe(el);

        // Red de seguridad: si algo impide que el observador dispare,
        // el contenido aparece igual al segundo.
        const t = setTimeout(() => setShown(true), 1200);
        return () => { io.disconnect(); clearTimeout(t); };
    }, []);

    const hidden = armed && !shown;

    return (
        <div
            ref={ref}
            className={`transition-[opacity,transform] duration-700 ease-out ${
                hidden ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
