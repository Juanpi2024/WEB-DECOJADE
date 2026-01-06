import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Guía de Cuidados del Jade | DecoJade',
    description: 'Aprende a cuidar tu planta de Jade (Crassula ovata) con nuestra guía completa. Luz, riego, temperatura, sustrato, poda y más.',
};

const careGuides = [
    {
        id: 'luz',
        icon: '☀️',
        title: 'Luz Solar',
        shortDesc: '4-6 horas de luz indirecta brillante',
        content: `La planta de Jade necesita buena iluminación para crecer sana y mantener su color verde vibrante. Sin embargo, es importante encontrar el balance perfecto.

**Condiciones ideales:**
- 4-6 horas de luz brillante indirecta al día
- Puede tolerar sol directo suave por la mañana (antes de las 10am)
- Evitar sol intenso del mediodía en verano

**Señales de poca luz:**
- Tallos alargados y débiles (etiolación)
- Hojas más separadas de lo normal
- Pérdida de color verde intenso
- Crecimiento lento

**Señales de demasiada luz:**
- Hojas amarillentas o marrones
- Quemaduras en los bordes de las hojas
- Textura arrugada

**Consejos prácticos:**
- Ubícalo cerca de una ventana orientada al este o al oeste
- Si solo tienes ventanas al sur, usa una cortina fina para filtrar la luz
- Rota la maceta cada 2 semanas para un crecimiento uniforme
- En invierno puede necesitar ubicación más cercana a la ventana`,
        tips: [
            'Rota la maceta cada 2 semanas',
            'Ventana al este es ideal',
            'Usa cortina si el sol es muy intenso',
        ],
    },
    {
        id: 'riego',
        icon: '💧',
        title: 'Riego',
        shortDesc: 'Solo cuando la tierra esté completamente seca',
        content: `El riego es el aspecto MÁS IMPORTANTE del cuidado del Jade. Esta suculenta almacena agua en sus hojas carnosas y es extremadamente sensible al exceso de agua.

**Regla de oro:** Menos es más. Es preferible regar de menos que de más.

**Cuándo regar:**
- Cuando la tierra esté completamente seca (mete el dedo 3-5 cm)
- Generalmente cada 2-3 semanas en primavera/verano
- Cada 4-6 semanas en otoño/invierno
- Cuando las hojas pierdan un poco de firmeza

**Cómo regar correctamente:**
1. Usa agua a temperatura ambiente
2. Riega abundantemente hasta que salga por los agujeros de drenaje
3. Vacía el plato debajo de la maceta después de 30 minutos
4. Nunca dejes la planta "sentada" en agua

**Señales de exceso de agua (el error más común):**
- Hojas amarillentas y blandas
- Tallo negro o marrón en la base
- Hojas que caen fácilmente
- Olor a podrido
- Pudrición de raíces

**Señales de falta de agua:**
- Hojas arrugadas o con textura de papel
- Pérdida de brillo
- Hojas que caen secas`,
        tips: [
            'Siempre deja secar entre riegos',
            'Menos agua en invierno',
            'Nunca dejes agua en el plato',
        ],
    },
    {
        id: 'temperatura',
        icon: '🌡️',
        title: 'Temperatura',
        shortDesc: 'Entre 15°C y 24°C, proteger del frío extremo',
        content: `El Jade es originario de Sudáfrica y prefiere climas templados. Es más tolerante al calor que al frío, pero los extremos pueden dañarlo.

**Temperatura ideal:**
- Día: 18°C - 24°C
- Noche: 12°C - 18°C (puede tolerar hasta 10°C)
- El Jade aprecia la diferencia de temperatura entre día y noche

**Lo que debes evitar:**
- Temperaturas bajo 7°C (puede sufrir daño por frío)
- Heladas (son letales para el Jade)
- Corrientes de aire frío
- Calefacción directa o radiadores cerca
- Aire acondicionado directo

**Consejos para invierno:**
- Aleja la planta de ventanas frías por la noche
- No la dejes en terrazas o balcones si hay riesgo de heladas
- Si la temperatura baja mucho, reduce el riego drasticamente
- El Jade puede entrar en "dormancia" en invierno y es normal que crezca menos

**Consejos para verano:**
- Puede estar en exterior si la temperatura nocturna supera los 15°C
- Proteger del sol directo intenso del mediodía
- Aumentar ventilación en días muy calurosos`,
        tips: [
            'Proteger de heladas y temperaturas bajo 10°C',
            'Alejar de corrientes frías',
            'Diferencia día/noche es beneficiosa',
        ],
    },
    {
        id: 'sustrato',
        icon: '🪴',
        title: 'Sustrato y Maceta',
        shortDesc: 'Mezcla para suculentas con excelente drenaje',
        content: `Un buen sustrato es fundamental para la salud del Jade. El drenaje es CRÍTICO: las raíces nunca deben estar en tierra húmeda por mucho tiempo.

**Sustrato ideal:**
- Mezcla comercial para cactus/suculentas
- O crear tu propia mezcla: 50% tierra, 25% arena gruesa, 25% perlita

**Características del buen sustrato:**
- Drena rápidamente
- No retiene humedad excesiva
- Permite circulación de aire en las raíces
- pH ligeramente ácido (6.0-6.5)

**La maceta perfecta:**
- OBLIGATORIO: agujeros de drenaje
- Material poroso como terracota es ideal (permite "respirar")
- Tamaño apropiado: no demasiado grande
- El Jade prefiere estar ligeramente "apretado"

**Cuándo trasplantar:**
- Cada 2-3 años o cuando las raíces salgan por los agujeros
- Mejor en primavera o verano
- Usa una maceta solo 1-2 cm más grande
- Espera 1 semana sin regar después del trasplante

**Capas recomendadas:**
1. Capa de grava o piedras en el fondo (2-3 cm)
2. Sustrato bien drenante
3. Opcional: capa decorativa de piedras en la superficie`,
        tips: [
            'Maceta con agujeros es obligatorio',
            'Terracota es el mejor material',
            'Trasplantar cada 2-3 años',
        ],
    },
    {
        id: 'poda',
        icon: '✂️',
        title: 'Poda y Propagación',
        shortDesc: 'Podar para dar forma y propagar fácilmente',
        content: `El Jade responde muy bien a la poda y es una de las plantas más fáciles de propagar. La poda ayuda a crear formas compactas y estimula el crecimiento de ramas.

**Cuándo podar:**
- Primavera o inicio de verano (período de crecimiento activo)
- Cuando la planta esté demasiado alta o desproporcionada
- Para remover ramas dañadas o enfermas
- Para dar forma de bonsái

**Cómo podar correctamente:**
1. Usa tijeras o cuchillo limpio y afilado
2. Corta justo encima de un nudo (donde salen las hojas)
3. La planta producirá 2 nuevas ramas desde el punto de corte
4. Deja secar los cortes al aire 24-48 horas

**Propagación por esquejes de tallo (más rápido):**
1. Corta un tallo de 5-10 cm
2. Retira las hojas inferiores
3. Deja secar el corte 3-5 días hasta que cicatrice
4. Planta en sustrato seco para suculentas
5. Espera 2 semanas antes del primer riego ligero

**Propagación por hojas (más lento pero funciona):**
1. Desprende una hoja entera y sana
2. Déjala secar 3-5 días
3. Colócala sobre sustrato húmedo
4. En 2-4 semanas brotarán raíces y una pequeña planta
5. Trasplanta cuando tenga raíces establecidas`,
        tips: [
            'Podar en primavera o verano',
            'Los esquejes enraízan muy fácil',
            'Dejar secar los cortes antes de plantar',
        ],
    },
    {
        id: 'fertilizacion',
        icon: '🧪',
        title: 'Fertilización',
        shortDesc: 'Fertilizar cada 2-3 meses solo en temporada de crecimiento',
        content: `El Jade no es muy exigente en nutrientes, pero una fertilización moderada en la época correcta puede mejorar su crecimiento y color.

**Cuándo fertilizar:**
- Solo en primavera y verano (época de crecimiento)
- Cada 2-3 meses es suficiente
- NUNCA en otoño ni invierno (la planta está en reposo)

**Tipo de fertilizante:**
- Fertilizante líquido para cactus/suculentas
- O fertilizante balanceado diluido a la mitad
- NPK equilibrado o ligeramente más alto en fósforo

**Cómo aplicar:**
1. Diluye el fertilizante al 50% de lo recomendado
2. Aplica sobre sustrato ya húmedo (nunca en seco)
3. Riega normalmente después
4. Evita que toque las hojas directamente

**Señales de exceso de fertilizante:**
- Puntas de hojas marrones
- Costra blanca en la superficie del sustrato
- Crecimiento débil y deformado
- Hojas que pierden su forma característica

**Señales de deficiencia de nutrientes:**
- Hojas pálidas o amarillentas
- Crecimiento extremadamente lento
- Hojas pequeñas`,
        tips: [
            'Fertilizar solo en primavera y verano',
            'Diluir al 50%',
            'Aplicar sobre sustrato húmedo',
        ],
    },
    {
        id: 'problemas',
        icon: '🩺',
        title: 'Problemas Comunes',
        shortDesc: 'Identificar y solucionar problemas frecuentes',
        content: `Conoce los problemas más comunes del Jade y cómo solucionarlos.

**🔴 Hojas amarillas y blandas**
- Causa: Exceso de riego (90% de los casos)
- Solución: Deja de regar inmediatamente, revisa las raíces
- Si hay pudrición, corta partes afectadas y trasplanta

**🔴 Hojas arrugadas o blandas**
- Causa: Falta de agua
- Solución: Riega abundantemente y espera recuperación

**🔴 Caída de hojas**
- Causa: Estrés por cambio de ubicación, exceso de agua o frío
- Solución: Identifica el factor y corrige

**🔴 Manchas blancas algodonosas**
- Causa: Cochinilla algodonosa (plaga)
- Solución: Alcohol isopropílico con algodón, jabón insecticida

**🔴 Tallo negro en la base**
- Causa: Pudrición por exceso de agua
- Solución: Corta el tallo sano arriba de lo podrido y propaga

**🔴 Hojas con bordes rojos o morados**
- Causa: Estrés por luz intensa (no siempre es malo)
- Solución: Normal si la planta está sana, solo es coloración por sol

**🔴 Crecimiento alargado y débil**
- Causa: Falta de luz (etiolación)
- Solución: Mover a ubicación más luminosa`,
        tips: [
            'El exceso de agua es el problema #1',
            'Actuar rápido ante pudrición',
            'Revisar plagas regularmente',
        ],
    },
];

