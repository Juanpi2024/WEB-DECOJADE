'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhatsAppButton() {
    const [showGreeting, setShowGreeting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenOpened, setHasBeenOpened] = useState(false);

    useEffect(() => {
        // Show greeting bubble after 4 seconds if it hasn't been opened yet
        const timer = setTimeout(() => {
            if (!hasBeenOpened && !isOpen) {
                setShowGreeting(true);
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, [hasBeenOpened, isOpen]);

    const handleOpenChat = () => {
        setIsOpen(!isOpen);
        setShowGreeting(false);
        setHasBeenOpened(true);
    };

    const phoneNumber = "56984668005";
    const welcomeMessage = "¡Hola! Soy el asistente de DecoJade 👋 ¿En qué puedo ayudarte hoy?";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Greeting Bubble */}
            {showGreeting && !isOpen && (
                <div className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] animate-in fade-in slide-in-from-bottom-4 duration-500 relative mr-2">
                    <button
                        onClick={() => setShowGreeting(false)}
                        className="absolute -top-2 -right-2 bg-white text-gray-400 hover:text-gray-600 rounded-full w-5 h-5 flex items-center justify-center border border-gray-100 shadow-sm transition-colors"
                    >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <p className="text-sm text-gray-700 leading-snug">
                        {welcomeMessage}
                    </p>
                    {/* Triangle pointer */}
                    <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-[320px] rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-300 origin-bottom-right mb-4">
                    {/* Header */}
                    <div className="bg-emerald-600 p-6 text-white relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl relative">
                                🌿
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">DecoJade</h3>
                                <div className="flex items-center gap-1.5 opacity-90 text-sm">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                    En línea
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 bg-gray-50/50">
                        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 mb-6 relative">
                            <p className="text-gray-700 text-sm leading-relaxed">
                                ¡Bienvenido a DecoJade! 🌿 Estamos aquí para ayudarte con cualquier duda sobre nuestras plantas de Jade y cuidados.
                            </p>
                            <span className="text-[10px] text-gray-400 block mt-2">Enviado hace un momento</span>
                        </div>

                        <Link
                            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("¡Hola! Me gustaría recibir información sobre las plantas de Jade 🌿")}`}
                            target="_blank"
                            rel="noopener"
                            className="flex items-center justify-center gap-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-emerald-500/30 transition-all active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Iniciar Conversación
                        </Link>
                    </div>
                </div>
            )}

            {/* Main Toggle Button */}
            <button
                onClick={handleOpenChat}
                className="relative flex items-center justify-center w-16 h-16 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1 active:scale-90 group"
                aria-label="Abrir chat de WhatsApp"
            >
                {/* Ping Animation (only when not open) */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-2xl bg-emerald-400 animate-ping opacity-25" />
                )}

                {isOpen ? (
                    <svg className="w-8 h-8 animate-in spin-in-90 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
