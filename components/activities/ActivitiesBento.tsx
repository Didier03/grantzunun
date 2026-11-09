"use client";

import React from "react";
import { ActivityCard } from "./ActivityCard";
import { useTranslation } from "@/i18n";

export function ActivitiesBento() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 bg-[#f2f4f6] scroll-mt-24" id="actividades-extremas">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
            {t.activitiesSection.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4 font-display">
            {t.activitiesSection.title}
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            {t.activitiesSection.description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {t.activitiesSection.items.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
