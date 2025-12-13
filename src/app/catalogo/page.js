'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

// Full Jade Plant Catalog
const allProducts = [
    {
        id: 1,
        name: 'Jade Bebé - Inicio Perfecto',
        price: 8990,
        image: '/jade_plant_small_1765587378535.png',
        category: 'Jade Pequeño',
        badge: 'Ideal Principiantes',
        inStock: true,
        description: 'Pequeño brote de jade, perfecto para comenzar tu colección.',
    },
    {
        id: 2,
        name: 'Jade Joven - En Crecimiento',
        price: 15990,
        image: '/jade_plant_medium_1765587394510.png',
        category: 'Jade Mediano',
        inStock: true,
        description: 'Planta joven con tronco en formación, ideal para escritorios.',
    },
    {
        id: 3,
        name: 'Jade Bonsái Clásico',
        price: 45990,
        originalPrice: 55990,
        image: '/jade_plant_bonsai_1765587408143.png',
        category: 'Jade Bonsái',
        badge: 'Bestseller',
        inStock: true,
        description: 'Arte bonsái tradicional con años de formación.',
    },
    {
        id: 4,
        name: 'Jade Grande - Árbol de la Abundancia',
        price: 75990,
        image: '/jade_plant_large_1765587465333.png',
        category: 'Jade Grande',
        badge: 'Premium',
        inStock: true,
        description: 'Impresionante ejemplar maduro de gran presencia.',
    },
    {
        id: 5,
        name: 'Jade Variegado Tricolor',
        price: 32990,
        image: '/jade_plant_variegated_1765587480069.png',
        category: 'Jade Especial',
        badge: 'Exclusivo',
        inStock: true,
        description: 'Variedad exclusiva con hojas verdes, crema y rosadas.',
    },
    {
        id: 6,
        name: 'Jade Mediano Prosperidad',
        price: 22990,
        originalPrice: 28990,
        image: '/jade_plant_medium_1765587394510.png',
        category: 'Jade Mediano',
        inStock: true,
        description: 'Tamaño perfecto para atraer abundancia al hogar.',
    },
    {
        id: 7,
        name: 'Mini Jade para Regalo',
        price: 6990,
        image: '/jade_plant_small_1765587378535.png',
        category: 'Jade Pequeño',
        badge: 'Regalo Perfecto',
        inStock: true,
        description: 'Pequeño jade en maceta decorativa, ideal para regalo.',
    },
    {
        id: 8,
        name: 'Jade Bonsái Premium',
        price: 89990,
        image: '/jade_plant_bonsai_1765587408143.png',
        category: 'Jade Bonsái',
        badge: 'Coleccionista',
        inStock: true,
        description: 'Ejemplar único con más de 10 años de formación.',
    },
    {
        id: 9,
        name: 'Jade para Oficina',
        price: 18990,
        image: '/jade_plant_medium_1765587394510.png',
        category: 'Jade Mediano',
        inStock: true,
        description: 'Atrae el éxito a tu espacio de trabajo.',
    },
    {
        id: 10,
        name: 'Jade Sunset (Hojas Rojizas)',
        price: 28990,
        image: '/jade_plant_variegated_1765587480069.png',
        category: 'Jade Especial',
        badge: 'Raro',
        inStock: true,
        description: 'Variedad que desarrolla bordes rojizos con el sol.',
    },
    {
        id: 11,
        name: 'Jade XL de Piso',
        price: 129990,
        image: '/jade_plant_large_1765587465333.png',
        category: 'Jade Grande',
        badge: 'Imponente',
        inStock: true,
        description: 'Ejemplar de gran tamaño perfecto para el piso.',
    },
    {
        id: 12,
        name: 'Set 3 Mini Jades',
        price: 19990,
        originalPrice: 26970,
        image: '/jade_plant_small_1765587378535.png',
        category: 'Jade Pequeño',
        badge: 'Pack Ahorro',
        inStock: true,
        description: 'Tres pequeños jades en macetas coordinadas.',
    },
];

const categories = [
    'Todos',
    'Jade Pequeño',
    'Jade Mediano',
    'Jade Bonsái',
    'Jade Grande',
    'Jade Especial',
];

const sortOptions = [
    { value: 'featured', label: 'Destacados' },
    { value: 'price-asc', label: 'Precio: Menor a Mayor' },
    { value: 'price-desc', label: 'Precio: Mayor a Menor' },
    { value: 'name', label: 'Nombre A-Z' },
];

