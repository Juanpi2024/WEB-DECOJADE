import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Guía de Cuidados del Jade | DecoJade',
    description: 'Aprende a cuidar tu planta de Jade (Crassula ovata) con nuestra guía completa. Luz, riego, temperatura, sustrato, poda y más.',
};

// SVG Icons for professional look
const icons = {
    sun: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    water: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4.97 5.667-7 9.333-7 12a7 7 0 1014 0c0-2.667-2.03-6.333-7-12z" />
        </svg>
    ),
    thermometer: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19a4 4 0 108 0 4 4 0 00-8 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V5a3 3 0 016 0v14" />
        </svg>
    ),
    pot: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
    ),
    scissors: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
    ),
    beaker: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    ),
    medical: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    ),
    lightbulb: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
    check: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    ),
    leaf: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    ),
};

const careGuides = [
    {
        id: 'luz',
        icon: icons.sun,
        title: 'Luz Solar',
        shortDesc: '4-6 horas de luz indirecta brillante',
        color: 'amber',
        keyPoints: [
            { label: 'Ideal', value: '4-6 horas luz indirecta' },
            { label: 'Ubicación', value: 'Ventana este u oeste' },
            { label: 'Evitar', value: 'Sol directo mediodía' },
        ],
        content: [
            {
                title: 'Condiciones ideales',
                items: ['4-6 horas de luz brillante indirecta al día', 'Puede tolerar sol directo suave por la mañana', 'Evitar sol intenso del mediodía en verano']
            },
            {
                title: 'Señales de poca luz',
                items: ['Tallos alargados y débiles', 'Hojas más separadas de lo normal', 'Crecimiento lento']
            },
            {
                title: 'Señales de exceso',
                items: ['Hojas amarillentas o marrones', 'Quemaduras en bordes', 'Textura arrugada']
            }
        ],
        tips: ['Rota la maceta cada 2 semanas', 'Ventana al este es ideal', 'Usa cortina si el sol es muy intenso'],
    },
    {
        id: 'riego',
        icon: icons.water,
        title: 'Riego',
        shortDesc: 'Solo cuando la tierra esté completamente seca',
        color: 'blue',
        keyPoints: [
            { label: 'Frecuencia', value: 'Cada 2-3 semanas' },
            { label: 'Regla', value: 'Menos es más' },
            { label: 'Invierno', value: 'Reducir a 4-6 semanas' },
        ],
        content: [
            {
                title: 'Cuándo regar',
                items: ['Cuando la tierra esté completamente seca', 'Cada 2-3 semanas en primavera/verano', 'Cada 4-6 semanas en otoño/invierno']
            },
            {
                title: 'Cómo regar',
                items: ['Usa agua a temperatura ambiente', 'Riega hasta que salga por los agujeros', 'Vacía el plato después de 30 minutos']
            },
            {
                title: 'Señales de exceso (error común)',
                items: ['Hojas amarillentas y blandas', 'Tallo negro en la base', 'Olor a podrido']
            }
        ],
        tips: ['Siempre deja secar entre riegos', 'Menos agua en invierno', 'Nunca dejes agua en el plato'],
    },
    {
        id: 'temperatura',
        icon: icons.thermometer,
        title: 'Temperatura',
        shortDesc: 'Entre 15°C y 24°C, proteger del frío extremo',
        color: 'rose',
        keyPoints: [
            { label: 'Día', value: '18°C - 24°C' },
            { label: 'Noche', value: '12°C - 18°C' },
            { label: 'Mínimo', value: 'No bajo 7°C' },
        ],
        content: [
            {
                title: 'Lo que debes evitar',
                items: ['Temperaturas bajo 7°C', 'Heladas (son letales)', 'Corrientes de aire frío', 'Calefacción directa']
            },
            {
                title: 'Consejos para invierno',
                items: ['Aleja de ventanas frías por la noche', 'No dejes en terrazas si hay riesgo de heladas', 'Reduce el riego drásticamente']
            }
        ],
        tips: ['Proteger de heladas', 'Alejar de corrientes frías', 'Diferencia día/noche es beneficiosa'],
    },
    {
        id: 'sustrato',
        icon: icons.pot,
        title: 'Sustrato y Maceta',
        shortDesc: 'Mezcla para suculentas con excelente drenaje',
        color: 'orange',
        keyPoints: [
            { label: 'Sustrato', value: 'Mezcla para cactus' },
            { label: 'Maceta', value: 'Con agujeros obligatorio' },
            { label: 'Trasplante', value: 'Cada 2-3 años' },
        ],
        content: [
            {
                title: 'Sustrato ideal',
                items: ['Mezcla comercial para cactus/suculentas', 'O: 50% tierra + 25% arena + 25% perlita', 'pH ligeramente ácido (6.0-6.5)']
            },
            {
                title: 'La maceta perfecta',
                items: ['OBLIGATORIO: agujeros de drenaje', 'Terracota es ideal (permite respirar)', 'Tamaño apropiado, no muy grande']
            }
        ],
        tips: ['Maceta con agujeros es obligatorio', 'Terracota es el mejor material', 'Trasplantar cada 2-3 años'],
    },
    {
        id: 'poda',
        icon: icons.scissors,
        title: 'Poda y Propagación',
        shortDesc: 'Podar para dar forma y propagar fácilmente',
        color: 'green',
        keyPoints: [
            { label: 'Época', value: 'Primavera/verano' },
            { label: 'Método', value: 'Esquejes o hojas' },
            { label: 'Secado', value: '3-5 días antes de plantar' },
        ],
        content: [
            {
                title: 'Cuándo podar',
                items: ['Primavera o inicio de verano', 'Cuando esté desproporcionada', 'Para dar forma de bonsái']
            },
            {
                title: 'Propagación por esquejes',
                items: ['Corta un tallo de 5-10 cm', 'Deja secar 3-5 días', 'Planta en sustrato seco', 'Espera 2 semanas antes de regar']
            }
        ],
        tips: ['Podar en primavera o verano', 'Los esquejes enraízan muy fácil', 'Dejar secar antes de plantar'],
    },
    {
        id: 'fertilizacion',
        icon: icons.beaker,
        title: 'Fertilización',
        shortDesc: 'Fertilizar cada 2-3 meses solo en temporada de crecimiento',
        color: 'purple',
        keyPoints: [
            { label: 'Época', value: 'Solo primavera/verano' },
            { label: 'Frecuencia', value: 'Cada 2-3 meses' },
            { label: 'Dilución', value: '50% de lo recomendado' },
        ],
        content: [
            {
                title: 'Cuándo fertilizar',
                items: ['Solo en primavera y verano', 'Cada 2-3 meses es suficiente', 'NUNCA en otoño ni invierno']
            },
            {
                title: 'Cómo aplicar',
                items: ['Diluye al 50%', 'Aplica sobre sustrato húmedo', 'Evita que toque las hojas']
            }
        ],
        tips: ['Fertilizar solo en primavera y verano', 'Diluir al 50%', 'Aplicar sobre sustrato húmedo'],
    },
    {
        id: 'problemas',
        icon: icons.medical,
        title: 'Problemas Comunes',
        shortDesc: 'Identificar y solucionar problemas frecuentes',
        color: 'red',
        keyPoints: [
            { label: 'Problema #1', value: 'Exceso de riego' },
            { label: 'Plaga común', value: 'Cochinilla' },
            { label: 'Prevención', value: 'Revisar regularmente' },
        ],
        content: [
            {
                title: 'Hojas amarillas y blandas',
                items: ['Causa: Exceso de riego (90%)', 'Solución: Dejar de regar, revisar raíces']
            },
            {
                title: 'Manchas blancas algodonosas',
                items: ['Causa: Cochinilla (plaga)', 'Solución: Alcohol con algodón']
            },
            {
                title: 'Tallo negro en la base',
                items: ['Causa: Pudrición por exceso de agua', 'Solución: Cortar sano y propagar']
            }
        ],
        tips: ['El exceso de agua es el problema #1', 'Actuar rápido ante pudrición', 'Revisar plagas regularmente'],
    },
];

