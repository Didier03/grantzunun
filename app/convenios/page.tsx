"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Handshake,
  Building2,
  GraduationCap,
  Compass,
  Users,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuickReservationModal } from "@/components/modal/QuickReservationModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ConveniosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const alliancePrograms = [
    {
      title: "Agencias de Viajes y Tour Operadores",
      subtitle: "Tarifas netas comisionables y atención prioritaria",
      description:
        "Trabajamos de la mano con agencias receptivas, hoteles y concierges de la Península de Yucatán. Ofrecemos bloques garantizados, material promocional y logística integral para grupos.",
      benefits: [
        "Tarifas preferenciales B2B y comisiones atractivas",
        "Cortesías para guías y operadores certificados",
        "Confirmación inmediata y facturación fiscal",
      ],
      icon: Compass,
      ctaMessage: "Hola, represento a una agencia/operador turístico y quiero información de convenios con El Gran T´Zunun.",
    },
    {
      title: "Empresas, Sindicatos y Team Building",
      subtitle: "Integración corporativa y beneficios para colaboradores",
      description:
        "Diseñamos jornadas de integración empresarial con circuitos tipo Exatlón, talleres colaborativos, banquetes regionales y descuentos permanentes en pasadías para tus colaboradores y sus familias.",
      benefits: [
        "Descuentos con credencial corporativa vigente",
        "Renta exclusiva de áreas y palapas para eventos",
        "Dinámicas guiadas de liderazgo y trabajo en equipo",
      ],
      icon: Building2,
      ctaMessage: "Hola, me interesa conocer los convenios corporativos y paquetes de Team Building en El Gran T´Zunun.",
    },
    {
      title: "Escuelas, Universidades y Campamentos",
      subtitle: "Educación ambiental y excursiones seguras",
      description:
        "Programas pedagógicos adaptados por nivel educativo donde los estudiantes aprenden sobre botánica maya, conservación de abejas meliponas, geología de cenotes y trabajo comunitario.",
      benefits: [
        "Cortesías para docentes y coordinadores de grupo",
        "Recorridos guiados con enfoque biológico y cultural",
        "Paquetes con transporte y alimentación balanceada",
      ],
      icon: GraduationCap,
      ctaMessage: "Hola, quiero cotizar una excursión escolar o convenio académico en El Gran T´Zunun.",
    },
    {
      title: "Alianzas Comunitarias y Artesanos Locales",
      subtitle: "Comercio justo y economía social en la región",
      description:
        "Nuestra cadena de valor impulsa directamente a productores de miel melipona, cocineras tradicionales, artesanos de hamacas y cooperativas ecoturísticas vecinas.",
      benefits: [
        "Insumos gastronómicos 100% de productores locales",
        "Espacio de difusión para medicina tradicional y cacao",
        "Impulso al empleo digno en comunidades mayas",
      ],
      icon: Users,
      ctaMessage: "Hola, me gustaría conversar sobre una alianza comunitaria o de proveedores locales con El Gran T´Zunun.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans antialiased">
      <Navbar onOpenReserveModal={() => setIsModalOpen(true)} />

      <main className="flex-1 pt-28 lg:pt-36 pb-20">
        {/* Hero */}
        <section className="bg-[#003926] text-white py-16 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#85f8c4] hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-400/30 text-[#85f8c4] text-xs font-semibold uppercase tracking-wider mb-4">
                <Handshake className="w-3.5 h-3.5" />
                <span>Vinculación Institucional y Comercial</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 font-display">
                Convenios y Alianzas
              </h1>
              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
                Construimos relaciones de valor a largo plazo con empresas, instituciones educativas, agencias de viajes y comunidades locales para multiplicar el impacto positivo del ecoturismo.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alliancePrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#006948]" />
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-1 font-display">
                      {prog.title}
                    </h2>
                    <p className="text-xs font-semibold text-[#006948] uppercase tracking-wider mb-4">
                      {prog.subtitle}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                      {prog.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {prog.benefits.map((benefit, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-center gap-2.5 text-sm text-neutral-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#006948] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={getWhatsAppUrl(prog.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#006948] hover:bg-[#005137] text-white text-sm font-semibold rounded-lg text-center inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Solicitar Convenio por WhatsApp</span>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <QuickReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
