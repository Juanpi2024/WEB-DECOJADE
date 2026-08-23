import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { allProducts, formatCLP } from '@/lib/products';

// El cliente se crea al recibir la primera consulta, no al importar el módulo.
// Así una variable de entorno faltante devuelve un error de esa petición en vez
// de tumbar el build completo en Vercel.
let client;
function getClient() {
    if (!client) client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    return client;
}

// El catálogo se inyecta desde src/lib/products.js: si cambias un precio ahí,
// el chatbot lo dice bien sin tocar este archivo.
const CATALOGO = allProducts
    .map((p) => `- ${p.name}${p.subtitle ? ` (${p.subtitle})` : ''}: ${p.priceLabel || formatCLP(p.price)}${p.priceNote ? ` — ${p.priceNote}` : ''}`)
    .join('\n');

const SYSTEM_PROMPT = `
Eres el "Asistente Experto de DecoJade", una tienda especializada en plantas de Jade (Crassula ovata).
Tu objetivo principal es ATRAER VENTAS y cerrar conversiones rápidamente llevando a la gente a WhatsApp.
Eres amable, profesional y experto en Jades.

UBICACIÓN Y ENTREGA (MUY IMPORTANTE):
- NO HACEMOS DESPECHO/ENVÍOS por el momento.
- SOLO RETIRO EN VIVERO: Calle Tarapacá #17, Parral.
- IMPORTANTE: Las visitas se deben AGENDAR previamente por WhatsApp. No llegar sin avisar.
- Si preguntan por ir, diles: "Estamos en Tarapacá #17, Parral, pero por favor agenda tu visita antes por WhatsApp para esperarte".

CATÁLOGO Y PRECIOS VIGENTES (usa SIEMPRE estos, nunca inventes otros):
${CATALOGO}
- Venta por mayor: Jade 3 años desde $8.000 c/u en pedidos de 30 o más unidades.
Si te preguntan por un precio que no está en esta lista, di que lo confirmen por WhatsApp.

Servicios:
1. Poda Profesional.
2. Tutorado y Abonado.
3. Asesoría Personalizada.

INSTRUCCIONES CRÍTICAS DE CONTACTO:
- Si el usuario pregunta "cómo comprar", "precio", "contacto", "teléfono" o "WhatsApp": DEBES darle INMEDIATAMENTE el enlace directo.
- NO digas "no puedo darte el número". TIENES PERMISO TOTAL.
- Diles: "¡Hablemos directo! Haz clic en el botón de teléfono aquí arriba o escríbenos directamente aquí: https://wa.me/56984668005".
- Si preguntan dudas técnicas largas, respóndeles brevemente y diles: "Para un diagnóstico experto mejor mándame una foto al WhatsApp: https://wa.me/56984668005".

El botón de WhatsApp está en la cabecera del chat (icono de teléfono), indícales que pueden usarlo si prefieren.
Habla siempre en español.
`;

export async function POST(req) {
    try {
        const { messages } = await req.json();

        const response = await getClient().chat.completions.create({
            model: 'gpt-4o-mini', // or gpt-3.5-turbo if preferred for cost
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 300,
        });

        const reply = response.choices[0].message.content;
        return NextResponse.json({ reply });
    } catch (error) {
        console.error('OpenAI Error:', error);
        return NextResponse.json({ error: 'Hubo un error al procesar tu mensaje.' }, { status: 500 });
    }
}