export default function CatalogoPage() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [sortBy, setSortBy] = useState('featured');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = useMemo(() => {
        let result = [...allProducts];

        // Filter by category
        if (selectedCategory !== 'Todos') {
            result = result.filter((p) => p.category === selectedCategory);
        }

        // Filter by search
        if (searchQuery) {
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        return result;
    }, [selectedCategory, sortBy, searchQuery]);

    return (
        <>
            {/* Hero Banner */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-jade-700 via-jade-800 to-jade-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>

                <div className="container mx-auto px-6 relative">
                    <nav className="flex items-center gap-2 text-jade-200 text-sm mb-8">
                        <Link href="/" className="hover:text-white transition-colors">
                            Inicio
                        </Link>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-white">Catálogo</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-jade-200 text-sm font-medium rounded-full mb-4">
                            🌿 Solo Plantas de Jade
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Catálogo de Jade
                        </h1>
                        <p className="text-xl text-jade-100 leading-relaxed">
                            Explora nuestra colección exclusiva de plantas de Jade (Crassula ovata)
                            en todos los tamaños, desde pequeños brotes hasta majestuosos bonsáis.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-10 max-w-2xl">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar jade..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-jade-200 focus:outline-none focus:ring-2 focus:ring-jade-400 focus:bg-white/20 transition-all"
                            />
                            <svg
                                className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-jade-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Catalog Content */}
            <section className="py-12 bg-neutral-50">
                <div className="container mx-auto px-6">
                    {/* Filters Bar */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-jade-600 text-white shadow-lg shadow-jade-500/30'
                                            : 'bg-white text-neutral-600 hover:bg-jade-50 hover:text-jade-700 border border-neutral-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Sort */}
                        <div className="flex items-center gap-4">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2.5 bg-white border border-neutral-200 rounded-full text-neutral-700 focus:outline-none focus:ring-2 focus:ring-jade-500 cursor-pointer"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <span className="hidden sm:block text-neutral-500 text-sm">
                                {filteredProducts.length} productos
                            </span>
                        </div>
                    </div>

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                                No encontramos resultados
                            </h3>
                            <p className="text-neutral-500 mb-6">
                                Intenta con otros filtros o busca algo diferente
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedCategory('Todos');
                                    setSearchQuery('');
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-jade-600 text-white font-medium rounded-full hover:bg-jade-700 transition-colors"
                            >
                                Ver todos los Jade
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Size Guide */}
            <section className="py-16 bg-white border-t border-neutral-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            ¿Qué tamaño elegir?
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Te ayudamos a encontrar el jade perfecto para tu espacio
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-jade-50 rounded-2xl border border-jade-100 text-center">
                            <span className="text-4xl mb-3 block">🌱</span>
                            <h3 className="font-bold text-jade-800 mb-2">Jade Pequeño</h3>
                            <p className="text-jade-600 text-sm mb-2">5-10 cm altura</p>
                            <p className="text-neutral-600 text-sm">Ideal para principiantes y regalos</p>
                        </div>
                        <div className="p-6 bg-jade-50 rounded-2xl border border-jade-100 text-center">
                            <span className="text-4xl mb-3 block">🪴</span>
                            <h3 className="font-bold text-jade-800 mb-2">Jade Mediano</h3>
                            <p className="text-jade-600 text-sm mb-2">15-30 cm altura</p>
                            <p className="text-neutral-600 text-sm">Perfecto para escritorios y repisas</p>
                        </div>
                        <div className="p-6 bg-jade-50 rounded-2xl border border-jade-100 text-center">
                            <span className="text-4xl mb-3 block">🎋</span>
                            <h3 className="font-bold text-jade-800 mb-2">Jade Bonsái</h3>
                            <p className="text-jade-600 text-sm mb-2">20-40 cm altura</p>
                            <p className="text-neutral-600 text-sm">Arte milenario, piezas únicas</p>
                        </div>
                        <div className="p-6 bg-jade-50 rounded-2xl border border-jade-100 text-center">
                            <span className="text-4xl mb-3 block">🌳</span>
                            <h3 className="font-bold text-jade-800 mb-2">Jade Grande</h3>
                            <p className="text-jade-600 text-sm mb-2">50+ cm altura</p>
                            <p className="text-neutral-600 text-sm">Impacto visual y energía poderosa</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help CTA */}
            <section className="py-16 bg-neutral-50 border-t border-neutral-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-16 h-16 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">💬</span>
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            ¿Necesitas asesoría?
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8">
                            Somos especialistas en Jade. Te ayudamos a elegir según tu espacio,
                            experiencia y los beneficios de Feng Shui que buscas.
                        </p>
                        <Link
                            href="https://wa.me/56912345678?text=¡Hola! Necesito ayuda para elegir mi planta de Jade."
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white font-semibold rounded-full shadow-lg hover:shadow-jade-500/40 hover:scale-105 transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Asesoría por WhatsApp
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
