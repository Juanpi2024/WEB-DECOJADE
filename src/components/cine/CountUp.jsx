'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Cifra que cuenta desde 0 al entrar en pantalla. Acepta textos como
 * "+1.000" o "100%": separa prefijo, número y sufijo.
 * El HTML del servidor trae la cifra final (sirve sin JS y para Google).
 */
export default function CountUp({ value, className = '' }) {
    const m = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
    const [shown, setShown] = useState(value);
    const ref = useRef(null);

    useEffect(() => {
        if (!m) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const [, pre, num, suf] = m;
        const to = parseInt(num.replace(/\./g, ''), 10);
        const fmt = (v) => pre + v.toLocaleString('es-CL') + suf;
        setShown(fmt(0));
        let raf;
        const io = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            io.disconnect();
            const t0 = performance.now(), dur = 1600;
            const step = (now) => {
                const k = Math.min(1, (now - t0) / dur);
                setShown(fmt(Math.round(to * (1 - Math.pow(1 - k, 4)))));
                if (k < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
        }, { threshold: 0.4 });
        io.observe(ref.current);
        return () => { io.disconnect(); cancelAnimationFrame(raf); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return <span ref={ref} className={className}>{shown}</span>;
}
