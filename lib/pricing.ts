import {
  Currency,
  PricingRule,
  QuoteCalculationInput,
  QuoteCalculationResult,
  ValidationIssue,
  VisitorTier,
} from "@/types";
import type { Dictionary } from "@/i18n/dictionaries/es";
import {
  GUIDED_ROUTE_MIN_PEOPLE,
  TIER_CURRENCY,
  TRANSPORT_ADDONS,
} from "@/data/packages";

/**
 * Resolves the official currency for a visitor tier.
 */
export function getCurrencyForTier(tier: VisitorTier): Currency {
  return TIER_CURRENCY[tier];
}

/**
 * Resolves the default suggested visitor tier based on active locale.
 */
export function getSuggestedTierForLocale(locale: "es" | "en"): VisitorTier {
  return locale === "en" ? "foreigner" : "local";
}

/**
 * Formats a numeric price cleanly according to locale and currency.
 */
export function formatMoney(
  amount: number,
  currency: Currency,
  locale: "es" | "en" = "es"
): string {
  const formatted = amount.toLocaleString(locale === "en" ? "en-US" : "es-MX");
  return `$${formatted} ${currency}`;
}

/**
 * Formats a price number without currency suffix (e.g. "$1,500").
 */
export function formatPriceNumber(
  amount: number,
  locale: "es" | "en" = "es"
): string {
  return `$${amount.toLocaleString(locale === "en" ? "en-US" : "es-MX")}`;
}

/**
 * Pure domain calculation engine for packages, visitor tiers, age groups, and transport extras.
 */
export function calculatePackageQuote(
  input: QuoteCalculationInput
): QuoteCalculationResult {
  const {
    tier,
    pricingRule,
    minPeople,
    maxPeople,
    includesTransport = false,
    transportAddon = "none",
    guidedRoute = false,
  } = input;

  const adults = Math.max(0, Math.floor(input.adults));
  const minors = Math.max(0, Math.floor(input.minors));
  const under6 = Math.max(0, Math.floor(input.under6));

  const currency = getCurrencyForTier(tier);
  const payingGuests = adults + minors;
  const totalGuests = payingGuests + under6;

  let unitsCount = 1;
  let adultUnitRate: number | undefined;
  let minorUnitRate: number | undefined;
  let personUnitRate: number | undefined;
  let unitRate: number | undefined;
  let extraMinorsCount = 0;
  let extraMinorUnitRate: number | undefined;
  let adultSubtotal = 0;
  let minorSubtotal = 0;
  let baseSubtotal = 0;
  let freeUnder6Applied = false;

  switch (pricingRule.kind) {
    case "age_split": {
      adultUnitRate = pricingRule.adultRate[tier];
      minorUnitRate = pricingRule.minorRate[tier];
      adultSubtotal = adults * adultUnitRate;
      minorSubtotal = minors * minorUnitRate;
      baseSubtotal = adultSubtotal + minorSubtotal;
      unitsCount = payingGuests;
      freeUnder6Applied = Boolean(pricingRule.freeUnder6 && under6 > 0);
      break;
    }

    case "flat_per_person": {
      personUnitRate = pricingRule.personRate[tier];
      baseSubtotal = payingGuests * personUnitRate;
      adultSubtotal = adults * personUnitRate;
      minorSubtotal = minors * personUnitRate;
      unitsCount = payingGuests;
      freeUnder6Applied = Boolean(pricingRule.freeUnder6 && under6 > 0);
      break;
    }

    case "lodging_room": {
      unitRate = pricingRule.roomRate[tier];
      if (pricingRule.extraMinorRate) {
        const effectiveAdults = Math.max(1, adults);
        unitsCount =
          payingGuests === 0
            ? 0
            : Math.max(1, Math.ceil(effectiveAdults / pricingRule.baseGuests));
        const includedMinors =
          unitsCount * (pricingRule.includedMinorsPerRoom ?? 0);
        extraMinorsCount = Math.max(0, minors - includedMinors);
        extraMinorUnitRate = pricingRule.extraMinorRate[tier];
        adultSubtotal = unitsCount * unitRate;
        minorSubtotal = extraMinorsCount * extraMinorUnitRate;
        baseSubtotal = adultSubtotal + minorSubtotal;
      } else {
        unitsCount =
          payingGuests === 0
            ? 0
            : Math.max(1, Math.ceil(payingGuests / pricingRule.baseGuests));
        baseSubtotal = unitsCount * unitRate;
        adultSubtotal = baseSubtotal;
      }
      break;
    }

    case "camping_tent": {
      unitRate = pricingRule.tentRate[tier];
      unitsCount =
        payingGuests === 0
          ? 0
          : Math.max(1, Math.ceil(payingGuests / pricingRule.tentCapacity));
      baseSubtotal = unitsCount * unitRate;
      adultSubtotal = baseSubtotal;
      break;
    }
  }

  let transportUnitRate = 0;
  let transportSubtotal = 0;

  if (!includesTransport && transportAddon !== "none") {
    const addon = TRANSPORT_ADDONS[transportAddon];
    transportUnitRate = addon.ratePerPerson[tier];
    transportSubtotal = payingGuests * transportUnitRate;
  }

  const validationIssues: ValidationIssue[] = [];

  if (payingGuests < 1) {
    validationIssues.push({
      code: "MIN_ONE_GUEST",
      minRequired: 1,
      currentCount: payingGuests,
    });
  } else {
    if (minPeople !== undefined && payingGuests < minPeople) {
      validationIssues.push({
        code: "MIN_PACKAGE_PEOPLE",
        minRequired: minPeople,
        currentCount: payingGuests,
      });
    }

    if (maxPeople !== undefined && payingGuests > maxPeople) {
      validationIssues.push({
        code: "MAX_PACKAGE_PEOPLE",
        maxAllowed: maxPeople,
        currentCount: payingGuests,
      });
    }

    if (!includesTransport && transportAddon !== "none") {
      const addon = TRANSPORT_ADDONS[transportAddon];
      if (payingGuests < addon.minPeople) {
        validationIssues.push({
          code: "MIN_TRANSPORT_PEOPLE",
          minRequired: addon.minPeople,
          currentCount: payingGuests,
        });
      }
      if (payingGuests > addon.maxPeople) {
        validationIssues.push({
          code: "MAX_TRANSPORT_PEOPLE",
          maxAllowed: addon.maxPeople,
          currentCount: payingGuests,
        });
      }
    }

    if (guidedRoute && payingGuests < GUIDED_ROUTE_MIN_PEOPLE) {
      validationIssues.push({
        code: "MIN_GUIDED_ROUTE",
        minRequired: GUIDED_ROUTE_MIN_PEOPLE,
        currentCount: payingGuests,
      });
    }
  }

  const total = baseSubtotal + transportSubtotal;

  return {
    currency,
    tier,
    adults,
    minors,
    under6,
    payingGuests,
    totalGuests,
    unitsCount,
    adultUnitRate,
    minorUnitRate,
    personUnitRate,
    unitRate,
    extraMinorsCount,
    extraMinorUnitRate,
    adultSubtotal,
    minorSubtotal,
    baseSubtotal,
    transportUnitRate,
    transportSubtotal,
    total,
    freeUnder6Applied,
    isValid: validationIssues.length === 0,
    validationIssues,
  };
}

