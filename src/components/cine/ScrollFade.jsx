'use client';

import { useEffect, useRef } from 'react';

/**
 * Parallax del hero: al bajar, el contenido sube más lento que la página
 * y se desvanece. Solo transform/opacity, así no hay saltos de layout.
 */
export default function ScrollFade({ children, className = '', speed = 0.25 }) {
    const ref = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let raf = 0;
        const update = () => {
            raf = 0;
            const el = ref.current;
            if (!el) return;
            const y = window.scrollY, h = window.innerHeight;
            if (y > h) return;
            el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
            el.style.opacity = String(Math.max(0, 1 - y / (h * 0.85)));
        };
        const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
        window.addEventListener('scroll', onScroll, { passive: true });
        update();
        return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
    }, [speed]);

    return <div ref={ref} className={`will-change-transform ${className}`}>{children}</div>;
}
