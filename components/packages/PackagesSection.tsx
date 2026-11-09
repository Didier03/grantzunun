"use client";

import React, { useState } from "react";
import { DayPassPackage } from "@/types";
import { PackageCard } from "./PackageCard";
import { ExpressCalculator } from "./ExpressCalculator";
import { useTranslation } from "@/i18n";

export function PackagesSection() {
  const { t } = useTranslation();
  const packages = t.packagesSection.items;
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    packages[3]?.id || "adultos-almuerzo"
  );

  const selectedPkgForCalc: DayPassPackage | undefined =
    packages.find((p) => p.id === selectedPkgId) || packages[3];

  return (
    <section className="w-full py-24 bg-white scroll-mt-24" id="paquetes">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
            {t.packagesSection.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4 font-display">
            {t.packagesSection.title}
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            {t.packagesSection.description}
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectForQuote={(p) => setSelectedPkgId(p.id)}
            />
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          <span>{t.packagesSection.disclaimer}</span>
        </div>

        {/* Express Calculator Component */}
        <ExpressCalculator initialPackage={selectedPkgForCalc} />
      </div>
    </section>
  );
}
