"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(
    "¡Hola! Quisiera cotizar mi visita a El Gran T´Zunun y conocer la disponibilidad."
  );

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-neutral-800 px-4 py-2.5 rounded-full shadow-xl mr-3 text-xs font-bold hover:bg-neutral-50 transition-all border border-neutral-200/90 hover:scale-105 active:scale-95"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
        <span>¡Cotiza tu día aquí!</span>
      </a>

      {/* Circular Pulse Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a El Gran T´Zunun por WhatsApp"
        className="relative w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        {/* Outer Ping Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-8 h-8 fill-current relative z-10" />
      </a>
    </aside>
  );
}
