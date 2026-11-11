"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  HeartPulse,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuickReservationModal } from "@/components/modal/QuickReservationModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";

export default function CertificacionesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const page = t.pages.certificaciones;

  const certIcons = [ShieldCheck, Award, Leaf, HeartPulse];

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
              <span>{t.pages.common.backToHome}</span>
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-400/30 text-[#85f8c4] text-xs font-semibold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>{page.badge}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 font-display">
                {page.title}
              </h1>
              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
                {page.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {page.items.map((cert, idx) => {
              const Icon = certIcons[idx] || Award;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#006948]" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#006948] text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {cert.badge}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-1 font-display">
                      {cert.title}
                    </h2>
                    <p className="text-xs font-semibold text-[#9b3e3b] uppercase tracking-wider mb-4">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Institutional Assurance */}
          <div className="mt-12 bg-white rounded-2xl p-8 md:p-10 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">
                {page.ctaTitle}
              </h3>
              <p className="text-sm text-neutral-600 max-w-2xl">
                {page.ctaDesc}
              </p>
            </div>
            <a
              href={getWhatsAppUrl(page.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#006948] hover:bg-[#005137] text-white text-sm font-semibold rounded-lg shrink-0 inline-flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{page.requestDossierBtn}</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <QuickReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
