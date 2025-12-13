import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

// Product Data - Only Jade Plants
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

const sizes = [
  {
    name: 'Jade Bebé',
    description: 'Perfecto para comenzar tu colección',
    icon: '🌱',
    height: '5-10 cm',
  },
  {
    name: 'Jade Mediano',
    description: 'Ideal para escritorios y repisas',
    icon: '🪴',
    height: '15-30 cm',
  },
  {
    name: 'Jade Bonsái',
    description: 'Arte milenario en miniatura',
    icon: '🎋',
    height: '20-40 cm',
  },
  {
    name: 'Jade Grande',
    description: 'Impacto visual y energía potente',
    icon: '🌳',
    height: '50+ cm',
  },
];

const careTips = [
  {
    icon: '☀️',
    title: 'Luz Solar',
    description: 'Necesita 4-6 horas de luz indirecta brillante. Puede tolerar sol directo por la mañana.',
    tip: 'Rota la maceta cada 2 semanas para un crecimiento uniforme.',
  },
  {
    icon: '💧',
    title: 'Riego',
    description: 'Riega solo cuando la tierra esté completamente seca. En invierno, reduce el riego a mínimo.',
    tip: 'El exceso de agua es el error más común. Menos es más.',
  },
  {
    icon: '🌡️',
    title: 'Temperatura',
    description: 'Ideal entre 15°C y 24°C. Proteger de heladas y temperaturas bajo 10°C.',
    tip: 'Adora los cambios de temperatura entre día y noche.',
  },
  {
    icon: '🪴',
    title: 'Sustrato',
    description: 'Usa mezcla para suculentas con excelente drenaje. Maceta con agujeros obligatorios.',
    tip: 'Añade perlita o arena gruesa para mejorar el drenaje.',
  },
  {
    icon: '✂️',
    title: 'Poda',
    description: 'Poda para dar forma y estimular ramificación. Las hojas cortadas pueden enraizar.',
    tip: 'Los esquejes de tallo enraízan fácilmente en tierra seca.',
  },
  {
    icon: '🧪',
    title: 'Fertilización',
    description: 'Fertiliza con suculentas diluido cada 2-3 meses en primavera y verano.',
    tip: 'No fertilices en otoño ni invierno cuando está en reposo.',
  },
];

const fengShuiBenefits = [
  {
    icon: '💰',
    title: 'Atrae Prosperidad y Dinero',
    description: 'Conocida como "Árbol del Dinero" o "Planta de la Fortuna", sus hojas redondas y gruesas simbolizan monedas y riqueza en el Feng Shui.',
  },
  {
    icon: '🍀',
    title: 'Buena Suerte',
    description: 'Tradicionalmente se regala en inauguraciones de negocios y nuevos hogares para atraer buena fortuna y éxito.',
  },
  {
    icon: '⚡',
    title: 'Energía Positiva (Chi)',
    description: 'Activa la energía vital del hogar, especialmente cuando se coloca en la esquina sureste (zona de la riqueza).',
  },
  {
    icon: '🏠',
    title: 'Armonía en el Hogar',
    description: 'Equilibra la energía del espacio, creando un ambiente de paz, estabilidad y crecimiento constante.',
  },
  {
    icon: '💪',
    title: 'Resistencia y Longevidad',
    description: 'Simboliza la resistencia ante adversidades. Una planta que puede vivir décadas representa vida larga y próspera.',
  },
  {
    icon: '🌿',
    title: 'Purifica el Aire',
    description: 'Además de sus beneficios energéticos, el jade ayuda a purificar el aire y aumentar la humedad ambiente.',
  },
];

const fengShuiPlacements = [
  { location: 'Entrada del hogar', benefit: 'Da la bienvenida a la prosperidad', recommended: true },
  { location: 'Esquina sureste', benefit: 'Zona de la riqueza en Feng Shui', recommended: true },
  { location: 'Oficina o escritorio', benefit: 'Atrae éxito en los negocios', recommended: true },
  { location: 'Sala de estar', benefit: 'Armoniza la energía familiar', recommended: true },
  { location: 'Baño', benefit: 'Evitar - drena la energía de abundancia', recommended: false },
  { location: 'Dormitorio', benefit: 'Usar con moderación por su energía activa', recommended: false },
];

