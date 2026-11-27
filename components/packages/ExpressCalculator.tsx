"use client";

import React, { useState } from "react";
import {
  Calculator,
  Bus,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Compass,
} from "lucide-react";
import {
  CalculatorPackageId,
  CalculatorPackageItem,
  PackageCategory,
  TransportAddonId,
  VisitorTier,
} from "@/types";
import {
  PACKAGE_CATEGORIES,
  TRANSPORT_RATES,
  VISITOR_TIERS,
  getCalculatorPackageById,
  getCalculatorPackagesByCategory,
} from "@/data/packages";
import {
  calculatePackageQuote,
  formatGuestsSummary,
  formatMoney,
  formatPackageOptionLabel,
  formatQuoteBreakdown,
  formatValidationIssue,
  getCurrencyForTier,
} from "@/lib/pricing";
import { buildReservationWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";

export interface ExternalCalculatorSelection {
  category: PackageCategory;
  calculatorId: CalculatorPackageId;
  defaultGuests?: {
    adults: number;
    minors: number;
    under6: number;
  };
  nonce: number;
}

interface ExpressCalculatorProps {
  visitorTier: VisitorTier;
  onVisitorTierChange: (tier: VisitorTier) => void;
  externalSelection?: ExternalCalculatorSelection | null;
}

export function ExpressCalculator({
  visitorTier,
  onVisitorTierChange,
  externalSelection,
}: ExpressCalculatorProps) {
  return (
    <ExpressCalculatorForm
      key={externalSelection?.nonce ?? 0}
      visitorTier={visitorTier}
      onVisitorTierChange={onVisitorTierChange}
      initialSelection={externalSelection}
    />
  );
}

interface ExpressCalculatorFormProps {
  visitorTier: VisitorTier;
  onVisitorTierChange: (tier: VisitorTier) => void;
  initialSelection?: ExternalCalculatorSelection | null;
}

function ExpressCalculatorForm({
  visitorTier,
  onVisitorTierChange,
  initialSelection,
}: ExpressCalculatorFormProps) {
  const { locale, t } = useTranslation();
  const sec = t.packagesSection;
  const calcText = sec.calculator;

  const [isOpen, setIsOpen] = useState<boolean>(() => Boolean(initialSelection));
  const [category, setCategory] = useState<PackageCategory>(
    () => initialSelection?.category ?? "daypass"
  );
  const [selectedPackageId, setSelectedPackageId] =
    useState<CalculatorPackageId>(
      () => initialSelection?.calculatorId ?? "calc-daypass-lunch"
    );
  const [adults, setAdults] = useState<number>(
    () => initialSelection?.defaultGuests?.adults ?? 2
  );
  const [minors, setMinors] = useState<number>(
    () => initialSelection?.defaultGuests?.minors ?? 1
  );
  const [under6, setUnder6] = useState<number>(
    () => initialSelection?.defaultGuests?.under6 ?? 0
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [transportAddon, setTransportAddon] = useState<TransportAddonId>("none");
  const [guidedRoute, setGuidedRoute] = useState(false);
  const [name, setName] = useState("");

  const categoryOptions = getCalculatorPackagesByCategory(category);
  const currentPkg: CalculatorPackageItem =
    getCalculatorPackageById(selectedPackageId) || categoryOptions[0];

  const handleCategoryChange = (nextCategory: PackageCategory) => {
    setCategory(nextCategory);
    const nextOptions = getCalculatorPackagesByCategory(nextCategory);
    if (nextOptions.length > 0) {
      const nextPkg = nextOptions[0];
      setSelectedPackageId(nextPkg.id);
      if (nextPkg.includesTransport) {
        setTransportAddon("none");
      }
      if (!nextPkg.allowsGuidedRouteAddon) {
        setGuidedRoute(false);
      }
      if (nextPkg.minPeople && adults + minors < nextPkg.minPeople) {
        setAdults(nextPkg.minPeople);
        setMinors(0);
      }
    }
  };

  const handlePackageChange = (nextId: CalculatorPackageId) => {
    setSelectedPackageId(nextId);
    const nextPkg = getCalculatorPackageById(nextId);
    if (!nextPkg) return;
    if (nextPkg.includesTransport) {
      setTransportAddon("none");
    }
    if (!nextPkg.allowsGuidedRouteAddon) {
      setGuidedRoute(false);
    }
  };

  const resolvePackageText = (pkgId: CalculatorPackageId) => {
    if (pkgId === "calc-daypass-general" || pkgId === "calc-daypass-lunch") {
      return sec.calculatorCombinedPackages[pkgId];
    }
    const item = sec.catalog[pkgId];
    return { name: item.name, subtitle: item.subtitle };
  };

  const currentPkgText = resolvePackageText(currentPkg.id);
  const currency = getCurrencyForTier(visitorTier);

  const quote = calculatePackageQuote({
    tier: visitorTier,
    adults,
    minors,
    under6,
    pricingRule: currentPkg.pricingRule,
    minPeople: currentPkg.minPeople,
    maxPeople: currentPkg.maxPeople,
    includesTransport: currentPkg.includesTransport,
    transportAddon: currentPkg.allowsTransportAddon ? transportAddon : "none",
    guidedRoute: currentPkg.allowsGuidedRouteAddon ? guidedRoute : false,
  });

  const breakdownText = formatQuoteBreakdown(
    quote,
    currentPkg.pricingRule,
    calcText,
    locale
  );

  const handleSendToWhatsApp = () => {
    if (!quote.isValid) return;

    let transportText: string | undefined;
    if (currentPkg.includesTransport) {
      transportText = calcText.whatsappValues.transportIncluded;
    } else if (
      currentPkg.allowsTransportAddon &&
      transportAddon === "roundtrip-small"
    ) {
      transportText = calcText.whatsappValues.transportSmall;
    } else if (
      currentPkg.allowsTransportAddon &&
      transportAddon === "bus-large"
    ) {
      transportText = calcText.whatsappValues.transportBus;
    }

    const message = buildReservationWhatsAppMessage({
      labels: calcText.whatsappLabels,
      clientName: name || undefined,
      visitorTierText: sec.tiers[visitorTier],
      categoryText: sec.categories[category].label,
      packageName: currentPkgText.name,
      guestsSummary: formatGuestsSummary(
        adults,
        minors,
        under6,
        category === "daypass",
        calcText
      ),
      date: selectedDate || undefined,
      transportText,
      guidedRouteText:
        currentPkg.allowsGuidedRouteAddon && guidedRoute
          ? calcText.whatsappValues.guidedRouteYes
          : undefined,
      totalEstimated: quote.total,
      currency,
      locale,
    });

    const url = getWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const smallTransportFormatted = formatMoney(
    TRANSPORT_RATES.roundtripSmall[visitorTier],
    currency,
    locale
  );
  const busTransportFormatted = formatMoney(
    TRANSPORT_RATES.busLarge[visitorTier],
    currency,
    locale
  );

  return (
    <div className="mt-12 bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-neutral-50 hover:bg-neutral-100/80 transition-colors flex items-center justify-between text-left cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#006948]/10 text-[#006948]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#006948] block">
              {calcText.eyebrow}
            </span>
            <h4 className="text-base font-bold text-neutral-900 font-display">
              {calcText.title}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
          <span>{isOpen ? calcText.hideBtn : calcText.showBtn}</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </button>

      {/* Accordion Body */}
      {isOpen && (
        <div className="p-6 md:p-8 space-y-6 animate-in fade-in duration-200">
          {/* Row 1: Visitor Tier, Category, Package */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                {calcText.visitorTierLabel}
              </label>
              <select
                value={visitorTier}
                onChange={(e) =>
                  onVisitorTierChange(e.target.value as VisitorTier)
                }
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              >
                {VISITOR_TIERS.map((tier) => (
                  <option key={tier} value={tier}>
                    {sec.tiers[tier]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                {calcText.categoryLabel}
              </label>
              <select
                value={category}
                onChange={(e) =>
                  handleCategoryChange(e.target.value as PackageCategory)
                }
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              >
                {PACKAGE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {sec.categories[cat].label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                {calcText.basePackageLabel}
              </label>
              <select
                value={currentPkg.id}
                onChange={(e) =>
                  handlePackageChange(e.target.value as CalculatorPackageId)
                }
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              >
                {categoryOptions.map((opt) => {
                  const optText = resolvePackageText(opt.id);
                  return (
                    <option key={opt.id} value={opt.id}>
                      {formatPackageOptionLabel(
                        optText.name,
                        opt.pricingRule,
                        visitorTier,
                        calcText,
                        locale
                      )}
                    </option>
                  );
                })}
              </select>
              <p className="text-xs text-neutral-500 mt-1.5 leading-snug">
                {currentPkgText.subtitle}
              </p>
            </div>
          </div>

          {/* Row 2: Visitors Counters (Adults 12+, Minors 6-11, Under 6) + Date/Name */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                  {calcText.visitorsCountLabel}
                </label>
                {category === "daypass" && (
                  <span className="text-[11px] font-semibold text-[#006948] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                    {calcText.freeUnder6Badge}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Adults 12+ */}
                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                  <div className="text-[11px] text-neutral-500 font-medium">
                    {calcText.adultsLabel}
                  </div>
                  <div className="flex items-center justify-between mt-1.5">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(0, adults - 1))}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-neutral-900 tabular-nums">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Minors 6-11 */}
                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                  <div className="text-[11px] text-neutral-500 font-medium">
                    {calcText.minorsLabel}
                  </div>
                  <div className="flex items-center justify-between mt-1.5">
                    <button
                      type="button"
                      onClick={() => setMinors(Math.max(0, minors - 1))}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-neutral-900 tabular-nums">
                      {minors}
                    </span>
                    <button
                      type="button"
                      onClick={() => setMinors(minors + 1)}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Kids <6 */}
                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                  <div className="text-[11px] text-neutral-500 font-medium">
                    {calcText.under6Label}
                  </div>
                  <div className="flex items-center justify-between mt-1.5">
                    <button
                      type="button"
                      onClick={() => setUnder6(Math.max(0, under6 - 1))}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-neutral-900 tabular-nums">
                      {under6}
                    </span>
                    <button
                      type="button"
                      onClick={() => setUnder6(under6 + 1)}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Date & Name */}
            <div className="lg:col-span-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                {calcText.dateAndNameLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
                />
                <input
                  type="text"
                  placeholder={calcText.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#006948]"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Transport Add-ons & Guided Route */}
          <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                <Bus className="w-3.5 h-3.5 text-[#006948]" />
                {calcText.transportAddonLabel}
              </label>
              {currentPkg.includesTransport ? (
                <p className="text-xs font-medium text-[#006948] bg-emerald-50 border border-emerald-200/80 rounded-lg px-3 py-2">
                  {calcText.transportIncludedNote}
                </p>
              ) : (
                <select
                  value={transportAddon}
                  onChange={(e) =>
                    setTransportAddon(e.target.value as TransportAddonId)
                  }
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
                >
                  <option value="none">{calcText.transportNoneOption}</option>
                  <option value="roundtrip-small">
                    {calcText.transportSmallOptionTemplate.replace(
                      "{price}",
                      smallTransportFormatted
                    )}
                  </option>
                  <option value="bus-large">
                    {calcText.transportBusOptionTemplate.replace(
                      "{price}",
                      busTransportFormatted
                    )}
                  </option>
                </select>
              )}
            </div>

            {currentPkg.allowsGuidedRouteAddon && (
              <div className="md:pt-5">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={guidedRoute}
                    onChange={(e) => setGuidedRoute(e.target.checked)}
                    className="w-4 h-4 rounded text-[#006948] focus:ring-[#006948] border-neutral-300"
                  />
                  <span className="text-xs font-medium text-neutral-700 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#006948] shrink-0" />
                    {calcText.guidedRouteLabel}
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Validation Notices */}
          {!quote.isValid && (
            <div
              role="alert"
              className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-1.5"
            >
              {quote.validationIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs font-medium text-amber-900"
                >
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{formatValidationIssue(issue, calcText.validations)}</span>
                </div>
              ))}
            </div>
          )}

          {/* Calculation Summary & WhatsApp Action */}
          <div className="bg-neutral-900 text-white rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block">
                {calcText.estimatedTotalLabel}
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-extrabold text-[#85f8c4] tabular-nums font-display">
                  ${quote.total.toLocaleString(locale === "en" ? "en-US" : "es-MX")}
                </span>
                <span className="text-xs text-neutral-300 font-semibold">
                  {quote.currency}
                </span>
              </div>
              <span className="text-[11px] text-neutral-400 block mt-1 leading-relaxed">
                {breakdownText ? `${breakdownText} · ` : ""}
                {calcText.subjectToConfirmation}
              </span>
            </div>

            <button
              type="button"
              disabled={!quote.isValid}
              onClick={handleSendToWhatsApp}
              className={`w-full md:w-auto px-6 py-3.5 text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2.5 shadow-lg transition-all whitespace-nowrap ${
                quote.isValid
                  ? "bg-[#25D366] hover:bg-[#20ba59] hover:shadow-xl active:scale-95 cursor-pointer"
                  : "bg-neutral-700 text-neutral-400 cursor-not-allowed opacity-75"
              }`}
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{calcText.sendQuoteBtn}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
