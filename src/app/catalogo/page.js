'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const allProducts = [
    { id: 1, name: 'Jade Bebé - Inicio Perfecto', price: 8990, image: '/jade_plant_small_1765587378535.png', category: 'Jade Pequeño', badge: 'Ideal Principiantes', inStock: true },
    { id: 2, name: 'Jade Joven - En Crecimiento', price: 15990, image: '/jade_plant_medium_1765587394510.png', category: 'Jade Mediano', inStock: true },
    { id: 3, name: 'Jade Bonsái Clásico', price: 45990, originalPrice: 55990, image: '/jade_plant_bonsai_1765587408143.png', category: 'Jade Bonsái', badge: 'Bestseller', inStock: true },
    { id: 4, name: 'Jade Grande - Árbol de la Abundancia', price: 75990, image: '/jade_plant_large_1765587465333.png', category: 'Jade Grande', badge: 'Premium', inStock: true },
    { id: 5, name: 'Jade Variegado Tricolor', price: 32990, image: '/jade_plant_variegated_1765587480069.png', category: 'Jade Especial', badge: 'Exclusivo', inStock: true },
    { id: 6, name: 'Jade Mediano Prosperidad', price: 22990, originalPrice: 28990, image: '/jade_plant_medium_1765587394510.png', category: 'Jade Mediano', inStock: true },
    { id: 7, name: 'Mini Jade para Regalo', price: 6990, image: '/jade_plant_small_1765587378535.png', category: 'Jade Pequeño', badge: 'Regalo Perfecto', inStock: true },
    { id: 8, name: 'Jade Bonsái Premium', price: 89990, image: '/jade_plant_bonsai_1765587408143.png', category: 'Jade Bonsái', badge: 'Coleccionista', inStock: true },
    { id: 9, name: 'Jade para Oficina', price: 18990, image: '/jade_plant_medium_1765587394510.png', category: 'Jade Mediano', inStock: true },
    { id: 10, name: 'Jade Sunset (Hojas Rojizas)', price: 28990, image: '/jade_plant_variegated_1765587480069.png', category: 'Jade Especial', badge: 'Raro', inStock: true },
    { id: 11, name: 'Jade XL de Piso', price: 129990, image: '/jade_plant_large_1765587465333.png', category: 'Jade Grande', badge: 'Imponente', inStock: true },
    { id: 12, name: 'Set 3 Mini Jades', price: 19990, originalPrice: 26970, image: '/jade_plant_small_1765587378535.png', category: 'Jade Pequeño', badge: 'Pack Ahorro', inStock: true },
];

const categories = ['Todos', 'Jade Pequeño', 'Jade Mediano', 'Jade Bonsái', 'Jade Grande', 'Jade Especial'];

export default function CatalogoPage() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [sortBy, setSortBy] = useState('featured');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = useMemo(() => {
        let result = [...allProducts];
        if (selectedCategory !== 'Todos') result = result.filter((p) => p.category === selectedCategory);
        if (searchQuery) result = result.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
        if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
        return result;
    }, [selectedCategory, sortBy, searchQuery]);

    return (
        <>
            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-br from-emerald-600 to-emerald-700">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-emerald-200 text-sm mb-6">
                        <Link href="/" className="hover:text-white">Inicio</Link>
                        <span>/</span>
                        <span className="text-white">Catálogo</span>
                    </nav>

                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm text-white mb-4">
                            🌿 Solo plantas de Jade
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Catálogo de Jade
                        </h1>
                        <p className="text-emerald-100">
                            Encuentra el Jade perfecto para tu espacio
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mt-8 max-w-md">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar jade..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-5 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Catalog */}
            <section className="py-12 bg-neutral-50">
                <div className="container mx-auto px-6">
                    {/* Filters */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === cat
                                            ? 'bg-emerald-500 text-white shadow-md'
                                            : 'bg-white text-neutral-600 hover:bg-emerald-50 border border-neutral-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="featured">Destacados</option>
                                <option value="price-asc">Precio: menor a mayor</option>
                                <option value="price-desc">Precio: mayor a menor</option>
                                <option value="name">Nombre A-Z</option>
                            </select>
                            <span className="text-sm text-neutral-400">{filteredProducts.length} productos</span>
                        </div>
                    </div>

                    {/* Products */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-neutral-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 mb-2">Sin resultados</h3>
                            <p className="text-neutral-500 mb-4">Intenta con otros filtros</p>
                            <button
                                onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}
                                className="px-5 py-2 bg-emerald-500 text-white rounded-xl font-medium"
                            >
                                Ver todos
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Size Guide */}
            <section className="py-12 bg-white border-t border-neutral-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-xl font-bold text-neutral-900 text-center mb-8">¿Qué tamaño elegir?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: '🌱', name: 'Pequeño', size: '5-10 cm', use: 'Regalos, principiantes' },
                            { icon: '🪴', name: 'Mediano', size: '15-30 cm', use: 'Escritorios, repisas' },
                            { icon: '🎋', name: 'Bonsái', size: '20-40 cm', use: 'Coleccionistas' },
                            { icon: '🌳', name: 'Grande', size: '50+ cm', use: 'Pisos, impacto visual' },
                        ].map((s) => (
                            <div key={s.name} className="p-5 bg-emerald-50 rounded-2xl text-center border border-emerald-100">
                                <span className="text-3xl mb-2 block">{s.icon}</span>
                                <h3 className="font-semibold text-neutral-800">{s.name}</h3>
                                <p className="text-sm text-emerald-600 font-medium">{s.size}</p>
                                <p className="text-xs text-neutral-500 mt-1">{s.use}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-neutral-50 border-t border-neutral-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-3">¿Necesitas asesoría?</h2>
                    <p className="text-neutral-500 mb-6">Te ayudamos a elegir el Jade ideal para ti</p>
                    <Link
                        href="https://wa.me/56912345678?text=Necesito ayuda para elegir mi Jade"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Asesoría por WhatsApp
                    </Link>
                </div>
            </section>
        </>
    );
}
