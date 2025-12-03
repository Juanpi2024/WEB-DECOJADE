import Link from 'next/link';

export const metadata = {
    title: "Envíos y Preguntas Frecuentes - DecoJade JP",
    description: "Información sobre nuestros envíos seguros y respuestas a tus dudas.",
};

export default function ShippingPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Envíos y Confianza</h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Política de Envío */}
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-green-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Envío Seguro</h2>
                            <p className="text-gray-600 mb-4">
                                Sabemos que enviar plantas puede dar miedo. Por eso, hemos perfeccionado nuestro método de embalaje:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li><strong>Protección de Raíces:</strong> Envolvemos la maceta para mantener la humedad y evitar derrames.</li>
                                <li><strong>Acolchado:</strong> Usamos papel reciclado y burbujas biodegradables para proteger las hojas.</li>
                                <li><strong>Caja Robusta:</strong> Cajas de cartón reforzado que resisten el viaje.</li>
                            </ul>
                        </div>

                        {/* Garantía */}
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-green-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Garantía "Planta Feliz"</h2>
                            <p className="text-gray-600 mb-4">
                                Queremos que ames tu Jade. Si tu planta llega dañada o no sobrevive los primeros 15 días (siguiendo nuestros cuidados), te la reemplazamos gratis.
                            </p>
                            <p className="text-gray-600 font-bold">
                                ¡Tu satisfacción y la salud de nuestras plantas son nuestra prioridad!
                            </p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <section className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas Frecuentes</h2>
                        <div className="space-y-6">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-gray-800">
                                    <span>¿Cuánto tarda el envío?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                    Procesamos los pedidos en 24-48 horas. El envío suele tardar entre 3 y 5 días hábiles dependiendo de tu ubicación.
                                </p>
                            </details>
                            <hr className="border-gray-200" />
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-gray-800">
                                    <span>¿Hacen envíos internacionales?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                    Por el momento solo realizamos envíos nacionales para asegurar que las plantas lleguen en perfecto estado.
                                </p>
                            </details>
                            <hr className="border-gray-200" />
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-gray-800">
                                    <span>¿Qué hago si mi planta tiene hojas amarillas?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                    Suele ser signo de exceso de riego. Deja secar el sustrato completamente. Revisa nuestra sección de <Link href="/care" className="text-green-600 hover:underline">Cuidados</Link> para más detalles.
                                </p>
                            </details>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
