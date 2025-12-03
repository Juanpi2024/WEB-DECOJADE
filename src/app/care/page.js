import Link from 'next/link';

export const metadata = {
    title: "Cuidados y Significado - DecoJade JP",
    description: "Aprende sobre el riego, poda, significado y Feng Shui del Árbol de Jade.",
};

export default function CarePage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-green-900 text-white p-8 text-center">
                        <h1 className="text-4xl font-bold mb-4">El Árbol de Jade: Cuidados y Significado</h1>
                        <p className="text-xl opacity-90">Guía completa para mantener tu Crassula ovata saludable y atraer buena energía.</p>
                    </div>

                    <div className="p-8 md:p-12 space-y-12">
                        {/* Cuidados Básicos */}
                        <section>
                            <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                                Cuidados Básicos
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-green-900 mb-3">Riego</h3>
                                    <p className="text-gray-700">
                                        El error más común es el exceso de agua. El Jade almacena agua en sus hojas y tallos.
                                        <strong> Regla de oro:</strong> Deja que el sustrato se seque completamente entre riegos.
                                        En invierno, reduce drásticamente el riego (una vez al mes o menos). Si las hojas se arrugan, necesita agua; si se caen o ponen blandas, tiene exceso.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-green-900 mb-3">Luz y Ubicación</h3>
                                    <p className="text-gray-700">
                                        Necesitan mucha luz. Lo ideal es luz brillante indirecta o sol directo de la mañana (al menos 4-6 horas).
                                        Si no reciben suficiente luz, se estirarán (etiolación) y perderán su forma compacta.
                                        Evita el sol directo fuerte del mediodía en verano, ya que puede quemar las hojas.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Poda */}
                        <section>
                            <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="MContentCut" />
                                    {/* Simulating scissors icon path for brevity, replacing with standard scissors if needed */}
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379M19.5 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Poda y Mantenimiento
                            </h2>
                            <div className="prose text-gray-700 max-w-none">
                                <p>
                                    La poda no solo mantiene el tamaño, sino que estimula que el tronco se engrose, dándole esa apariencia de árbol anciano (bonsái).
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                    <li><strong>Cuándo podar:</strong> La mejor época es la primavera o principios de verano, cuando la planta está en crecimiento activo.</li>
                                    <li><strong>Cómo podar:</strong> Corta justo por encima de uno de los anillos marrones del tallo (nodos). De ahí saldrán dos nuevos brotes.</li>
                                    <li><strong>Limpieza:</strong> Retira hojas secas o dañadas para prevenir plagas y enfermedades.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Significado y Feng Shui */}
                        <section className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                            <h2 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                                Significado y Feng Shui
                            </h2>
                            <div className="space-y-6 text-gray-800">
                                <p>
                                    Conocida como la <strong>"Planta del Dinero"</strong> o <strong>"Árbol de la Abundancia"</strong>, el Jade es un símbolo clásico de prosperidad y buena suerte en la cultura asiática y el Feng Shui.
                                </p>

                                <div>
                                    <h4 className="text-lg font-bold text-yellow-900 mb-2">Simbolismo</h4>
                                    <p>Sus hojas verdes vibrantes, que se asemejan a monedas de jade, simbolizan crecimiento y renovación. Acumulan agua, lo que se asocia con la acumulación de riqueza.</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-yellow-900 mb-2">Ubicación Ideal (Feng Shui)</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><strong>Entrada Principal:</strong> Colocar un Jade cerca de la entrada invita a la prosperidad y la buena fortuna a entrar en tu hogar o negocio.</li>
                                        <li><strong>Esquina Sureste:</strong> En el mapa Bagua, el sureste es el área de la riqueza y la abundancia. Un Jade saludable aquí activa esta energía.</li>
                                        <li><strong>Oficina:</strong> Tener uno en el escritorio fomenta el crecimiento financiero y el éxito en los negocios.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="bg-gray-100 p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Listo para atraer buena energía?</h3>
                        <Link href="/" className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800 transition-colors">
                            Ver Colección de Jades
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
