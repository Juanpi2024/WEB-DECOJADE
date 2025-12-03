import Link from 'next/link';

export const metadata = {
    title: "Sobre Nosotros - DecoJade JP",
    description: "Conoce la historia detrás de DecoJade JP y nuestra pasión por las plantas.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-64 bg-green-900 relative flex items-center justify-center">
                        <div className="text-center text-white p-4">
                            <h1 className="text-4xl font-bold mb-2">Nuestra Historia</h1>
                            <p className="text-xl opacity-90">Pasión por la naturaleza, diseño y armonía.</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">¿Quiénes Somos?</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                En <strong>DecoJade JP</strong>, no solo vendemos plantas; compartimos una pasión. Todo comenzó con un pequeño esqueje regalado por un amigo, que con los años se transformó en un árbol majestuoso que trajo vida y serenidad a nuestro hogar.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Nos dimos cuenta de que el Árbol de Jade (Crassula ovata) es más que una suculenta: es un compañero de vida, resistente y generoso, que nos enseña sobre la paciencia y el crecimiento constante.
                            </p>
                        </section>

                        <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                            <h2 className="text-2xl font-bold text-green-800 mb-4">¿Qué significa "JP"?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                JP son las iniciales de <strong>"Jardín Próspero"</strong> (o quizás tus iniciales, ¡tú decides la historia final!). Para nosotros, representa la promesa de que cada planta que sale de nuestro vivero lleva consigo la semilla de la prosperidad y el bienestar para tu espacio.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">Nuestra Misión y Valores</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <div>
                                        <strong className="block text-gray-900">Sostenibilidad</strong>
                                        <span className="text-gray-600">Cultivamos de manera responsable, minimizando el uso de plásticos y químicos.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <div>
                                        <strong className="block text-gray-900">Calidad Premium</strong>
                                        <span className="text-gray-600">Solo seleccionamos los especímenes más sanos y robustos para nuestros clientes.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <div>
                                        <strong className="block text-gray-900">Armonía (Feng Shui)</strong>
                                        <span className="text-gray-600">Creemos en el poder de las plantas para equilibrar la energía de los espacios.</span>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <div className="text-center pt-8 border-t">
                            <p className="text-gray-600 italic mb-6">"Un hogar con plantas es un hogar con vida."</p>
                            <Link href="/" className="inline-block border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-700 hover:text-white transition-colors">
                                Ver Nuestra Colección
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
