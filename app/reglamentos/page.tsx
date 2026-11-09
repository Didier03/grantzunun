"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Droplets,
  Trees,
  AlertTriangle,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuickReservationModal } from "@/components/modal/QuickReservationModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";

export default function ReglamentosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const page = t.pages.reglamentos;

  const categoryIcons = [ShieldCheck, Droplets, Trees, HeartHandshake];

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
                <ShieldCheck className="w-3.5 h-3.5" />
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

        {/* Rules Grid */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {page.categories.map((cat, idx) => {
              const Icon = categoryIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#006948]" />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 mb-4 font-display">
                    {cat.title}
                  </h2>
                  <ul className="space-y-3">
                    {cat.rules.map((rule, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-3 text-sm text-neutral-600 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006948] mt-2 shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Important Notice */}
          <div className="mt-10 bg-amber-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-amber-950 mb-1 font-display">
                  {page.noticeTitle}
                </h3>
                <p className="text-sm text-amber-900/80">
                  {page.noticeDesc}
                </p>
              </div>
            </div>
            <a
              href={getWhatsAppUrl(page.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#006948] hover:bg-[#005137] text-white text-xs font-semibold rounded-lg uppercase tracking-wider shrink-0 inline-flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{page.askGuideBtn}</span>
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
