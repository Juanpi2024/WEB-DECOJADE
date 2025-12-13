'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
    const {
        id,
        name,
        price,
        originalPrice,
        image,
        category,
        badge,
        inStock = true,
    } = product;

    const discount = originalPrice
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    const formatPrice = (value) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <article className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {badge && (
                        <span className="px-3 py-1 bg-jade-500 text-white text-xs font-semibold rounded-full">
                            {badge}
                        </span>
                    )}
                    {discount > 0 && (
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                            -{discount}%
                        </span>
                    )}
                    {!inStock && (
                        <span className="px-3 py-1 bg-neutral-800 text-white text-xs font-semibold rounded-full">
                            Agotado
                        </span>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-neutral-600 hover:text-jade-600 hover:scale-110 transition-all duration-300"
                        aria-label="Agregar a favoritos"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                    <button
                        className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-neutral-600 hover:text-jade-600 hover:scale-110 transition-all duration-300"
                        aria-label="Vista rápida"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Add to Cart Button - Appears on Hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Link
                        href={`https://wa.me/56912345678?text=Hola! Me interesa la planta: ${name}`}
                        target="_blank"
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 ${inStock
                                ? 'bg-jade-600 text-white hover:bg-jade-700'
                                : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                            }`}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {inStock ? 'Consultar por WhatsApp' : 'No disponible'}
                    </Link>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                {/* Category */}
                <span className="text-xs font-medium text-jade-600 uppercase tracking-wider">
                    {category}
                </span>

                {/* Name */}
                <h3 className="mt-2 text-lg font-semibold text-neutral-800 group-hover:text-jade-700 transition-colors line-clamp-2">
                    {name}
                </h3>

                {/* Price */}
                <div className="mt-3 flex items-center gap-3">
                    <span className="text-xl font-bold text-neutral-900">
                        {formatPrice(price)}
                    </span>
                    {originalPrice && (
                        <span className="text-sm text-neutral-400 line-through">
                            {formatPrice(originalPrice)}
                        </span>
                    )}
                </div>

                {/* Rating (Static for demo) */}
                <div className="mt-3 flex items-center gap-2">
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'fill-neutral-300'}`}
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-sm text-neutral-500">(24)</span>
                </div>
            </div>
        </article>
    );
}