const testimonials = [
  {
    name: 'Claudia Muñoz',
    role: 'Emprendedora',
    content: 'Compré un Jade Bonsái para mi oficina y desde entonces mi negocio no para de crecer. ¡Además es hermoso!',
    avatar: 'CM',
  },
  {
    name: 'Roberto Silva',
    role: 'Coleccionista de Suculentas',
    content: 'La calidad de las plantas de DecoJade es impresionante. Mi jade grande ya tiene 3 años conmigo y está espectacular.',
    avatar: 'RS',
  },
  {
    name: 'Marina Vega',
    role: 'Diseñadora de Interiores',
    content: 'Siempre recomiendo DecoJade a mis clientes. Son especialistas en jade y se nota en cada planta que entregan.',
    avatar: 'MV',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jade_hero_1765587497799.png"
            alt="Colección de plantas de Jade DecoJade"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-24">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-jade-500/20 backdrop-blur-sm text-jade-300 text-sm font-medium rounded-full mb-6 animate-fade-in-up">
              🌿 Especialistas en Plantas de Jade
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
              El{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-400 to-jade-300">
                Árbol de la Abundancia
              </span>{' '}
              para tu hogar
            </h1>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed animate-fade-in-up delay-200">
              Descubre nuestra colección exclusiva de plantas de Jade (Crassula ovata)
              en todos los tamaños y estilos. Símbolo de prosperidad, buena suerte
              y energía positiva según el Feng Shui.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white font-semibold rounded-full shadow-lg hover:shadow-jade-500/40 hover:scale-105 transition-all duration-300"
              >
                Ver Catálogo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#feng-shui"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                ☯️ Feng Shui
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center gap-8 text-neutral-400 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🍀</span>
                <span className="text-sm">Símbolo de buena suerte</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">💰</span>
                <span className="text-sm">Atrae prosperidad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-jade-100 text-jade-700 text-sm font-medium rounded-full mb-4">
              Tamaños Disponibles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Un Jade para cada espacio
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Desde pequeños brotes hasta majestuosos árboles bonsái
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizes.map((size, index) => (
              <Link
                key={size.name}
                href="/catalogo"
                className="group relative p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl border border-neutral-200 hover:border-jade-300 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-jade-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <span className="text-5xl mb-4 block">{size.icon}</span>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-jade-700 transition-colors">
                    {size.name}
                  </h3>
                  <p className="text-neutral-500 mb-2">{size.description}</p>
                  <span className="text-sm text-jade-600 font-medium">
                    Altura: {size.height}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="inline-block px-4 py-2 bg-jade-100 text-jade-700 text-sm font-medium rounded-full mb-4">
                Nuestros Jade
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Plantas de Jade seleccionadas
              </h2>
              <p className="text-xl text-neutral-600 max-w-xl">
                Cada planta es cuidada con amor y lista para traer prosperidad a tu hogar
              </p>
            </div>
            <Link
              href="/catalogo"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-jade-600 font-semibold hover:text-jade-700 transition-colors"
            >
              Ver todo el catálogo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section id="cuidados" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-jade-100 text-jade-700 text-sm font-medium rounded-full mb-4">
              Guía de Cuidados
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Cómo cuidar tu planta de Jade
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              El Jade es resistente y fácil de cuidar. Sigue estos consejos para que viva décadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careTips.map((tip, index) => (
              <div
                key={tip.title}
                className="group p-8 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200 hover:border-jade-300 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{tip.icon}</span>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-jade-700 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-neutral-600 mb-4">{tip.description}</p>
                <div className="p-3 bg-jade-50 rounded-lg border border-jade-100">
                  <p className="text-sm text-jade-700">
                    <span className="font-semibold">💡 Tip:</span> {tip.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-jade-50 rounded-2xl border border-jade-200">
              <span className="text-4xl">🌱</span>
              <div className="text-left">
                <p className="font-semibold text-jade-800">¿Necesitas ayuda con tu Jade?</p>
                <p className="text-jade-600 text-sm">Te ofrecemos asesoría gratuita por WhatsApp</p>
              </div>
              <Link
                href="https://wa.me/56912345678?text=Hola! Necesito ayuda con el cuidado de mi planta de Jade"
                target="_blank"
                className="px-6 py-3 bg-jade-600 text-white font-medium rounded-full hover:bg-jade-700 transition-colors"
              >
                Consultar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feng Shui Section */}
      <section id="feng-shui" className="py-24 bg-gradient-to-br from-jade-700 via-jade-800 to-jade-900 text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="yin-yang-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#yin-yang-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
              ☯️ Feng Shui & Beneficios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              El Árbol del Dinero
            </h2>
            <p className="text-xl text-jade-100 max-w-2xl mx-auto">
              El Jade es una de las plantas más poderosas en Feng Shui para atraer
              prosperidad, buena suerte y energía positiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {fengShuiBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-jade-100">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Placement Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 text-center">
              🏠 ¿Dónde colocar tu Jade?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fengShuiPlacements.map((place, index) => (
                <div
                  key={place.location}
                  className={`p-4 rounded-xl flex items-start gap-3 ${place.recommended
                      ? 'bg-jade-500/20 border border-jade-400/30'
                      : 'bg-red-500/10 border border-red-400/20'
                    }`}
                >
                  <span className="text-2xl">
                    {place.recommended ? '✅' : '⚠️'}
                  </span>
                  <div>
                    <p className="font-semibold">{place.location}</p>
                    <p className="text-sm text-jade-100">{place.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/jade_plant_bonsai_1765587408143.png"
                      alt="Jade Bonsái de DecoJade"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/jade_plant_small_1765587378535.png"
                      alt="Jade pequeño"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/jade_plant_medium_1765587394510.png"
                      alt="Jade mediano"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/jade_plant_large_1765587465333.png"
                      alt="Jade grande"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-jade-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm text-jade-100">Solo Jade</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-jade-100 text-jade-700 text-sm font-medium rounded-full mb-6">
                Nuestra Historia
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Especialistas en plantas de Jade
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                DecoJade nació de la pasión por una sola planta: el Jade.
                Nos especializamos exclusivamente en Crassula ovata porque creemos
                que es la planta perfecta: bella, resistente, y llena de significado.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Cada planta que ofrecemos es cultivada con cuidado, desde pequeños
                brotes hasta majestuosos bonsáis. Conocemos cada variedad, cada
                técnica de cuidado, y cada secreto para que tu Jade prospere.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-jade-600">+500</div>
                  <div className="text-sm text-neutral-500">Jades entregados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-jade-600">15+</div>
                  <div className="text-sm text-neutral-500">Variedades</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-jade-600">100%</div>
                  <div className="text-sm text-neutral-500">Especialización</div>
                </div>
              </div>

              <Link
                href="https://wa.me/56912345678"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white font-semibold rounded-full shadow-lg hover:shadow-jade-500/40 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-jade-100 text-jade-700 text-sm font-medium rounded-full mb-4">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-jade-100 rounded-full flex items-center justify-center text-jade-600 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-jade-600 via-jade-700 to-jade-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-jade-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-jade-400 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6">
              💰 Atrae prosperidad a tu vida
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tu Jade te está esperando
            </h2>
            <p className="text-xl text-jade-100 mb-10 leading-relaxed">
              Contáctanos y te ayudamos a elegir el Jade perfecto según tu espacio,
              experiencia y los beneficios que buscas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/56912345678?text=¡Hola! Me interesa una planta de Jade. ¿Me pueden asesorar?"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-jade-700 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir mi Jade
              </Link>
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
              >
                Ver Catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
