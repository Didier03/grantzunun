"use client";

import React from "react";
import Image from "next/image";
import { Coffee, Utensils, Flame, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";

export function GastronomySection() {
  const { t } = useTranslation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Coffee":
        return <Coffee className="w-6 h-6 text-[#006948]" />;
      case "Utensils":
        return <Utensils className="w-6 h-6 text-[#006948]" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-[#9b3e3b]" />;
      default:
        return <Utensils className="w-6 h-6 text-[#006948]" />;
    }
  };

  return (
    <section className="w-full py-20 bg-white scroll-mt-24" id="gastronomia">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Asset with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square relative bg-neutral-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_CiXLpO2uv99SIQHkuU4BrrEk3tAMPU7rbjEQvP1-qOHwnIVcvxhJuFF7fvV3Mu51kziUhEukt2zR7z3uFCd8hV2CzXWQ-eKk0nRxOYLWMfMYvPks23acIPeNvL6Ca4saYn_D4f2SXwno5GFmoQhhmGHfvlM8Nou4ev_yf5FdlPzUF7wClmaPOxShkyO9OZx322NZKo-WfzRi97ONi84N2iDpBMYANVqerMdHaEgFLUQMb5qy-QHKKvkz3RHyzcxCNQ"
                alt={t.gastronomySection.imageAlt}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-5 -right-3 bg-[#006948] text-white p-4 rounded-xl shadow-xl max-w-[210px] hidden sm:block border border-emerald-400/30">
              <p className="text-xs font-bold uppercase tracking-wider text-[#85f8c4]">
                {t.gastronomySection.floatingTagTitle}
              </p>
              <p className="text-xs text-emerald-100 mt-1 leading-snug">
                {t.gastronomySection.floatingTagDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Copy & 3 Pillars */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9b3e3b] block mb-2">
              {t.gastronomySection.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6 font-display">
              {t.gastronomySection.title}
            </h2>
            <p className="text-neutral-600 text-base mb-8 leading-relaxed">
              {t.gastronomySection.description}
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {t.gastronomySection.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:bg-neutral-100/70 transition-colors"
                >
                  <div className="mb-2">{getIcon(pillar.iconName)}</div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-1 font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action */}
            <a
              href={getWhatsAppUrl(t.gastronomySection.ctaWhatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#006948] hover:bg-[#005137] text-white rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#85f8c4]" />
              <span>{t.gastronomySection.ctaText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
