import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 'jade-2-anos',
    name: 'Jade 2 Años',
    description: 'Planta de jade en cremecento, 2 años de cultivo. Un detalle lleno de vida.',
    price: 2000,
    image: '/jade_cremecento.png',
    badge: 'Oferta Especial',
    benefits: ['Maceta Cremecento', '2 Años de Edad', 'Ideal Regalo']
  },
  {
    id: 'pequeno',
    name: 'Jade Pequeño',
    description: 'El inicio perfecto para tu colección. Ideal para escritorios y espacios íntimos.',
    price: 3000,
    image: '/jade_real_collage.jpg',
    badge: 'Ideal Principiantes',
    benefits: ['5-10 cm aprox', 'Maceta básica incluida', 'Guía de cuidados digital']
  },
  {
    id: 'mediano',
    name: 'Jade Mediano',
    description: 'Presencia y armonía. Un equilibrio perfecto de tamaño y belleza.',
    price: 7000,
    image: '/jade_real_medium.jpg',
    badge: 'Más Vendido',
    benefits: ['15-25 cm aprox', 'Maceta decorativa', 'Sustrato premium']
  },
  {
    id: 'grande',
    name: 'Jade Grande',
    description: 'Un árbol de la abundancia. La pieza central que transformará tu hogar.',
    price: 12000,
    image: '/jade_real_large.jpg',
    badge: 'Colección',
    benefits: ['30+ cm altura', 'Formación tipo bonsái', 'Maceta de cerámica']
  }
];

const testimonials = [
  { name: 'Claudia M.', role: 'Cliente Feliz', text: 'Hermosas plantas, se nota el amor con el que las cuidan. Mi jade mediano está precioso.', stars: 5 },
  { name: 'Roberto S.', role: 'Coleccionista', text: 'La calidad es increíble por el precio. El sustrato es perfecto.', stars: 5 },
  { name: 'Marina V.', role: 'Diseñadora', text: 'Le dio vida a mi oficina. 100% recomendados.', stars: 5 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      {/* Organic Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C4532] to-[#2F855A] pt-32 pb-20 lg:pt-40 lg:pb-32 rounded-b-[3rem] lg:rounded-b-[5rem] shadow-xl">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-md text-[#E2E8F0] font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <svg className="w-4 h-4 inline-block mr-1 -mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
            Vivero Boutique
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Armonía y Abundancia <br />
            <span className="text-[#9AE6B4]">en cada Hoja</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Descubre nuestra colección exclusiva de Jades cultivados con dedicación.
            El toque de naturaleza que tu espacio necesita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center bg-[#F5F1E8] text-[#2F855A] font-bold px-8 py-3.5 rounded-2xl hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Ver Colección
            </a>
            <a
              href="https://wa.me/56984668005?text=Hola! Me gustaría asesoría sobre sus jades"
              target="_blank"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Hablar con Experto
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-lg p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 border border-green-50">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              title: 'Cultivo Orgánico',
              desc: 'Sin químicos nocivos'
            },
            {
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              ),
              title: 'Envío Seguro',
              desc: 'Empaque protector'
            },
            {
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
              title: 'Asesoría Vitalicia',
              desc: 'Te enseñamos a cuidar'
            },
            {
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Garantía 30 Días',
              desc: 'Compra sin riesgo'
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 cursor-pointer hover:bg-green-50 p-2 rounded-xl transition-colors">
              <span className="bg-green-50 w-12 h-12 flex items-center justify-center rounded-2xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-800 text-sm lg:text-base">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Catalog Section */}
      <section id="catalogo" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Nuestra Colección</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Seleccionamos cuidadosamente cada ejemplar. Elige el tamaño que mejor se adapte a tu energía.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Jade Section (Biophilic) */}
      <section className="py-20 bg-[#E6FFFA] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/jade_real_collage.jpg"
                  alt="Jades saludables"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#2F855A] font-bold tracking-wider text-sm uppercase mb-2 block">Filosofía Feng Shui</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-6">Más que una Planta, un Símbolo</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                El Jade (Crassula ovata) es venerado por su capacidad para atraer la prosperidad y renovar las energías.
                Sus hojas carnosas almacenan agua, simbolizando la acumulación de riqueza y bienestar.
              </p>
              <ul className="space-y-4">
                {[
                  'Atrae energía Chi positiva a tu hogar',
                  'Fácil cuidado, ideal para estilos de vida modernos',
                  'Purifica el aire y armoniza el ambiente'
                ].map(text => (
                  <li key={text} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[#38A169] text-white flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1C4532]">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#F9FAFB] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex text-yellow-400 mb-4 gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&quot;{t.text}&quot;</p>
                <div>
                  <p className="font-bold text-[#1C4532]">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-[#1C4532] text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">¿Listo para dar vida a tu espacio?</h2>
          <a
            href="https://wa.me/56984668005?text=Hola! Quiero comprar un Jade"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#F5F1E8] text-[#1C4532] font-bold text-lg px-10 py-4 rounded-2xl hover:scale-105 transition-transform shadow-2xl cursor-pointer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Comprar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
