import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
    const { name, price, image, badge, benefits, description } = product;

    const formatPrice = (value) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        }).format(value);
    };

    const whatsappMessage = `Hola! Me interesa: ${name} (${formatPrice(price)})`;
    const whatsappLink = `https://wa.me/56984668005?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <article className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-green-50/50 transition-all duration-500 hover:-translate-y-1">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-[#F0FDF4]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {badge && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-[#2F855A] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md bg-opacity-90 tracking-wide uppercase">
                            {badge}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="font-bold text-2xl text-[#1C4532] mb-3 group-hover:text-[#2F855A] transition-colors">
                    {name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {/* Benefits */}
                <ul className="mb-8 space-y-3">
                    {benefits && benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                            <div className="w-6 h-6 rounded-full bg-green-50 text-[#2F855A] flex items-center justify-center shrink-0">
                                <span className="text-xs">✓</span>
                            </div>
                            {benefit}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-[#1C4532]">{formatPrice(price)}</span>

                    <Link
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#1C4532] text-white px-6 py-3 rounded-2xl hover:bg-[#2F855A] transition-colors font-medium shadow-lg shadow-green-900/10"
                    >
                        Comprar
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    );
}
