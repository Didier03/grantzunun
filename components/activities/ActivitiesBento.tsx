"use client";

import React from "react";
import { ACTIVITIES } from "@/data/parkData";
import { ActivityCard } from "./ActivityCard";

export function ActivitiesBento() {
  return (
    <section className="w-full py-20 bg-[#f2f4f6]" id="actividades">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
            Lo Que Te Espera
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4 font-display">
            Actividades Extremas, Naturaleza y Cultura Maya
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Diseñado para despertar todos tus sentidos. Desde la adrenalina pura en lo alto de los árboles hasta el sosiego en aguas sagradas subterráneas.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {ACTIVITIES.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
