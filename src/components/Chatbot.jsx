'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: '¡Hola! Soy el experto de DecoJade. Pregúntame por precios, despacho en Parral, cuidados o pedidos para eventos.' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // En celular el lanzador flotante está oculto; el chat se abre desde la
    // barra inferior (MobileBar), que dispara este evento.
    useEffect(() => {
        const abrir = () => setIsOpen(true);
        window.addEventListener('decojade:abrir-chat', abrir);
        return () => window.removeEventListener('decojade:abrir-chat', abrir);
    }, []);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(({ role, content }) => ({ role, content }))
                }),
            });

            const data = await response.json();

            if (data.reply) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            } else {
                throw new Error('No reply');
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, tuve un problema. Por favor contáctanos directo al WhatsApp.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const openWhatsApp = () => {
        window.open('https://wa.me/56984668005?text=Hola,%20quisiera%20asesoría%20sobre%20mis%20jades', '_blank');
    };

    return (
        <>
            {/* Lanzador del chat.
                Antes era una foto de bonsái sobre una caja blanca: se veía
                pegada encima del sitio. Ahora usa la paleta de la marca y
                ocupa lo que debe ocupar un botón flotante. */}
            <motion.button
                className="hidden lg:flex fixed bottom-5 right-5 z-50 group items-center gap-2.5 rounded-full bg-forest-800 text-bone-100 pl-4 pr-5 py-3 shadow-[0_12px_32px_-10px_rgba(19,31,23,0.7)] ring-1 ring-bone-100/15"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                aria-label={isOpen ? 'Cerrar el chat' : 'Abrir el chat con el experto DecoJade'}
            >
                {isOpen ? (
                    <X size={20} strokeWidth={2.2} />
                ) : (
                    <>
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-70 animate-ping" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-olive-400" />
                        </span>
                        <span className="text-sm font-semibold whitespace-nowrap">Pregúntame</span>
                    </>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed inset-x-3 bottom-24 lg:inset-x-auto lg:bottom-20 lg:right-5 lg:w-[22rem] bg-bone-50 rounded-card shadow-2xl z-50 overflow-hidden flex flex-col ring-1 ring-forest-900/12"
                        style={{ maxHeight: 'calc(100dvh - 120px)' }}
                    >
                        {/* Header */}
                        <div className="bg-forest-800 p-4 text-bone-100 flex justify-between items-center">
                            <div>
                                <h3 className="font-display text-xl">Experto DecoJade</h3>
                                <p className="text-xs text-bone-100/60">Asesoría y precios al día</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={openWhatsApp} data-wa="chatbot" aria-label="Seguir por WhatsApp" className="grid h-10 w-10 place-items-center bg-olive-400 hover:bg-bone-100 rounded-full transition text-forest-950" title="Ir a WhatsApp">
                                    <Phone size={18} />
                                </button>
                                <button onClick={() => setIsOpen(false)} aria-label="Cerrar el chat" className="grid h-10 w-10 place-items-center rounded-full text-bone-100/80 hover:bg-bone-100/10 transition">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-bone-100 space-y-4 h-96">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-forest-800 text-bone-100 rounded-br-none'
                                            : 'bg-bone-50 ring-1 ring-forest-900/10 text-forest-900 rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-bone-50 ring-1 ring-forest-900/10 p-3 rounded-2xl rounded-bl-none text-forest-800/80 text-sm italic">
                                        Escribiendo...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-bone-50 border-t border-forest-900/10 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Pregunta sobre cuidados..."
                                className="flex-1 p-2 border border-forest-900/20 rounded-full focus:outline-none focus:border-forest-600 px-4 text-sm text-forest-900"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading}
                                className="bg-forest-800 text-bone-100 p-2 rounded-full hover:bg-forest-600 disabled:opacity-50 transition"
                            >
                                <Send size={20} />
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="bg-bone-100 p-2 text-center border-t border-forest-900/10">
                            <button onClick={openWhatsApp} className="text-xs text-forest-700 font-semibold hover:underline">
                                ¿Prefieres hablar con un humano? Click aquí
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
