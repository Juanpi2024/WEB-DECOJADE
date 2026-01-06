import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Jade Bebé - Inicio Perfecto',
    price: 8990,
    image: '/jade_plant_small_1765587378535.png',
    category: 'Jade Pequeño',
    badge: 'Ideal Principiantes',
    inStock: true,
  },
  {
    id: 2,
    name: 'Jade Joven - En Crecimiento',
    price: 15990,
    image: '/jade_plant_medium_1765587394510.png',
    category: 'Jade Mediano',
    inStock: true,
  },
  {
    id: 3,
    name: 'Jade Bonsái - Arte Vivo',
    price: 45990,
    originalPrice: 55990,
    image: '/jade_plant_bonsai_1765587408143.png',
    category: 'Jade Bonsái',
    badge: 'Bestseller',
    inStock: true,
  },
  {
    id: 4,
    name: 'Jade Grande - Árbol de la Abundancia',
    price: 75990,
    image: '/jade_plant_large_1765587465333.png',
    category: 'Jade Grande',
    badge: 'Premium',
    inStock: true,
  },
  {
    id: 5,
    name: 'Jade Variegado Tricolor',
    price: 32990,
    image: '/jade_plant_variegated_1765587480069.png',
    category: 'Jade Especial',
    badge: 'Exclusivo',
    inStock: true,
  },
  {
    id: 6,
    name: 'Jade Mediano - Prosperidad',
    price: 22990,
    originalPrice: 28990,
    image: '/jade_plant_medium_1765587394510.png',
    category: 'Jade Mediano',
    inStock: true,
  },
];

const benefits = [
  { icon: '🚚', title: 'Envío Gratis', desc: 'En pedidos sobre $30.000' },
  { icon: '🌱', title: 'Plantas Sanas', desc: 'Garantía de 30 días' },
  { icon: '💬', title: 'Asesoría', desc: 'Te ayudamos a elegir' },
  { icon: '🎁', title: 'Regalo', desc: 'Maceta decorativa incluida' },
];

const categories = [
  { name: 'Jade Bebé', size: '5-10 cm', price: 'Desde $6.990', image: '/jade_plant_small_1765587378535.png', href: '/catalogo?cat=pequeno' },
  { name: 'Jade Mediano', size: '15-30 cm', price: 'Desde $15.990', image: '/jade_plant_medium_1765587394510.png', href: '/catalogo?cat=mediano' },
  { name: 'Jade Bonsái', size: '20-40 cm', price: 'Desde $45.990', image: '/jade_plant_bonsai_1765587408143.png', href: '/catalogo?cat=bonsai' },
  { name: 'Jade Grande', size: '50+ cm', price: 'Desde $75.990', image: '/jade_plant_large_1765587465333.png', href: '/catalogo?cat=grande' },
];

const testimonials = [
  { name: 'Claudia M.', role: 'Emprendedora', text: 'Mi Jade Bonsái llegó perfectamente empacado. Excelente calidad, se nota que son especialistas.', stars: 5 },
  { name: 'Roberto S.', role: 'Coleccionista', text: 'Ya tengo 3 años con mi jade grande y está espectacular. El mejor lugar para comprar.', stars: 5 },
  { name: 'Marina V.', role: 'Diseñadora', text: 'Siempre recomiendo DecoJade. Los productos son premium y la atención es increíble.', stars: 5 },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-700 overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                ✨ Especialistas en Jade desde 2020
              </span>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                El Árbol del Dinero
                <span className="block text-green-200">para tu Hogar</span>
              </h1>

              <p className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed">
                Planta de Jade (Crassula ovata) — símbolo de prosperidad y buena suerte
                según el Feng Shui. Fácil de cuidar, vive décadas.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  Ver Catálogo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="https://wa.me/56984668005?text=Hola! Me interesa una planta de Jade"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition-all border border-white/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="font-bold text-white">4.9/5</div>
                    <div className="text-xs text-white/70">+200 reseñas</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚚</span>
                  <div>
                    <div className="font-bold text-white">Envío Gratis</div>
                    <div className="text-xs text-white/70">Sobre $30.000</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="font-bold text-white">Garantía</div>
                    <div className="text-xs text-white/70">30 días</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <Image
                  src="/jade_hero_1765587497799.png"
                  alt="Colección de plantas de Jade"
                  fill
                  className="object-contain drop-shadow-2xl animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-center gap-3">
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{b.title}</div>
                  <div className="text-xs text-gray-500">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Elige tu Jade</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Tenemos el tamaño perfecto para cada espacio y presupuesto
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all"
              >
                <div className="aspect-square relative mb-4">
                  <Image src={cat.image} alt={cat.name} fill className="object-contain group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.size}</p>
                <p className="text-sm font-medium text-green-600 mt-1">{cat.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Productos Destacados</h2>
              <p className="text-gray-600">Los favoritos de nuestros clientes</p>
            </div>
            <Link
              href="/catalogo"
              className="hidden md:inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700"
            >
              Ver todo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Ver todo el catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Why Jade Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                ☯️ Feng Shui
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Por qué el Jade es el "Árbol del Dinero"?
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Atrae Prosperidad</h3>
                    <p className="text-gray-600 text-sm">Sus hojas en forma de moneda simbolizan riqueza y abundancia.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🍀</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Buena Suerte</h3>
                    <p className="text-gray-600 text-sm">Regalo tradicional para nuevos negocios y hogares.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Energía Positiva</h3>
                    <p className="text-gray-600 text-sm">Activa el Chi positivo y armoniza espacios.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fácil de Cuidar</h3>
                    <p className="text-gray-600 text-sm">Ideal para principiantes. Vive décadas con mínimos cuidados.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/cuidados"
                className="inline-flex items-center gap-2 mt-8 text-green-600 font-medium hover:text-green-700"
              >
                Ver guía de cuidados
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">📍 ¿Dónde colocarlo?</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm text-gray-700">Entrada del hogar</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm text-gray-700">Esquina sureste</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm text-gray-700">Oficina / Negocio</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm text-gray-700">Sala de estar</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                    <span className="text-red-500">✗</span>
                    <span className="text-sm text-gray-700">Baño</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                    <span className="text-red-500">✗</span>
                    <span className="text-sm text-gray-700">Dormitorio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Lo que dicen nuestros clientes</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9 de 5 · +200 reseñas</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&quot;{t.text}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para atraer prosperidad?
          </h2>
          <p className="text-green-100 mb-8 max-w-md mx-auto">
            Elige tu Jade hoy y comienza a transformar la energía de tu espacio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Ver Catálogo
            </Link>
            <Link
              href="https://wa.me/56984668005?text=Hola! Me interesa comprar una planta de Jade"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-400 transition-all border border-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Comprar por WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
