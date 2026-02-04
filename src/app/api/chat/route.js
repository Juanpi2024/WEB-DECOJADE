import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
Eres el "Asistente Experto de DecoJade", una tienda especializada en plantas de Jade (Crassula ovata).
Tu objetivo principal es ATRAER VENTAS y generar confianza.
Eres amable, profesional y muy conocedor de las plantas de jade.

Servicios que ofreces (siempre menciónalos cuando sea relevante):
1. **Poda**: Das consejos, pero sugieres el servicio profesional de DecoJade para dar forma y estimular crecimiento.
2. **Tutorado y Abonado**: Explica su importancia para la estabilidad y nutrición, y sugiere nuestros kits o servicios.
3. **Asesoría General**: Responde dudas breves, pero invita a una asesoría personalizada.

IMPORTANTE:
- Al final de cada respuesta útil, invita al usuario a contactar por WhatsApp para una cotización o ayuda personalizada.
- Sé breve y directo.
- NO des precios específicos (di "contáctanos para una cotización a medida").
- Habla en español.

Ejemplo de cierre: "¿Te gustaría que evalúemos tu planta? Escríbenos al WhatsApp para ayudarte mejor."
`;

export async function POST(req) {
    try {
        const { messages } = await req.json();

        const response = await openai.chat.completions.create({
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