/**
 * Formats a ValidationIssue using dictionary templates.
 */
export function formatValidationIssue(
  issue: ValidationIssue,
  tCalc: Dictionary["packagesSection"]["calculator"]["validations"]
): string {
  switch (issue.code) {
    case "MIN_ONE_GUEST":
      return tCalc.minOneGuest;
    case "MIN_PACKAGE_PEOPLE":
      return tCalc.minPackagePeopleTemplate
        .replace("{min}", String(issue.minRequired ?? 1))
        .replace("{current}", String(issue.currentCount));
    case "MAX_PACKAGE_PEOPLE":
      return tCalc.maxPackagePeopleTemplate
        .replace("{max}", String(issue.maxAllowed ?? 1))
        .replace("{current}", String(issue.currentCount));
    case "MIN_TRANSPORT_PEOPLE":
      return tCalc.minTransportPeopleTemplate
        .replace("{min}", String(issue.minRequired ?? 1))
        .replace("{current}", String(issue.currentCount));
    case "MAX_TRANSPORT_PEOPLE":
      return tCalc.maxTransportPeopleTemplate
        .replace("{max}", String(issue.maxAllowed ?? 1))
        .replace("{current}", String(issue.currentCount));
    case "MIN_GUIDED_ROUTE":
      return tCalc.minGuidedRouteTemplate
        .replace("{min}", String(issue.minRequired ?? 10))
        .replace("{current}", String(issue.currentCount));
  }
}

/**
 * Builds a concise, localized breakdown string for UI and WhatsApp summaries.
 */