export default function CuidadosPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-br from-emerald-600 to-emerald-700">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-emerald-200 text-sm mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                        <span>/</span>
                        <span className="text-white">Cuidados del Jade</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm text-white mb-4">
                            🌿 Guía Completa
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Cuidados del Jade
                        </h1>
                        <p className="text-emerald-100 text-lg leading-relaxed">
                            Todo lo que necesitas saber para que tu planta de Jade (Crassula ovata)
                            viva décadas y luzca espectacular. Guía completa con consejos prácticos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Tips Bar */}
            <section className="py-6 bg-emerald-50 border-y border-emerald-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">☀️</span>
                            <span className="text-neutral-700">Luz indirecta brillante</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl">💧</span>
                            <span className="text-neutral-700">Regar solo cuando esté seco</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🌡️</span>
                            <span className="text-neutral-700">15-24°C ideal</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🪴</span>
                            <span className="text-neutral-700">Buen drenaje obligatorio</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Contenido</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {careGuides.map((guide) => (
                                <a
                                    key={guide.id}
                                    href={`#${guide.id}`}
                                    className="p-4 bg-neutral-50 hover:bg-emerald-50 rounded-xl border border-neutral-100 hover:border-emerald-200 transition-all text-center group"
                                >
                                    <span className="text-2xl mb-2 block">{guide.icon}</span>
                                    <span className="font-medium text-neutral-800 group-hover:text-emerald-700 transition-colors text-sm">
                                        {guide.title}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Care Guides */}
            <section className="py-12 bg-neutral-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {careGuides.map((guide, index) => (
                            <article
                                key={guide.id}
                                id={guide.id}
                                className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden scroll-mt-24"
                            >
                                {/* Header */}
                                <div className="p-6 border-b border-neutral-100 bg-gradient-to-r from-emerald-50 to-white">
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl">{guide.icon}</span>
                                        <div>
                                            <h2 className="text-2xl font-bold text-neutral-900">{guide.title}</h2>
                                            <p className="text-emerald-600">{guide.shortDesc}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    <div className="prose prose-neutral prose-emerald max-w-none">
                                        {guide.content.split('\n\n').map((paragraph, i) => {
                                            if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                                                const title = paragraph.split(':**')[0].replace(/\*\*/g, '');
                                                const content = paragraph.split(':**')[1];
                                                return (
                                                    <div key={i} className="mb-4">
                                                        <h3 className="text-lg font-semibold text-neutral-800 mb-2">{title}:</h3>
                                                        <p className="text-neutral-600 whitespace-pre-line">{content}</p>
                                                    </div>
                                                );
                                            }
                                            if (paragraph.startsWith('🔴')) {
                                                return (
                                                    <div key={i} className="p-4 bg-red-50 rounded-xl border border-red-100 mb-4">
                                                        <p className="text-neutral-700 whitespace-pre-line">{paragraph}</p>
                                                    </div>
                                                );
                                            }
                                            if (paragraph.includes('- ')) {
                                                const lines = paragraph.split('\n');
                                                return (
                                                    <ul key={i} className="list-disc list-inside space-y-1 text-neutral-600 mb-4">
                                                        {lines.map((line, j) => (
                                                            <li key={j}>{line.replace('- ', '')}</li>
                                                        ))}
                                                    </ul>
                                                );
                                            }
                                            if (paragraph.match(/^\d\./)) {
                                                const lines = paragraph.split('\n');
                                                return (
                                                    <ol key={i} className="list-decimal list-inside space-y-1 text-neutral-600 mb-4">
                                                        {lines.map((line, j) => (
                                                            <li key={j}>{line.replace(/^\d\.\s/, '')}</li>
                                                        ))}
                                                    </ol>
                                                );
                                            }
                                            return (
                                                <p key={i} className="text-neutral-600 mb-4 leading-relaxed whitespace-pre-line">
                                                    {paragraph}
                                                </p>
                                            );
                                        })}
                                    </div>

                                    {/* Tips Box */}
                                    <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                        <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                                            <span>💡</span> Tips rápidos
                                        </h4>
                                        <ul className="space-y-1">
                                            {guide.tips.map((tip, i) => (
                                                <li key={i} className="text-sm text-emerald-700 flex items-start gap-2">
                                                    <span className="text-emerald-500">✓</span>
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-emerald-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tu Jade?</h2>
                    <p className="text-emerald-100 mb-8 max-w-md mx-auto">
                        Somos especialistas. Te asesoramos gratis por WhatsApp sobre cualquier
                        problema o duda con tu planta de Jade.
                    </p>
                    <Link
                        href="https://wa.me/56984668005?text=Hola! Necesito ayuda con el cuidado de mi planta de Jade"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Asesoría Gratuita
                    </Link>
                </div>
            </section>
        </>
    );
}
