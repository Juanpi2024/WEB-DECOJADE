'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: '¡Hola! Soy el experto de DecoJade 🌿. ¿En qué te puedo ayudar hoy? (Poda, Cuidados, Ventas)' }
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
            {/* Floating Button */}
            <motion.button
                className="fixed bottom-6 right-6 z-50 group"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="relative w-24 h-24 md:w-28 md:h-28 drop-shadow-2xl filter hover:brightness-110 transition-all">
                    {/* Glowing effect behind */}
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse"></div>

                    {isOpen ? (
                        <div className="w-full h-full bg-[#2d5a3c] rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                            <X size={40} className="text-white" />
                        </div>
                    ) : (
                        <div className="relative w-full h-full">
                            <Image
                                src="/jade_plant_bonsai_1765587408143.png"
                                alt="Chat con Experto"
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                            {/* Speech bubble hint */}
                            <div className="absolute -top-2 -left-2 bg-white text-[#2d5a3c] text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-green-100 animate-bounce">
                                ¡Pregúntame!
                            </div>
                        </div>
                    )}
                </div>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-200"
                        style={{ maxHeight: 'calc(100vh - 120px)' }}
                    >
                        {/* Header */}
                        <div className="bg-[#2d5a3c] p-4 text-white flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">Experto DecoJade 🌿</h3>
                                <p className="text-xs text-green-100">Asesoría y Ventas</p>
                            </div>
                            <button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition text-white" title="Ir a WhatsApp">
                                <Phone size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 h-96">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-[#2d5a3c] text-white rounded-br-none'
                                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none text-gray-500 text-sm italic">
                                        Escribiendo...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Pregunta sobre cuidados..."
                                className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#2d5a3c] px-4 text-sm text-gray-800"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading}
                                className="bg-[#2d5a3c] text-white p-2 rounded-full hover:bg-[#234730] disabled:opacity-50 transition"
                            >
                                <Send size={20} />
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 p-2 text-center border-t border-gray-100">
                            <button onClick={openWhatsApp} className="text-xs text-[#2d5a3c] font-semibold hover:underline">
                                ¿Prefieres hablar con un humano? Click aquí
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
