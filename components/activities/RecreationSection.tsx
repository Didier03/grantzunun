"use client";

import React from "react";
import { RECREATION_ACTIVITIES } from "@/data/parkData";
import { ActivityCard } from "./ActivityCard";

export function RecreationSection() {
  return (
    <section className="w-full py-20 bg-white scroll-mt-24" id="recreacion-descanso">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
            Paz y Armonía Natural
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4 font-display">
            Actividades de Recreación y Descanso
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Espacios pensados para bajar el ritmo, convivir en familia y reconectar con la serenidad de la selva maya sin prisas.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {RECREATION_ACTIVITIES.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
