"use client";

import React from "react";
import {
  CheckCircle2,
  MessageCircle,
  Utensils,
  Bus,
  Bed,
  Tent,
  Sparkles,
} from "lucide-react";
import {
  PackageCatalogItem,
  PackageTranslationItem,
  VisitorTier,
} from "@/types";
import {
  calculatePackageQuote,
  formatGuestsSummary,
  formatMoney,
  formatPriceNumber,
  getCurrencyForTier,
} from "@/lib/pricing";
import { buildReservationWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";

interface PackageCardProps {
  pkg: PackageCatalogItem;
  tier: VisitorTier;
  className?: string;
  onReserve?: (pkg: PackageCatalogItem) => void;
  onSelectForQuote?: (pkg: PackageCatalogItem) => void;
}

export function PackageCard({
  pkg,
  tier,
  className = "",
  onReserve,
  onSelectForQuote,
}: PackageCardProps) {
  const { locale, t } = useTranslation();
  const copy: PackageTranslationItem = t.packagesSection.catalog[pkg.id];
  const cardText = t.packagesSection.card;
  const currency = getCurrencyForTier(tier);
  const unitLabel = t.packagesSection.units[pkg.unitKey];
  const headlinePrice = pkg.cardPrice[tier];
  const isPopular = Boolean(pkg.isPopular);

  const minorPriceNote = pkg.minorCardPrice
    ? cardText.minorRateBadgeTemplate.replace(
        "{price}",
        formatMoney(pkg.minorCardPrice[tier], currency, locale)
      )
    : null;

  const extraMinorNote = pkg.extraMinorCardPrice
    ? (pkg.extraMinorIncludesBreakfast
        ? cardText.extraMinorIncludedTemplate
        : cardText.extraMinorNoBreakfastTemplate
      ).replace(
        "{price}",
        formatMoney(pkg.extraMinorCardPrice[tier], currency, locale)
      )
    : null;

  const getItemIcon = (text: string) => {
    const lower = text.toLowerCase();
    const iconColor = isPopular ? "text-[#85f8c4]" : "text-[#006948]";
    if (
      lower.includes("almuerzo") ||
      lower.includes("desayuno") ||
      lower.includes("cena") ||
      lower.includes("lunch") ||
      lower.includes("breakfast") ||
      lower.includes("dinner")
    ) {
      return <Utensils className={`w-4 h-4 shrink-0 ${iconColor}`} />;
    }
    if (
      lower.includes("transporte") ||
      lower.includes("transport") ||
      lower.includes("autobús") ||
      lower.includes("bus")
    ) {
      return <Bus className={`w-4 h-4 shrink-0 ${iconColor}`} />;
    }
    if (
      lower.includes("matrimonial") ||
      lower.includes("king") ||
      lower.includes("room") ||
      lower.includes("bed")
    ) {
      return <Bed className={`w-4 h-4 shrink-0 ${iconColor}`} />;
    }
    if (lower.includes("campaña") || lower.includes("tent") || lower.includes("acampado")) {
      return <Tent className={`w-4 h-4 shrink-0 ${iconColor}`} />;
    }
    if (lower.includes("cacao") || lower.includes("ceremonia") || lower.includes("ceremony")) {
      return <Sparkles className={`w-4 h-4 shrink-0 ${iconColor}`} />;
    }
    return <CheckCircle2 className={`w-4 h-4 shrink-0 ${iconColor}`} />;
  };

  const handlePrimaryAction = () => {
    if (onReserve) {
      onReserve(pkg);
      return;
    }

    // Fallback direct WhatsApp link if no modal callback was supplied
    const quote = calculatePackageQuote({
      tier,
      adults: pkg.defaultGuests.adults,
      minors: pkg.defaultGuests.minors,
      under6: pkg.defaultGuests.under6,
      pricingRule: pkg.pricingRule,
      minPeople: pkg.minPeople,
      maxPeople: pkg.maxPeople,
      includesTransport: pkg.includesTransport,
    });

    const msg = buildReservationWhatsAppMessage({
      labels: t.quickModal.whatsappTemplate,
      visitorTierText: t.packagesSection.tiers[tier],
      categoryText: t.packagesSection.categories[pkg.category].label,
      packageName: copy.name,
      guestsSummary: formatGuestsSummary(
        pkg.defaultGuests.adults,
        pkg.defaultGuests.minors,
        pkg.defaultGuests.under6,
        pkg.category === "daypass",
        t.packagesSection.calculator
      ),
      transportText: pkg.includesTransport
        ? t.packagesSection.calculator.whatsappValues.transportIncluded
        : undefined,
      totalEstimated: quote.total,
      currency,
      locale,
    });

    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  if (isPopular) {
    return (
      <div
        className={`relative bg-[#006948] text-white rounded-xl p-6 flex flex-col justify-between shadow-2xl -mt-2 md:-mt-4 mb-2 md:mb-0 transform hover:-translate-y-1 transition-all duration-300 border-2 border-[#85f8c4]/40 ${className}`}
      >
        {/* Top Floating Badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#9b3e3b] text-white px-3.5 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold shadow-md whitespace-nowrap">
          {copy.highlightBadge || cardText.popularBadgeDefault}
        </div>

        <div>
          <div className="mb-4 mt-2">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
              {copy.audience}
            </span>
            <h3 className="text-xl font-bold text-white mt-3 font-display leading-snug">
              {copy.name}
            </h3>
            <p className="text-xs text-emerald-100/85 mt-1.5 leading-relaxed">
              {copy.subtitle}
            </p>
          </div>

          <div className="my-5">
            <div>
              <span className="text-4xl font-extrabold text-white tracking-tight font-display tabular-nums">
                {formatPriceNumber(headlinePrice, locale)}
              </span>
              <span className="text-xs text-emerald-200 ml-1.5 font-medium">
                {currency} / {unitLabel}
              </span>
            </div>

            {minorPriceNote && (
              <div className="mt-2 inline-block px-2.5 py-1 rounded-md bg-white/15 text-emerald-50 text-[11px] font-semibold">
                {minorPriceNote}
              </div>
            )}

            {extraMinorNote && (
              <p className="mt-2 text-[11px] text-emerald-100/90 leading-snug bg-black/15 rounded-md px-2.5 py-1.5">
                {extraMinorNote}
              </p>
            )}
          </div>

          <ul className="space-y-3 mb-6 text-sm text-emerald-50">
            {copy.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                {getItemIcon(feature)}
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <button
            type="button"
            onClick={handlePrimaryAction}
            className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{cardText.reserveBestSeller}</span>
          </button>

          {onSelectForQuote && (
            <button
              type="button"
              onClick={() => onSelectForQuote(pkg)}
              className="w-full text-center text-[11px] text-emerald-200 hover:text-white underline pt-1 transition-colors cursor-pointer"
            >
              {cardText.calculateGroupWithPkg}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Standard Package Card
  return (
    <div
      className={`bg-white rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200/80 hover:-translate-y-0.5 ${className}`}
    >
      <div>
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            {copy.audience}
          </span>
          <h3 className="text-lg font-bold text-neutral-900 mt-3 font-display leading-snug">
            {copy.name}
          </h3>
          <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
            {copy.subtitle}
          </p>
        </div>

        <div className="my-5">
          <div>
            <span className="text-3xl font-extrabold text-[#006948] tracking-tight font-display tabular-nums">
              {formatPriceNumber(headlinePrice, locale)}
            </span>
            <span className="text-xs text-neutral-500 ml-1 font-medium">
              {currency} / {unitLabel}
            </span>
          </div>

          {minorPriceNote && (
            <div className="mt-2 inline-block px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/70 text-[#006948] text-[11px] font-semibold">
              {minorPriceNote}
            </div>
          )}

          {extraMinorNote && (
            <p className="mt-2 text-[11px] text-neutral-600 leading-snug bg-neutral-50 border border-neutral-200/70 rounded-md px-2.5 py-1.5">
              {extraMinorNote}
            </p>
          )}
        </div>

        <ul className="space-y-3 mb-6 text-sm text-neutral-600">
          {copy.features.map((feature, idx) => {
            const lower = feature.toLowerCase();
            const isHighlighted =
              lower.includes("almuerzo") ||
              lower.includes("lunch") ||
              lower.includes("transporte") ||
              lower.includes("transport") ||
              lower.includes("cacao");
            return (
              <li key={idx} className="flex items-start gap-2.5">
                {getItemIcon(feature)}
                <span className={isHighlighted ? "font-semibold text-neutral-900" : ""}>
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="space-y-2 pt-2">
        <button
          type="button"
          onClick={handlePrimaryAction}
          className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{cardText.orderByWhatsapp}</span>
        </button>

        {onSelectForQuote && (
          <button
            type="button"
            onClick={() => onSelectForQuote(pkg)}
            className="w-full text-center text-[11px] text-neutral-500 hover:text-[#006948] underline pt-1 transition-colors cursor-pointer"
          >
            {cardText.calculateGroup}
          </button>
        )}
      </div>
    </div>
  );
}
