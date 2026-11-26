"use client";

import React, { useState } from "react";
import {
  X,
  MessageCircle,
  Calendar,
  Users,
  Ticket,
  User,
  Globe2,
  Bus,
  AlertCircle,
} from "lucide-react";
import {
  PackageCatalogItem,
  PackageCategory,
  PackageId,
  ReservationPreset,
  TransportAddonId,
  VisitorTier,
} from "@/types";
import {
  PACKAGE_CATEGORIES,
  TRANSPORT_RATES,
  VISITOR_TIERS,
  getPackageById,
  getPackagesByCategory,
} from "@/data/packages";
import {
  calculatePackageQuote,
  formatGuestsSummary,
  formatMoney,
  formatPackageOptionLabel,
  formatQuoteBreakdown,
  formatValidationIssue,
  getCurrencyForTier,
  getSuggestedTierForLocale,
} from "@/lib/pricing";
import { buildReservationWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";

interface QuickReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preset?: ReservationPreset | null;
}

export function QuickReservationModal({
  isOpen,
  onClose,
  preset,
}: QuickReservationModalProps) {
  if (!isOpen) return null;
  return <QuickReservationModalDialog onClose={onClose} preset={preset} />;
}

function QuickReservationModalDialog({
  onClose,
  preset,
}: {
  onClose: () => void;
  preset?: ReservationPreset | null;
}) {
  const { locale, t } = useTranslation();
  const sec = t.packagesSection;
  const calcText = sec.calculator;
  const modalText = t.quickModal;

  const initialPkg: PackageCatalogItem = (() => {
    if (preset?.packageId) {
      const matched = getPackageById(preset.packageId);
      if (matched) return matched;
    }
    const targetCategory = preset?.category ?? "daypass";
    const items = getPackagesByCategory(targetCategory);
    return items.find((p) => p.isPopular) ?? items[0];
  })();

  const [name, setName] = useState("");
  const [visitorTier, setVisitorTier] = useState<VisitorTier>(
    () => preset?.tier ?? getSuggestedTierForLocale(locale)
  );
  const [category, setCategory] = useState<PackageCategory>(initialPkg.category);
  const [selectedPackageId, setSelectedPackageId] = useState<PackageId>(
    initialPkg.id
  );
  const [adults, setAdults] = useState<number>(initialPkg.defaultGuests.adults);
  const [minors, setMinors] = useState<number>(initialPkg.defaultGuests.minors);
  const [under6, setUnder6] = useState<number>(initialPkg.defaultGuests.under6);
  const [transportAddon, setTransportAddon] = useState<TransportAddonId>("none");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const categoryPackages = getPackagesByCategory(category);
  const activePkg: PackageCatalogItem =
    getPackageById(selectedPackageId) ?? categoryPackages[0];
  const activePkgCopy = sec.catalog[activePkg.id];
  const currency = getCurrencyForTier(visitorTier);

  const handleCategoryChange = (nextCat: PackageCategory) => {
    setCategory(nextCat);
    const items = getPackagesByCategory(nextCat);
    const nextPkg = items.find((p) => p.isPopular) ?? items[0];
    if (nextPkg) {
      setSelectedPackageId(nextPkg.id);
      setAdults(nextPkg.defaultGuests.adults);
      setMinors(nextPkg.defaultGuests.minors);
      setUnder6(nextPkg.defaultGuests.under6);
      if (nextPkg.includesTransport) {
        setTransportAddon("none");
      }
    }
  };

  const handlePackageChange = (nextId: PackageId) => {
    setSelectedPackageId(nextId);
    const nextPkg = getPackageById(nextId);
    if (nextPkg) {
      setAdults(nextPkg.defaultGuests.adults);
      setMinors(nextPkg.defaultGuests.minors);
      setUnder6(nextPkg.defaultGuests.under6);
      if (nextPkg.includesTransport) {
        setTransportAddon("none");
      }
    }
  };

  const quote = calculatePackageQuote({
    tier: visitorTier,
    adults,
    minors,
    under6,
    pricingRule: activePkg.pricingRule,
    minPeople: activePkg.minPeople,
    maxPeople: activePkg.maxPeople,
    includesTransport: activePkg.includesTransport,
    transportAddon: activePkg.allowsTransportAddon ? transportAddon : "none",
  });

  const breakdownText = formatQuoteBreakdown(
    quote,
    activePkg.pricingRule,
    calcText,
    locale
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote.isValid) return;

    let transportText: string | undefined;
    if (activePkg.includesTransport) {
      transportText = calcText.whatsappValues.transportIncluded;
    } else if (
      activePkg.allowsTransportAddon &&
      transportAddon === "roundtrip-small"
    ) {
      transportText = calcText.whatsappValues.transportSmall;
    } else if (activePkg.allowsTransportAddon && transportAddon === "bus-large") {
      transportText = calcText.whatsappValues.transportBus;
    }

    const text = buildReservationWhatsAppMessage({
      labels: modalText.whatsappTemplate,
      clientName: name,
      visitorTierText: sec.tiers[visitorTier],
      categoryText: sec.categories[category].label,
      packageName: activePkgCopy.name,
      guestsSummary: formatGuestsSummary(
        adults,
        minors,
        under6,
        category === "daypass",
        calcText
      ),
      date: date || undefined,
      transportText,
      totalEstimated: quote.total,
      currency,
      locale,
      notes: notes || undefined,
    });

    const url = getWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl w-full max-w-lg max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-neutral-200 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#006948] text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-lg font-bold font-display">{modalText.title}</h3>
            <p className="text-xs text-emerald-100">{modalText.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={modalText.closeAria}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#006948]" />
              {modalText.nameLabel}
            </label>
            <input
              type="text"
              required
              placeholder={modalText.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
            />
          </div>

          {/* Visitor Tier & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#006948]" />
                {modalText.visitorTierLabel}
              </label>
              <select
                value={visitorTier}
                onChange={(e) => setVisitorTier(e.target.value as VisitorTier)}
                className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              >
                {VISITOR_TIERS.map((tier) => (
                  <option key={tier} value={tier}>
                    {sec.tiers[tier]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                <Ticket className="w-3.5 h-3.5 text-[#006948]" />
                {modalText.categoryLabel}
              </label>
              <select
                value={category}
                onChange={(e) =>
                  handleCategoryChange(e.target.value as PackageCategory)
                }
                className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              >
                {PACKAGE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {sec.categories[cat].label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Specific Package */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
              <Ticket className="w-3.5 h-3.5 text-[#006948]" />
              {modalText.packageLabel}
            </label>
            <select
              value={activePkg.id}
              onChange={(e) => handlePackageChange(e.target.value as PackageId)}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
            >
              {categoryPackages.map((pkg) => {
                const pkgCopy = sec.catalog[pkg.id];
                return (
                  <option key={pkg.id} value={pkg.id}>
                    {formatPackageOptionLabel(
                      pkgCopy.name,
                      pkg.pricingRule,
                      visitorTier,
                      calcText,
                      locale
                    )}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Guest Counters */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#006948]" />
              {calcText.visitorsCountLabel}
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                <span className="block text-[10px] text-neutral-500 font-medium truncate">
                  {modalText.adultsLabel}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(0, adults - 1))}
                    className="w-6 h-6 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-neutral-900 tabular-nums">
                    {adults}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-6 h-6 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                <span className="block text-[10px] text-neutral-500 font-medium truncate">
                  {modalText.minorsLabel}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <button
                    type="button"
                    onClick={() => setMinors(Math.max(0, minors - 1))}
                    className="w-6 h-6 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-neutral-900 tabular-nums">
                    {minors}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMinors(minors + 1)}
                    className="w-6 h-6 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                <span className="block text-[10px] text-neutral-500 font-medium truncate">
                  {modalText.under6Label}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <button
                    type="button"
                    onClick={() => setUnder6(Math.max(0, under6 - 1))}
                    className="w-6 h-6 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-neutral-900 tabular-nums">
                    {under6}
                  </span>
                  <button
                    type="button"
                    onClick={() => setUnder6(under6 + 1)}
                    className="w-6 h-6 rounded bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Date & Optional Transport */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#006948]" />
                {modalText.dateLabel}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              />
            </div>

            {activePkg.allowsTransportAddon && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                  <Bus className="w-3.5 h-3.5 text-[#006948]" />
                  {modalText.transportLabel}
                </label>
                <select
                  value={transportAddon}
                  onChange={(e) =>
                    setTransportAddon(e.target.value as TransportAddonId)
                  }
                  className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
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
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              {modalText.notesLabel}
            </label>
            <textarea
              rows={2}
              placeholder={modalText.notesPlaceholder}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
            />
          </div>

          {/* Validation Notice */}
          {!quote.isValid && (
            <div
              role="alert"
              className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-1"
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

          {/* Live Estimated Total Summary */}
          <div className="bg-neutral-900 text-white rounded-xl px-4 py-3.5 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[11px] text-neutral-400 block">
                {modalText.estimatedTotalLabel}
              </span>
              {breakdownText && (
                <span className="text-[11px] text-neutral-300 block truncate">
                  {breakdownText}
                </span>
              )}
            </div>
            <div className="text-right shrink-0">
              <span className="text-xl font-extrabold text-[#85f8c4] font-display tabular-nums">
                ${quote.total.toLocaleString(locale === "en" ? "en-US" : "es-MX")}
              </span>
              <span className="text-xs text-neutral-300 font-semibold ml-1">
                {quote.currency}
              </span>
            </div>
          </div>

          <div className="pt-1">
            <button
              type="submit"
              disabled={!quote.isValid}
              className={`w-full py-3.5 px-4 text-white text-sm font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all ${
                quote.isValid
                  ? "bg-[#25D366] hover:bg-[#20ba59] hover:shadow-xl active:scale-95 cursor-pointer"
                  : "bg-neutral-400 cursor-not-allowed"
              }`}
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{modalText.submitBtn}</span>
            </button>
            <p className="text-[11px] text-center text-neutral-500 mt-2">
              {modalText.footerNote}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
