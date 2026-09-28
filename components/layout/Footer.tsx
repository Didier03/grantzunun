"use client";

import React from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#f2f4f6] border-t border-neutral-300/70 w-full py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Brand & Rights */}
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-neutral-900 block mb-2 font-display">
            El Gran T´Zunun
          </span>
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} El Gran T´Zunun Nature Park. Todos los derechos reservados.
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            Península de Yucatán, México · Reserva Natural y Parque Ecoturístico
          </p>
        </div>

        {/* Navigation & Social Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-neutral-700">
          <a
            href={getWhatsAppUrl("Hola, quisiera información de contacto y cómo llegar a El Gran T´Zunun.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#006948] transition-colors"
          >
            Contacto Directo
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#006948] transition-colors"
          >
            Ubicación
          </a>
          <a
            href={getWhatsAppUrl("Hola, quiero seguir sus novedades y actividades.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#006948] transition-colors"
          >
            Instagram
          </a>
          <a
            href={getWhatsAppUrl("Hola, los vi en Facebook y quiero saber más.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#006948] transition-colors"
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}
