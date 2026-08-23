import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';
import { waLink } from '@/lib/products';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-forest-950 text-bone-100 grain relative overflow-hidden">
            <div className="container relative z-10 pt-20 pb-10">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Marca */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <span className="relative block w-12 h-12 rounded-full overflow-hidden ring-1 ring-bone-100/20">
                                <Image src="/logo_decojade.jpg" alt="" fill sizes="48px" className="object-cover" />
                            </span>
                            <span className="font-display text-2xl">DecoJade</span>
                        </Link>
                        <p className="text-bone-100/55 leading-relaxed max-w-sm mb-7">
                            Vivero de plantas de jade en Parral, Región del Maule. Cultivamos cada
                            planta desde el esqueje y hacemos nuestros propios maceteros de yeso.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com/decojade"
                                target="_blank"
                                rel="noopener"
                                aria-label="DecoJade en Instagram"
                                className="w-11 h-11 grid place-items-center rounded-full ring-1 ring-bone-100/20 text-bone-100/70 transition-colors hover:bg-bone-100 hover:text-forest-950"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href={waLink('Hola DecoJade!')}
                                target="_blank"
                                rel="noopener"
                                aria-label="Escribir a DecoJade por WhatsApp"
                                className="w-11 h-11 grid place-items-center rounded-full ring-1 ring-bone-100/20 text-bone-100/70 transition-colors hover:bg-bone-100 hover:text-forest-950"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <a
                                href="mailto:profepablo2010@gmail.com"
                                aria-label="Escribir a DecoJade por correo"
                                className="w-11 h-11 grid place-items-center rounded-full ring-1 ring-bone-100/20 text-bone-100/70 transition-colors hover:bg-bone-100 hover:text-forest-950"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Enlaces */}
                    <nav className="lg:col-span-3">
                        <h2 className="kicker text-olive-400 mb-5">Catálogo</h2>
                        <ul className="space-y-3 text-bone-100/60">
                            <li><Link href="/catalogo" className="hover:text-bone-100 transition-colors">Ver los 7 formatos</Link></li>
                            <li><Link href="/catalogo#mayoreo" className="hover:text-bone-100 transition-colors">Cotizar por mayor</Link></li>
                            <li><Link href="/cuidados" className="hover:text-bone-100 transition-colors">Guía de cuidados</Link></li>
                            <li><Link href="/#feng-shui" className="hover:text-bone-100 transition-colors">Por qué el jade</Link></li>
                        </ul>
                    </nav>

                    {/* Contacto */}
                    <div className="lg:col-span-4">
                        <h2 className="kicker text-olive-400 mb-5">El vivero</h2>
                        <ul className="space-y-4 text-bone-100/60">
                            <li className="flex items-start gap-3">
                                <MapPin size={17} className="mt-1 shrink-0 text-bone-100/55" />
                                <span>
                                    Calle Tarapacá #17<br />
                                    Parral, Región del Maule
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MessageCircle size={17} className="mt-1 shrink-0 text-bone-100/55" />
                                <a href={waLink('Hola DecoJade!')} target="_blank" rel="noopener" className="hover:text-bone-100 transition-colors tnum">
                                    +56 9 8466 8005
                                </a>
                            </li>
                        </ul>
                        <p className="text-xs text-bone-100/55 mt-5 leading-relaxed">
                            Agenda tu visita antes de venir — el vivero no tiene horario de
                            atención fijo.
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-6 border-t border-bone-100/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-bone-100/55">
                        © {year} DecoJade · Parral, Chile
                    </p>
                    <p className="text-xs text-bone-100/55">
                        Precios en pesos chilenos, de retiro en vivero.
                    </p>
                </div>
            </div>
        </footer>
    );
}
