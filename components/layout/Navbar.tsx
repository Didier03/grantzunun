"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Compass, CalendarCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface NavbarProps {
  onOpenReserveModal?: () => void;
}

export function Navbar({ onOpenReserveModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Actividades", href: "#actividades" },
    { label: "Paquetes", href: "#paquetes" },
    { label: "Hospedaje", href: "#hospedaje" },
    { label: "Gastronomía", href: "#gastronomia" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-black/5 py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark (Zone 1) */}
        <Link
          href="#"
          className="text-xl md:text-2xl font-bold tracking-tight text-[#006948] hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00855d] inline-block animate-pulse" />
          <span>El Gran T´Zunun</span>
        </Link>

        {/* Clean Nav Links (Zone 2) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-700 hover:text-[#006948] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#006948] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button (Zone 3) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenReserveModal}
            className="px-5 py-2.5 bg-[#006948] hover:bg-[#005137] text-white text-xs font-semibold rounded uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm hover:shadow"
          >
            Reservar
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenReserveModal}
            className="px-3.5 py-1.5 bg-[#006948] text-white text-xs font-semibold rounded uppercase tracking-wider"
          >
            Reservar
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-[#006948] transition-colors"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 hover:text-[#006948] py-2 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Compass className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReserveModal?.();
                }}
                className="w-full py-3 bg-[#006948] text-white text-sm font-semibold rounded text-center flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reservar Fecha</span>
              </button>
              <a
                href={getWhatsAppUrl("¡Hola! Quisiera información para visitar El Gran T´Zunun")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-white text-sm font-semibold rounded text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
