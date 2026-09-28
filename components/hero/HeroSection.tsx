"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Trees, ArrowRight, Ticket, MessageCircle } from "lucide-react";
import { PARK_INFO } from "@/data/parkData";
import { TrustBadges } from "./TrustBadges";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = PARK_INFO.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-neutral-900 pt-20">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            } transform transition-transform duration-[7000ms]`}
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority={index === 0}
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Cinematic Scrim & Gradients for Crisp Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/75 to-neutral-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-20 w-full z-10">
        <div className="max-w-2xl text-white">
          {/* Park Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#006948]/90 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-400/30 shadow-sm">
            <Trees className="w-4 h-4 text-[#85f8c4]" />
            <span>{PARK_INFO.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6 font-display">
            Descubre la Aventura y la Naturaleza en{" "}
            <span className="text-[#85f8c4] inline-block drop-shadow-sm">
              El Gran T´Zunun
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 font-normal mb-8 max-w-xl leading-relaxed">
            {PARK_INFO.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href={getWhatsAppUrl("¡Hola! Quiero información para planear mi visita a El Gran T´Zunun.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Planear mi visita por WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#paquetes"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded backdrop-blur-sm transition-all duration-200 border border-white/20 active:scale-95"
            >
              <Ticket className="w-4 h-4 text-emerald-300" />
              <span>Ver Tarifas y Paquetes</span>
            </a>
          </div>

          {/* Trust Badges */}
          <TrustBadges />
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#85f8c4]"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
