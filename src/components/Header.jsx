'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/products';

const navLinks = [
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Cuidados', href: '/cuidados' },
    { name: 'Feng Shui', href: '/#feng-shui' },
    { name: 'Por mayor', href: '/#mayoreo' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Bloquea el scroll del fondo mientras el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    // La home tiene hero oscuro a pantalla completa: el header parte transparente.
    // El resto de las páginas parten con fondo claro, así que va sólido desde arriba.
    const overHero = pathname === '/' && !scrolled;

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                    overHero
                        ? 'bg-transparent py-4'
                        : 'bg-bone-100/93 backdrop-blur-xl py-2.5 shadow-[0_1px_0_0_rgba(31,51,36,0.08)]'
                }`}
            >
                <div className="container flex items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="DecoJade — inicio">
                        <span className={`relative block rounded-full overflow-hidden transition-all duration-500 ring-1 ${
                            overHero
                                ? 'w-14 h-14 ring-white/40'
                                : 'w-11 h-11 ring-forest-900/15'
                        }`}>
                            <Image src="/logo_decojade.jpg" alt="" fill sizes="56px" className="object-cover" priority />
                        </span>
                        <span className="hidden sm:block leading-none">
                            <span className={`block font-display text-xl transition-colors ${overHero ? 'text-bone-100' : 'text-forest-900'}`}>
                                DecoJade
                            </span>
                            <span className={`kicker text-[0.6rem] transition-colors ${overHero ? 'text-bone-100/60' : 'text-forest-600'}`}>
                                Vivero · Parral
                            </span>
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                        overHero
                                            ? 'text-bone-100/80 hover:text-white hover:bg-white/10'
                                            : 'text-forest-800 hover:text-forest-600 hover:bg-forest-900/5'
                                    } ${active ? 'font-semibold' : ''}`}
                                >
                                    {link.name}
                                    {active && (
                                        <span className={`absolute left-4 right-4 -bottom-0.5 h-px ${overHero ? 'bg-white/70' : 'bg-clay-500'}`} />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link
                            href={waLink('Hola! Me interesa una planta de jade')}
                            target="_blank"
                            rel="noopener"
                            className={`hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                                overHero
                                    ? 'bg-bone-100 text-forest-900 hover:bg-white'
                                    : 'bg-forest-800 text-bone-100 hover:bg-forest-600'
                            }`}
                        >
                            <MessageCircle size={16} strokeWidth={2.2} />
                            Escribir
                        </Link>

                        <button
                            onClick={() => setOpen(true)}
                            aria-label="Abrir menú"
                            className={`lg:hidden p-2.5 rounded-full transition-colors ${
                                overHero ? 'text-bone-100 hover:bg-white/10' : 'text-forest-900 hover:bg-forest-900/5'
                            }`}
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Menú móvil a pantalla completa */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
                    open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
            >
                <div className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
                <div
                    className={`absolute inset-y-0 right-0 w-full max-w-sm bg-bone-100 flex flex-col transition-transform duration-300 ease-out ${
                        open ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex items-center justify-between px-6 py-5 border-b border-forest-900/10">
                        <span className="font-display text-2xl text-forest-900">DecoJade</span>
                        <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="p-2 -mr-2 text-forest-800">
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex-1 px-6 py-4 overflow-y-auto">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="flex items-baseline gap-4 py-4 border-b border-forest-900/8 group"
                            >
                                <span className="kicker text-clay-600 tnum">0{i + 1}</span>
                                <span className="font-display text-2xl text-forest-900 group-hover:text-forest-600 transition-colors">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </nav>
                    <div className="p-6 border-t border-forest-900/10">
                        <Link
                            href={waLink('Hola! Me interesa una planta de jade')}
                            target="_blank"
                            rel="noopener"
                            className="flex items-center justify-center gap-2 w-full bg-forest-800 text-bone-100 font-semibold py-4 rounded-full"
                        >
                            <MessageCircle size={18} />
                            Escribir por WhatsApp
                        </Link>
                        <p className="text-center text-xs text-forest-800/75 mt-4">
                            Tarapacá #17, Parral · +56 9 8466 8005
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
