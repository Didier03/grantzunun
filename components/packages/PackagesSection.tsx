"use client";

import React, { useRef, useState } from "react";
import { Sun, Zap, Bed, Tent, Clock, Bus, Globe2 } from "lucide-react";
import {
  CalculatorPackageId,
  PackageCatalogItem,
  PackageCategory,
  ReservationPreset,
  VisitorTier,
} from "@/types";
import {
  PACKAGE_CATEGORIES,
  TRANSPORT_RATES,
  VISITOR_TIERS,
  getPackagesByCategory,
} from "@/data/packages";
import {
  formatMoney,
  getCurrencyForTier,
  getSuggestedTierForLocale,
} from "@/lib/pricing";
import { PackageCard } from "./PackageCard";
import { ExpressCalculator, ExternalCalculatorSelection } from "./ExpressCalculator";
import { useTranslation } from "@/i18n";

interface PackagesSectionProps {
  onOpenReserveModal?: (preset: ReservationPreset) => void;
}

const CATEGORY_ICONS: Record<PackageCategory, React.ComponentType<{ className?: string }>> = {
  daypass: Sun,
  extreme: Zap,
  lodging: Bed,
  camping: Tent,
};

export function PackagesSection({ onOpenReserveModal }: PackagesSectionProps) {
  const { locale, t } = useTranslation();
  const sec = t.packagesSection;

  const [tierSelection, setTierSelection] = useState<{
    locale: "es" | "en";
    tier: VisitorTier;
  } | null>(null);
  const [activeCategory, setActiveCategory] = useState<PackageCategory>("daypass");
  const [calcSelection, setCalcSelection] = useState<ExternalCalculatorSelection | null>(
    null
  );
  const calculatorRef = useRef<HTMLDivElement>(null);

  // Suggest 'foreigner' on English locale and 'local' on Spanish locale by default,
  // while preserving manual selection within the active locale.
  const visitorTier: VisitorTier =
    tierSelection?.locale === locale
      ? tierSelection.tier
      : getSuggestedTierForLocale(locale);

  const handleVisitorTierChange = (nextTier: VisitorTier) => {
    setTierSelection({ locale, tier: nextTier });
  };

  const currency = getCurrencyForTier(visitorTier);
  const categoryPackages = getPackagesByCategory(activeCategory);
  const activePolicy = sec.categories[activeCategory];

  const handleReserveCard = (pkg: PackageCatalogItem) => {
    if (onOpenReserveModal) {
      onOpenReserveModal({
        tier: visitorTier,
        category: pkg.category,
        packageId: pkg.id,
      });
    }
  };

  const handleSelectForCalculator = (pkg: PackageCatalogItem) => {
    setCalcSelection({
      category: pkg.category,
      calculatorId: pkg.calculatorId as CalculatorPackageId,
      defaultGuests: pkg.defaultGuests,
      nonce: Date.now(),
    });
    setTimeout(() => {
      calculatorRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 80);
  };

  const renderCategoryGrid = () => {
    if (activeCategory === "daypass") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch pt-2">
          {categoryPackages.map((pkg, idx) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              tier={visitorTier}
              className={
                idx === categoryPackages.length - 1
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }
              onReserve={onOpenReserveModal ? handleReserveCard : undefined}
              onSelectForQuote={handleSelectForCalculator}
            />
          ))}
        </div>
      );
    }

    if (activeCategory === "extreme") {
      const mainExtreme = categoryPackages.filter((p) => !p.isTransportCard);
      const transportCards = categoryPackages.filter((p) => p.isTransportCard);

      return (
        <div className="space-y-10 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {mainExtreme.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                tier={visitorTier}
                onReserve={onOpenReserveModal ? handleReserveCard : undefined}
                onSelectForQuote={handleSelectForCalculator}
              />
            ))}
          </div>

          {transportCards.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bus className="w-4 h-4 text-[#006948]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 font-display">
                  {sec.subcategories.transportSectionTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {transportCards.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    tier={visitorTier}
                    onReserve={onOpenReserveModal ? handleReserveCard : undefined}
                    onSelectForQuote={handleSelectForCalculator}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    if (activeCategory === "lodging") {
      const standardRooms = categoryPackages.filter(
        (p) => p.subcategory === "standard"
      );
      const suiteRooms = categoryPackages.filter(
        (p) => p.subcategory === "suite"
      );

      const smallTransportPrice = formatMoney(
        TRANSPORT_RATES.roundtripSmall[visitorTier],
        currency,
        locale
      );
      const busTransportPrice = formatMoney(
        TRANSPORT_RATES.busLarge[visitorTier],
        currency,
        locale
      );

      return (
        <div className="space-y-12 pt-2">
          {/* Subcategoría A: Habitación Estándar (4 cards -> balanced 1 / 2 / 4 cols) */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-neutral-900 font-display">
                {sec.subcategories.standardTitle}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                {sec.subcategories.standardSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {standardRooms.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  tier={visitorTier}
                  onReserve={onOpenReserveModal ? handleReserveCard : undefined}
                  onSelectForQuote={handleSelectForCalculator}
                />
              ))}
            </div>
          </div>

          {/* Subcategoría B: Habitación Suite (3 cards -> balanced 1 / 3 cols) */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-neutral-900 font-display">
                {sec.subcategories.suiteTitle}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                {sec.subcategories.suiteSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {suiteRooms.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  tier={visitorTier}
                  onReserve={onOpenReserveModal ? handleReserveCard : undefined}
                  onSelectForQuote={handleSelectForCalculator}
                />
              ))}
            </div>
          </div>

          {/* Opciones de transporte adicionales en Hospedaje */}
          <div className="bg-neutral-50 border border-neutral-200/90 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-neutral-800">
              <div className="p-2 rounded-lg bg-[#006948]/10 text-[#006948] shrink-0">
                <Bus className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">
                {sec.subcategories.lodgingTransportBannerTitle}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-medium text-neutral-700">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200">
                {sec.subcategories.lodgingTransportSmallTemplate.replace(
                  "{price}",
                  smallTransportPrice
                )}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200">
                {sec.subcategories.lodgingTransportBusTemplate.replace(
                  "{price}",
                  busTransportPrice
                )}
              </span>
            </div>
          </div>
        </div>
      );
    }

    // Camping (6 cards -> balanced 1 / 2 / 3 cols)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pt-2">
        {categoryPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            tier={visitorTier}
            onReserve={onOpenReserveModal ? handleReserveCard : undefined}
            onSelectForQuote={handleSelectForCalculator}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full pt-10 md:pt-12 pb-20 md:pb-24 bg-white border-t border-neutral-200/60 scroll-mt-24" id="paquetes">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006948] block mb-2">
            {sec.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4 font-display">
            {sec.title}
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            {sec.description}
          </p>
        </div>

        {/* Controls Bar: Visitor Tier Selector + Category Tabs */}
        <div className="mb-8 space-y-5">
          {/* 1. Visitor Tier Segmented Control */}
          <div className="flex flex-col items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              <Globe2 className="w-3.5 h-3.5 text-[#006948]" />
              {sec.visitorTierLabel}
            </span>
            <div
              role="group"
              aria-label={sec.visitorTierLabel}
              className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-xl bg-[#f2f4f6] border border-neutral-200/80"
            >
              {VISITOR_TIERS.map((tier) => {
                const isSelected = visitorTier === tier;
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => handleVisitorTierChange(tier)}
                    aria-pressed={isSelected}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#006948] text-white shadow-sm"
                        : "text-neutral-700 hover:text-[#006948] hover:bg-white/70"
                    }`}
                  >
                    {sec.tiers[tier]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Category Tabs */}
          <div
            role="tablist"
            aria-label={sec.categoryTabLabel}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 max-w-4xl mx-auto"
          >
            {PACKAGE_CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer font-display ${
                    isActive
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-md"
                      : "bg-neutral-50 text-neutral-700 border-neutral-200/90 hover:border-[#006948]/50 hover:text-[#006948]"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? "text-[#85f8c4]" : "text-[#006948]"
                    }`}
                  />
                  <span>{sec.categories[cat].label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Policy & Schedule Banner */}
        <div className="mb-10 bg-[#f7f9fb] border border-neutral-200/80 rounded-xl px-5 py-4 flex items-start gap-3.5">
          <div className="p-2 rounded-lg bg-[#006948]/10 text-[#006948] shrink-0 mt-0.5">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#006948] mb-1">
              {activePolicy.policyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {activePolicy.policyText}
            </p>
          </div>
        </div>

        {/* Balanced Category Cards Grid */}
        {renderCategoryGrid()}

        {/* Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          <span>{sec.disclaimer}</span>
        </div>

        {/* Express Calculator Component */}
        <div ref={calculatorRef} id="cotizador-express">
          <ExpressCalculator
            visitorTier={visitorTier}
            onVisitorTierChange={handleVisitorTierChange}
            externalSelection={calcSelection}
          />
        </div>
      </div>
    </section>
  );
}
