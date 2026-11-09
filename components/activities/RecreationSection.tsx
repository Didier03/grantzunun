"use client";

import React from "react";
import { ActivityCard } from "./ActivityCard";
import { useTranslation } from "@/i18n";

export function RecreationSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 bg-white scroll-mt-24" id="recreacion-descanso">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
            {t.recreationSection.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4 font-display">
            {t.recreationSection.title}
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            {t.recreationSection.description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {t.recreationSection.items.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