export function formatQuoteBreakdown(
  quote: QuoteCalculationResult,
  pricingRule: PricingRule,
  tCalc: Dictionary["packagesSection"]["calculator"],
  locale: "es" | "en"
): string {
  const parts: string[] = [];

  if (pricingRule.kind === "age_split") {
    if (quote.adults > 0 && quote.adultUnitRate !== undefined) {
      parts.push(
        tCalc.breakdownAdultsTemplate
          .replace("{count}", String(quote.adults))
          .replace(
            "{price}",
            formatMoney(quote.adultUnitRate, quote.currency, locale)
          )
      );
    }
    if (quote.minors > 0 && quote.minorUnitRate !== undefined) {
      parts.push(
        tCalc.breakdownMinorsTemplate
          .replace("{count}", String(quote.minors))
          .replace(
            "{price}",
            formatMoney(quote.minorUnitRate, quote.currency, locale)
          )
      );
    }
  } else if (pricingRule.kind === "flat_per_person") {
    if (quote.payingGuests > 0 && quote.personUnitRate !== undefined) {
      parts.push(
        tCalc.breakdownPersonsTemplate
          .replace("{count}", String(quote.payingGuests))
          .replace(
            "{price}",
            formatMoney(quote.personUnitRate, quote.currency, locale)
          )
      );
    }
  } else if (pricingRule.kind === "lodging_room") {
    if (quote.unitsCount > 0 && quote.unitRate !== undefined) {
      parts.push(
        tCalc.breakdownRoomsTemplate
          .replace("{count}", String(quote.unitsCount))
          .replace(
            "{price}",
            formatMoney(quote.unitRate, quote.currency, locale)
          )
      );
    }
    if (quote.extraMinorsCount > 0 && quote.extraMinorUnitRate !== undefined) {
      parts.push(
        tCalc.breakdownExtraMinorsTemplate
          .replace("{count}", String(quote.extraMinorsCount))
          .replace(
            "{price}",
            formatMoney(quote.extraMinorUnitRate, quote.currency, locale)
          )
      );
    }
  } else if (pricingRule.kind === "camping_tent") {
    if (quote.unitsCount > 0 && quote.unitRate !== undefined) {
      parts.push(
        tCalc.breakdownTentsTemplate
          .replace("{count}", String(quote.unitsCount))
          .replace(
            "{price}",
            formatMoney(quote.unitRate, quote.currency, locale)
          )
      );
    }
  }

  if (quote.under6 > 0) {
    parts.push(
      quote.freeUnder6Applied
        ? tCalc.breakdownUnder6FreeTemplate.replace(
            "{count}",
            String(quote.under6)
          )
        : tCalc.breakdownUnder6CountTemplate.replace(
            "{count}",
            String(quote.under6)
          )
    );
  }

  if (quote.transportSubtotal > 0 && quote.transportUnitRate > 0) {
    parts.push(
      tCalc.breakdownTransportTemplate
        .replace("{count}", String(quote.payingGuests))
        .replace(
          "{price}",
          formatMoney(quote.transportUnitRate, quote.currency, locale)
        )
    );
  }

  return parts.join(" + ");
}

/**
 * Formats guest counts cleanly for WhatsApp messages.
 */
export function formatGuestsSummary(
  adults: number,
  minors: number,
  under6: number,
  freeUnder6: boolean,
  tCalc: Dictionary["packagesSection"]["calculator"]
): string {
  const parts: string[] = [];
  if (adults > 0) {
    parts.push(`${adults} ${tCalc.adultsLabel}`);
  }
  if (minors > 0) {
    parts.push(`${minors} ${tCalc.minorsLabel}`);
  }
  if (under6 > 0) {
    parts.push(
      freeUnder6
        ? tCalc.breakdownUnder6FreeTemplate.replace("{count}", String(under6))
        : `${under6} ${tCalc.under6Label}`
    );
  }
  return parts.join(", ");
}

/**
 * Formats a select `<option>` label for a package in the active tier & currency.
 */
export function formatPackageOptionLabel(
  name: string,
  pricingRule: PricingRule,
  tier: VisitorTier,
  tCalc: Dictionary["packagesSection"]["calculator"],
  locale: "es" | "en"
): string {
  const currency = getCurrencyForTier(tier);
  if (pricingRule.kind === "age_split") {
    return tCalc.optionAgeSplitTemplate
      .replace("{name}", name)
      .replace(
        "{adultPrice}",
        formatMoney(pricingRule.adultRate[tier], currency, locale)
      )
      .replace(
        "{minorPrice}",
        formatMoney(pricingRule.minorRate[tier], currency, locale)
      );
  }

  const singleAmount =
    pricingRule.kind === "flat_per_person"
      ? pricingRule.personRate[tier]
      : pricingRule.kind === "lodging_room"
        ? pricingRule.roomRate[tier]
        : pricingRule.tentRate[tier];

  return tCalc.optionFlatPriceTemplate
    .replace("{name}", name)
    .replace("{price}", formatMoney(singleAmount, currency, locale));
}
