'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/components/CartContext';
import products from '../../../data/products.json';

export default function ProductPage() {
    const params = useParams();
    const { addToCart } = useCart();

    // Handle case where params might not be ready or id is missing
    if (!params?.id) return null;

    const id = parseInt(params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
                <p className="text-gray-600 mb-8">El producto que buscas no existe.</p>
                <Link href="/" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-900 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Volver a la galería
            </Link>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-96 md:h-auto bg-gray-100 relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/800x800?text=${encodeURIComponent(product.name)}`;
                            }}
                        />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="text-sm text-green-600 font-bold uppercase tracking-wider">Tamaño {product.size}</span>
                            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
                            <p className="text-3xl text-green-800 font-bold">${product.price.toFixed(2)}</p>
                        </div>

                        <div className="prose text-gray-600 mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Instrucciones de cuidado</h3>
                            <p>{product.careInstructions}</p>
                            <p className="mt-4">
                                Los árboles de jade son suculentas que prosperan con luz brillante y requieren un riego mínimo.
                                Perfectos para añadir un toque natural a tu hogar u oficina.
                            </p>
                        </div>

                        <button
                            onClick={() => addToCart(product)}
                            className="w-full md:w-auto bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                        >
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
