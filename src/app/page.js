import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

// Product Data
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
  { name: 'Jade Bebé', icon: '🌱', height: '5-10 cm', desc: 'Para empezar' },
  { name: 'Jade Mediano', icon: '🪴', height: '15-30 cm', desc: 'Escritorios' },
  { name: 'Jade Bonsái', icon: '🎋', height: '20-40 cm', desc: 'Arte vivo' },
  { name: 'Jade Grande', icon: '🌳', height: '50+ cm', desc: 'Impacto visual' },
];

const careTips = [
  { icon: '☀️', title: 'Luz', desc: '4-6 horas de luz indirecta brillante', tip: 'Rota cada 2 semanas' },
  { icon: '💧', title: 'Riego', desc: 'Solo cuando la tierra esté seca', tip: 'Menos es más' },
  { icon: '🌡️', title: 'Temperatura', desc: 'Entre 15°C y 24°C', tip: 'Proteger del frío' },
  { icon: '🪴', title: 'Sustrato', desc: 'Mezcla para suculentas', tip: 'Buen drenaje' },
  { icon: '✂️', title: 'Poda', desc: 'Para dar forma y ramificar', tip: 'Fácil propagación' },
  { icon: '🧪', title: 'Nutrientes', desc: 'Fertiliza cada 2-3 meses', tip: 'Solo en verano' },
];

const fengShuiBenefits = [
  { icon: '💰', title: 'Prosperidad', desc: 'Conocido como Árbol del Dinero' },
  { icon: '🍀', title: 'Buena Suerte', desc: 'Ideal para negocios y hogares' },
  { icon: '⚡', title: 'Energía Chi', desc: 'Activa la energía positiva' },
  { icon: '🏠', title: 'Armonía', desc: 'Equilibra el espacio' },
  { icon: '💪', title: 'Longevidad', desc: 'Vive décadas con cuidado' },
  { icon: '🌿', title: 'Aire Puro', desc: 'Purifica el ambiente' },
];

const placements = [
  { place: 'Entrada del hogar', ok: true },
  { place: 'Esquina sureste', ok: true },
  { place: 'Oficina', ok: true },
  { place: 'Sala de estar', ok: true },
  { place: 'Baño', ok: false },
  { place: 'Dormitorio', ok: false },
];

const testimonials = [
  { name: 'Claudia M.', role: 'Emprendedora', text: 'Mi Jade Bonsái es hermoso y mi negocio va cada vez mejor. ¡Coincidencia?', avatar: 'CM' },
  { name: 'Roberto S.', role: 'Coleccionista', text: 'Excelente calidad. Ya tengo 3 años con mi jade grande y está espectacular.', avatar: 'RS' },
  { name: 'Marina V.', role: 'Diseñadora', text: 'Siempre recomiendo DecoJade. Son especialistas y se nota.', avatar: 'MV' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800">
        {/* Decorative Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span>🌿</span> Especialistas en Jade
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                El Árbol del
                <span className="block text-emerald-300">Dinero</span>
                para tu hogar
              </h1>

              <p className="text-lg text-emerald-100 mb-8 leading-relaxed max-w-lg">
                Descubre nuestra colección de plantas de Jade en todos los tamaños.
                Símbolo de prosperidad y buena suerte según el Feng Shui.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-emerald-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Ver Catálogo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#feng-shui"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  ☯️ Feng Shui
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 mt-10 text-emerald-200 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💰</span> Atrae prosperidad
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🍀</span> Buena suerte
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
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
              Tamaños
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Un Jade para cada espacio
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">
              Desde pequeños brotes hasta majestuosos bonsáis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sizes.map((size) => (
              <Link
                key={size.name}
                href="/catalogo"
                className="group p-6 bg-neutral-50 hover:bg-emerald-50 rounded-2xl border border-neutral-100 hover:border-emerald-200 transition-all text-center"
              >
                <span className="text-4xl mb-3 block">{size.icon}</span>
                <h3 className="font-semibold text-neutral-800 group-hover:text-emerald-700 transition-colors mb-1">
                  {size.name}
                </h3>
                <p className="text-sm text-emerald-600 font-medium mb-1">{size.height}</p>
                <p className="text-xs text-neutral-400">{size.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
                Catálogo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                Plantas de Jade
              </h2>
              <p className="text-neutral-500">Seleccionadas con amor para tu hogar</p>
            </div>
            <Link
              href="/catalogo"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
            >
              Ver todo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section id="cuidados" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
              Guía de Cuidados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Cómo cuidar tu Jade
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">
              Fácil de cuidar, vive décadas con estos consejos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {careTips.map((tip) => (
              <div
                key={tip.title}
                className="p-6 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 hover:border-emerald-200 hover:shadow-lg transition-all group"
              >
                <span className="text-3xl mb-3 block">{tip.icon}</span>
                <h3 className="font-semibold text-neutral-800 mb-2 group-hover:text-emerald-700 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-3">{tip.desc}</p>
                <div className="px-3 py-2 bg-emerald-50 rounded-lg">
                  <p className="text-xs text-emerald-700">💡 {tip.tip}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="https://wa.me/56912345678?text=Necesito ayuda con el cuidado de mi Jade"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
            >
              💬 Asesoría gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Feng Shui Section */}
      <section id="feng-shui" className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
              ☯️ Feng Shui
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              El Árbol del Dinero
            </h2>
            <p className="text-emerald-100 max-w-lg mx-auto">
              Una de las plantas más poderosas para atraer prosperidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {fengShuiBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <span className="text-3xl mb-3 block">{benefit.icon}</span>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Placement Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold mb-6 text-center">🏠 ¿Dónde colocarlo?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {placements.map((p) => (
                <div
                  key={p.place}
                  className={`p-3 rounded-xl flex items-center gap-2 ${p.ok ? 'bg-emerald-500/20' : 'bg-red-500/10'
                    }`}
                >
                  <span>{p.ok ? '✅' : '⚠️'}</span>
                  <span className="text-sm">{p.place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                  <Image src="/jade_plant_bonsai_1765587408143.png" alt="Jade Bonsái" width={300} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100">
                  <Image src="/jade_plant_small_1765587378535.png" alt="Jade pequeño" width={300} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100">
                  <Image src="/jade_plant_medium_1765587394510.png" alt="Jade mediano" width={300} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                  <Image src="/jade_plant_large_1765587465333.png" alt="Jade grande" width={300} height={400} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
                Nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Especialistas en Jade
              </h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                DecoJade nació de la pasión por una sola planta: el Jade.
                Nos especializamos exclusivamente en Crassula ovata porque
                es la planta perfecta: bella, resistente, y llena de significado.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Cada planta es cultivada con cuidado, desde pequeños brotes
                hasta majestuosos bonsáis.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">+500</div>
                  <div className="text-xs text-neutral-500">Plantas entregadas</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">15+</div>
                  <div className="text-xs text-neutral-500">Variedades</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">100%</div>
                  <div className="text-xs text-neutral-500">Jade</div>
                </div>
              </div>

              <Link
                href="https://wa.me/56912345678"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
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

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 mb-4 text-sm italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-semibold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
            💰 Atrae prosperidad
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu Jade te está esperando
          </h2>
          <p className="text-emerald-100 mb-8 max-w-md mx-auto">
            Contáctanos y te ayudamos a elegir el Jade perfecto para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/56912345678?text=¡Hola! Me interesa una planta de Jade"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir mi Jade
            </Link>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
