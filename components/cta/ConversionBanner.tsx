"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ConversionBanner() {
  return (
    <section className="w-full py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image
          src="/images/senderos-selva.svg"
          alt="Selva de El Gran T´Zunun"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 text-center z-10">
        {/* Fast Response Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-bold uppercase tracking-widest mb-4 border border-[#25D366]/30">
          Respuesta en menos de 5 minutos
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto font-display">
          ¡La aventura comienza con un solo mensaje!
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Escríbenos directamente para resolver dudas, apartar tus lugares, organizar visitas escolares o cotizar paquetes grupales a la medida.
        </p>

        {/* Big WhatsApp Action Button */}
        <a
          href={getWhatsAppUrl("¡Hola! Quiero cotizar un paquete para mi grupo o familia en El Gran T´Zunun.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span>Escribir por WhatsApp ahora</span>
        </a>
      </div>
    </section>
  );
}
