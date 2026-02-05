'use client';

import Link from 'next/link';

export default function CatalogoPage() {
    return (
        <section className="min-h-screen bg-[#F5F1E8] flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-2xl">
                <span className="text-6xl mb-6 block">🌿</span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1C4532] mb-6">
                    Catálogo Completo <br />
                    <span className="text-[#2F855A]">Próximamente</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    Estamos fotografiando y seleccionando nuevos ejemplares para ti.
                    Por ahora, puedes ver nuestra **Colección Destacada** disponible en la página de inicio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/#catalogo"
                        className="inline-flex items-center justify-center bg-[#1C4532] text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-[#2F855A] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Ver Colección Disponible
                    </Link>
                    <Link
                        href="https://wa.me/56984668005?text=Hola! Quiero saber qué jades tienen disponibles hoy"
                        target="_blank"
                        className="inline-flex items-center justify-center bg-white border-2 border-[#1C4532]/10 text-[#1C4532] font-semibold px-8 py-3.5 rounded-2xl hover:bg-gray-50 transition-all"
                    >
                        Consultar por WhatsApp
                    </Link>
                </div>
            </div>
        </section>
    );
}
