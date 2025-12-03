import Link from 'next/link';

export const metadata = {
    title: "Ideas de Decoración - DecoJade JP",
    description: "Inspírate con ideas para decorar tu hogar con Árboles de Jade.",
};

export default function IdeasPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-green-900 mb-4">Ideas de Decoración con Jade</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre cómo el Árbol de Jade puede transformar diferentes espacios de tu hogar.
                    </p>
                </div>

                {/* Estilos de Hogar */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Estilos de Hogar</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-64 bg-gray-200 relative">
                                <img src="https://placehold.co/600x400?text=Minimalista" alt="Estilo Minimalista" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Minimalista</h3>
                                <p className="text-gray-600">
                                    Una maceta blanca o de cemento con un solo Jade escultural es perfecta para espacios limpios y modernos. Menos es más.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-64 bg-gray-200 relative">
                                <img src="https://placehold.co/600x400?text=Rustico" alt="Estilo Rústico" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Rústico</h3>
                                <p className="text-gray-600">
                                    Combina tu Jade con macetas de barro o cerámica artesanal. La madera natural y los tonos tierra resaltan el verde vibrante de las hojas.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-64 bg-gray-200 relative">
                                <img src="https://placehold.co/600x400?text=Moderno" alt="Estilo Moderno" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Moderno</h3>
                                <p className="text-gray-600">
                                    Juega con macetas de colores oscuros o metálicos. Agrupa varios Jades de diferentes tamaños para crear un rincón verde impactante.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Puntos Focales */}
                <section className="mb-16 bg-green-50 rounded-2xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Puntos Focales</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-green-900 mb-4">En el Escritorio</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                Un Jade pequeño en tu escritorio no solo decora, sino que según el Feng Shui, fomenta la concentración y atrae el éxito profesional.
                            </p>
                            <p className="text-lg text-gray-700">
                                Elige una variedad compacta como el "Jade Hobbit" para que no ocupe demasiado espacio pero aporte vida a tu zona de trabajo.
                            </p>
                        </div>
                        <div className="h-80 bg-white rounded-xl shadow-lg overflow-hidden">
                            <img src="https://placehold.co/600x400?text=Escritorio" alt="Jade en escritorio" className="w-full h-full object-cover" />
                        </div>

                        <div className="order-last md:order-first h-80 bg-white rounded-xl shadow-lg overflow-hidden">
                            <img src="https://placehold.co/600x400?text=Entrada" alt="Jade en la entrada" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-green-900 mb-4">La Entrada de Casa</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                La entrada es la boca del Chi (energía). Colocar un Jade grande y saludable aquí da la bienvenida a la prosperidad y la buena energía a tu hogar.
                            </p>
                            <p className="text-lg text-gray-700">
                                Asegúrate de que reciba suficiente luz, o rótalo periódicamente para mantenerlo feliz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Antes y Después */}
                <section className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-green-800 mb-8">El Viaje del Jade</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        Con paciencia y cuidado, un pequeño esqueje puede convertirse en un majestuoso árbol con el paso de los años.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div className="w-full md:w-1/3">
                            <div className="bg-white p-4 rounded-xl shadow-md">
                                <img src="https://placehold.co/400x400?text=Joven" alt="Jade Joven" className="w-full rounded-lg mb-4" />
                                <p className="font-bold text-gray-700">Año 1: El Comienzo</p>
                            </div>
                        </div>
                        <div className="text-green-600 text-4xl hidden md:block">➜</div>
                        <div className="text-green-600 text-4xl md:hidden">⬇</div>
                        <div className="w-full md:w-1/3">
                            <div className="bg-white p-4 rounded-xl shadow-md">
                                <img src="https://placehold.co/400x400?text=Adulto" alt="Jade Adulto" className="w-full rounded-lg mb-4" />
                                <p className="font-bold text-gray-700">Año 5: Majestuosidad</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center">
                    <Link href="/" className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800 transition-colors">
                        Encuentra tu Jade Ideal
                    </Link>
                </div>
            </main>
        </div>
    );
}
