"use client";

import React from "react";
import { LODGING } from "@/data/parkData";
import { LodgingCard } from "./LodgingCard";

export function LodgingSection() {
  return (
    <section className="w-full py-24 bg-[#f2f4f6]" id="hospedaje">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
              Descanso en la Selva
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight font-display">
              Hospedaje & Zona de Camping
            </h2>
          </div>
          <p className="text-neutral-600 text-base max-w-md leading-relaxed">
            Duerme arrullado por el susurro de las hojas y despierta con el canto de aves endémicas. Confort rústico en total armonía con el entorno.
          </p>
        </div>

        {/* Lodging Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LODGING.map((lodging) => (
            <LodgingCard key={lodging.id} lodging={lodging} />
          ))}
        </div>
      </div>
    </section>
  );
}
