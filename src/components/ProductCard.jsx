import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
    const { name, price, originalPrice, image, category, badge, inStock = true } = product;

    const formatPrice = (value) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        }).format(value);
    };

    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
    const whatsappMessage = `Hola! Me interesa: ${name} (${formatPrice(price)})`;
    const whatsappLink = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <article className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-green-100 transition-all">
            {/* Image */}
            <div className="relative aspect-square bg-gray-50">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {badge && (
                        <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            {badge}
                        </span>
                    )}
                    {discount > 0 && (
                        <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            -{discount}%
                        </span>
                    )}
                </div>

                {!inStock && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                        <span className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg">
                            Agotado
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                <p className="text-xs text-green-600 font-medium mb-1">{category}</p>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
                    {name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-400">(12)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">{formatPrice(price)}</span>
                    {originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{formatPrice(originalPrice)}</span>
                    )}
                </div>

                {/* CTA */}
                <Link
                    href={inStock ? whatsappLink : '#'}
                    target={inStock ? '_blank' : undefined}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium text-sm transition-all ${inStock
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    {inStock ? (
                        <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Comprar
                        </>
                    ) : (
                        'No disponible'
                    )}
                </Link>
            </div>
        </article>
    );
}
