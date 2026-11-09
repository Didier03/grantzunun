"use client";

import React from "react";
import { LodgingCard } from "./LodgingCard";
import { useTranslation } from "@/i18n";

export function LodgingSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 bg-[#f2f4f6] scroll-mt-24" id="hospedaje">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
              {t.lodgingSection.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight font-display">
              {t.lodgingSection.title}
            </h2>
          </div>
          <p className="text-neutral-600 text-base max-w-md leading-relaxed">
            {t.lodgingSection.description}
          </p>
        </div>

        {/* Lodging Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.lodgingSection.items.map((lodging) => (
            <LodgingCard key={lodging.id} lodging={lodging} />
          ))}
        </div>
      </div>
    </section>
  );
}
