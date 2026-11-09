"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trees, Feather, Compass, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuickReservationModal } from "@/components/modal/QuickReservationModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";

export default function HistoriaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const page = t.pages.historia;

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans antialiased">
      <Navbar onOpenReserveModal={() => setIsModalOpen(true)} />

      <main className="flex-1 pt-28 lg:pt-36 pb-20">
        {/* Hero Banner */}
        <section className="bg-[#003926] text-white py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#85f8c4] hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.pages.common.backToHome}</span>
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-400/30 text-[#85f8c4] text-xs font-semibold uppercase tracking-wider mb-4">
                <Feather className="w-3.5 h-3.5" />
                <span>{page.badge}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 font-display">
                {page.title}
              </h1>
              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
                {page.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Legend & Meaning */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-2xl p-8 md:p-12 border border-neutral-200/80 shadow-sm">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
                {page.legendEyebrow}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-display">
                {page.legendTitle}
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                {page.legendP1}
              </p>
              <p className="text-neutral-600 text-base leading-relaxed">
                {page.legendP2Prefix} <strong>{page.legendP2Strong}</strong>
                {page.legendP2Suffix}
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#f2f4f6] rounded-xl p-8 border border-neutral-200/60">
              <Trees className="w-10 h-10 text-[#006948] mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">
                {page.missionTitle}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {page.missionDesc}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                <div>
                  <span className="text-2xl font-bold text-[#006948] block font-display">100%</span>
                  <span className="text-xs text-neutral-500">{page.statProtectedLabel}</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#006948] block font-display">+40</span>
                  <span className="text-xs text-neutral-500">{page.statBirdSpeciesLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9b3e3b] block mb-2">
              {page.timelineEyebrow}
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 font-display">
              {page.timelineTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[#006948] text-xs font-bold uppercase tracking-wider mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-[#006948] rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 font-display">
                {page.ctaTitle}
              </h3>
              <p className="text-emerald-100 text-sm max-w-xl">
                {page.ctaDesc}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/#paquetes"
                className="px-6 py-3 bg-white text-[#006948] text-sm font-semibold rounded-lg hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>{page.viewPackagesBtn}</span>
              </Link>
              <a
                href={getWhatsAppUrl(page.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#20ba59] transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{page.contactWhatsappBtn}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <QuickReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
