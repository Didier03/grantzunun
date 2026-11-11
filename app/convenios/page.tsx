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
import { useTranslation } from "@/i18n";

export default function ConveniosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const page = t.pages.convenios;

  const programIcons = [Compass, Building2, GraduationCap, Users];

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
                <Handshake className="w-3.5 h-3.5" />
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

        {/* Programs Grid */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {page.programs.map((prog, idx) => {
              const Icon = programIcons[idx] || Compass;
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
                    <span>{page.requestAgreementBtn}</span>
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
