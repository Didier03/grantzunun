"use client";

import React, { useState } from "react";
import { PACKAGES } from "@/data/parkData";
import { DayPassPackage } from "@/types";
import { PackageCard } from "./PackageCard";
import { ExpressCalculator } from "./ExpressCalculator";

export function PackagesSection() {
  const [selectedPkgForCalc, setSelectedPkgForCalc] = useState<DayPassPackage | undefined>(
    PACKAGES[3]
  );

  return (
    <section className="w-full py-24 bg-white" id="paquetes">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
            Tarifas Transparentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4 font-display">
            Elige tu Paquete Pasadía
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Pasa un día inolvidable con accesos diseñados para toda la familia. Reserva tu fecha con confirmación instantánea vía WhatsApp.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectForQuote={(p) => setSelectedPkgForCalc(p)}
            />
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          <span>
            * Precios en pesos mexicanos (MXN). Grupos de más de 10 personas reciben descuento adicional solicitándolo por WhatsApp.
          </span>
        </div>

        {/* Express Calculator Component */}
        <ExpressCalculator initialPackage={selectedPkgForCalc} />
      </div>
    </section>
  );
}