const colorClasses = {
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', iconBg: 'bg-amber-100' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', iconBg: 'bg-blue-100' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600', iconBg: 'bg-rose-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', iconBg: 'bg-orange-100' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', iconBg: 'bg-green-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', iconBg: 'bg-purple-100' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', iconBg: 'bg-red-100' },
};

export default function CuidadosPage() {
    return (
        <>
            {/* Hero - Clean Professional Style */}
            <section className="pt-28 pb-16 bg-gradient-to-br from-[#1C4532] to-[#2F855A]">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-green-200 text-sm mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                        <span>/</span>
                        <span className="text-white">Guía de Cuidados</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white mb-4 border border-white/20">
                            {icons.leaf}
                            Guía Profesional
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Cuidados del Jade
                        </h1>
                        <p className="text-green-100 text-lg leading-relaxed max-w-2xl">
                            Todo lo que necesitas saber para que tu planta de Jade (Crassula ovata)
                            viva décadas y luzca espectacular.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Reference Cards */}
            <section className="py-8 bg-[#F5F1E8]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto -mt-16 relative z-10">
                        {[
                            { icon: icons.sun, label: 'Luz', value: '4-6h indirecta', color: 'amber' },
                            { icon: icons.water, label: 'Riego', value: 'Cuando seco', color: 'blue' },
                            { icon: icons.thermometer, label: 'Temp.', value: '15-24°C', color: 'rose' },
                            { icon: icons.pot, label: 'Drenaje', value: 'Obligatorio', color: 'orange' },
                        ].map((item) => (
                            <div key={item.label} className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center">
                                <div className={`w-14 h-14 mx-auto rounded-2xl ${colorClasses[item.color].iconBg} ${colorClasses[item.color].text} flex items-center justify-center mb-3`}>
                                    {item.icon}
                                </div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                                <p className="font-bold text-gray-800">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation Grid */}
            <section className="py-12 bg-[#F5F1E8]">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#1C4532] mb-6 text-center">Índice de Contenidos</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                            {careGuides.map((guide) => (
                                <a
                                    key={guide.id}
                                    href={`#${guide.id}`}
                                    className={`p-4 bg-white hover:${colorClasses[guide.color].bg} rounded-xl border border-gray-100 hover:${colorClasses[guide.color].border} transition-all text-center group cursor-pointer`}
                                >
                                    <div className={`w-12 h-12 mx-auto rounded-xl ${colorClasses[guide.color].iconBg} ${colorClasses[guide.color].text} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                                        {guide.icon}
                                    </div>
                                    <span className="font-medium text-gray-800 text-sm block">{guide.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Care Guides - Professional Card Layout */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {careGuides.map((guide) => (
                            <article
                                key={guide.id}
                                id={guide.id}
                                className={`rounded-3xl overflow-hidden border-2 ${colorClasses[guide.color].border} scroll-mt-24 shadow-sm hover:shadow-lg transition-shadow`}
                            >
                                {/* Header */}
                                <div className={`p-6 ${colorClasses[guide.color].bg} border-b ${colorClasses[guide.color].border}`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-16 h-16 rounded-2xl ${colorClasses[guide.color].iconBg} ${colorClasses[guide.color].text} flex items-center justify-center`}>
                                            {guide.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-gray-900">{guide.title}</h2>
                                            <p className={`${colorClasses[guide.color].text} font-medium`}>{guide.shortDesc}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Points Bar */}
                                <div className="grid grid-cols-3 divide-x divide-gray-100 bg-gray-50 border-b border-gray-100">
                                    {guide.keyPoints.map((point) => (
                                        <div key={point.label} className="p-4 text-center">
                                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{point.label}</p>
                                            <p className="font-bold text-gray-800 text-sm">{point.value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {guide.content.map((section, i) => (
                                            <div key={i} className="bg-gray-50 rounded-2xl p-5">
                                                <h3 className="font-bold text-gray-800 mb-3">{section.title}</h3>
                                                <ul className="space-y-2">
                                                    {section.items.map((item, j) => (
                                                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                                            <span className={`mt-1 ${colorClasses[guide.color].text}`}>{icons.check}</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tips */}
                                    <div className={`mt-6 p-5 ${colorClasses[guide.color].bg} rounded-2xl border ${colorClasses[guide.color].border}`}>
                                        <h4 className={`font-bold ${colorClasses[guide.color].text} mb-3 flex items-center gap-2`}>
                                            {icons.lightbulb}
                                            Consejos rápidos
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {guide.tips.map((tip, i) => (
                                                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                                                    <span className={`${colorClasses[guide.color].text}`}>{icons.check}</span>
                                                    {tip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#1C4532] text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Necesitas ayuda con tu Jade?</h2>
                    <p className="text-green-200 mb-8 max-w-md mx-auto">
                        Somos especialistas. Te asesoramos gratis por WhatsApp sobre cualquier
                        problema o duda con tu planta.
                    </p>
                    <Link
                        href="https://wa.me/56984668005?text=Hola! Necesito ayuda con el cuidado de mi planta de Jade"
                        target="_blank"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-[#F5F1E8] text-[#1C4532] font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform cursor-pointer"
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
