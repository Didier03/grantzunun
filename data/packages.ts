import {
  CalculatorPackageId,
  CalculatorPackageItem,
  Currency,
  PackageCatalogItem,
  PackageCategory,
  PackageId,
  TierPriceMap,
  TransportAddonConfig,
  TransportAddonId,
  VisitorTier,
} from "@/types";

export const VISITOR_TIERS: readonly VisitorTier[] = [
  "local",
  "national",
  "foreigner",
] as const;

export const PACKAGE_CATEGORIES: readonly PackageCategory[] = [
  "daypass",
  "extreme",
  "lodging",
  "camping",
] as const;

export const TIER_CURRENCY: Record<VisitorTier, Currency> = {
  local: "MXN",
  national: "MXN",
  foreigner: "USD",
};

export const GUIDED_ROUTE_MIN_PEOPLE = 10;

// ============================================================================
// ATOMIC RATE CONSTANTS (SINGLE SOURCE OF TRUTH)
// ============================================================================

export const DAYPASS_RATES = {
  minorAccess: { local: 80, national: 80, foreigner: 5 } satisfies TierPriceMap,
  adultAccess: { local: 100, national: 100, foreigner: 6 } satisfies TierPriceMap,
  minorLunch: { local: 266, national: 299, foreigner: 15 } satisfies TierPriceMap,
  adultLunch: { local: 366, national: 366, foreigner: 20 } satisfies TierPriceMap,
  lunchWithTransport: { local: 482, national: 599, foreigner: 30 } satisfies TierPriceMap,
} as const;

export const EXTREME_RATES = {
  adventureMinor: { local: 599, national: 699, foreigner: 35 } satisfies TierPriceMap,
  adventureAdult: { local: 699, national: 899, foreigner: 45 } satisfies TierPriceMap,
  cacaoMinor: { local: 999, national: 1191, foreigner: 60 } satisfies TierPriceMap,
  cacaoAdult: { local: 1111, national: 1291, foreigner: 65 } satisfies TierPriceMap,
  transportDaypassLunch: { local: 482, national: 599, foreigner: 30 } satisfies TierPriceMap,
} as const;

export const TRANSPORT_RATES = {
  roundtripSmall: { local: 375, national: 375, foreigner: 19 } satisfies TierPriceMap,
  busLarge: { local: 100, national: 100, foreigner: 5 } satisfies TierPriceMap,
} as const;

export const LODGING_RATES = {
  stdBreakfast2: { local: 1500, national: 1500, foreigner: 75 } satisfies TierPriceMap,
  stdAllInc1: { local: 1900, national: 1900, foreigner: 95 } satisfies TierPriceMap,
  stdAllInc2: { local: 2300, national: 2300, foreigner: 115 } satisfies TierPriceMap,
  stdAdventure2: { local: 2900, national: 2900, foreigner: 145 } satisfies TierPriceMap,
  suiteBreakfast: { local: 2300, national: 2300, foreigner: 115 } satisfies TierPriceMap,
  suiteAllInc: { local: 3100, national: 3100, foreigner: 155 } satisfies TierPriceMap,
  suiteAdventure: { local: 3700, national: 3700, foreigner: 185 } satisfies TierPriceMap,
  suiteExtraMinorBasic: { local: 300, national: 300, foreigner: 15 } satisfies TierPriceMap,
  suiteExtraMinorAdventure: { local: 1000, national: 1000, foreigner: 50 } satisfies TierPriceMap,
} as const;

export const CAMPING_RATES = {
  basicOwnTent: { local: 145, national: 145, foreigner: 3 } satisfies TierPriceMap,
  poolOwnTent: { local: 250, national: 250, foreigner: 13 } satisfies TierPriceMap,
  tentRental2: { local: 400, national: 400, foreigner: 20 } satisfies TierPriceMap,
  tentRental3: { local: 600, national: 600, foreigner: 30 } satisfies TierPriceMap,
  tentRental5: { local: 1000, national: 1000, foreigner: 50 } satisfies TierPriceMap,
  groupsOwnTent: { local: 100, national: 100, foreigner: 5 } satisfies TierPriceMap,
} as const;

export const TRANSPORT_ADDONS: Record<
  Exclude<TransportAddonId, "none">,
  TransportAddonConfig
> = {
  "roundtrip-small": {
    id: "roundtrip-small",
    ratePerPerson: TRANSPORT_RATES.roundtripSmall,
    minPeople: 1,
    maxPeople: 4,
  },
  "bus-large": {
    id: "bus-large",
    ratePerPerson: TRANSPORT_RATES.busLarge,
    minPeople: 20,
    maxPeople: 50,
  },
};

// ============================================================================
// DISPLAY CATALOG ITEMS (CARDS & MODAL)
// ============================================================================

export const PACKAGES_CATALOG: readonly PackageCatalogItem[] = [
  // 1. PASADÍA / DAYPASS
  {
    id: "daypass-minors",
    calculatorId: "calc-daypass-general",
    category: "daypass",
    cardPrice: DAYPASS_RATES.minorAccess,
    unitKey: "minor",
    allowsTransportAddon: true,
    defaultGuests: { adults: 0, minors: 1, under6: 0 },
    pricingRule: {
      kind: "age_split",
      adultRate: DAYPASS_RATES.adultAccess,
      minorRate: DAYPASS_RATES.minorAccess,
      freeUnder6: true,
    },
  },
  {
    id: "daypass-adults",
    calculatorId: "calc-daypass-general",
    category: "daypass",
    cardPrice: DAYPASS_RATES.adultAccess,
    unitKey: "adult",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "age_split",
      adultRate: DAYPASS_RATES.adultAccess,
      minorRate: DAYPASS_RATES.minorAccess,
      freeUnder6: true,
    },
  },
  {
    id: "daypass-lunch-minors",
    calculatorId: "calc-daypass-lunch",
    category: "daypass",
    cardPrice: DAYPASS_RATES.minorLunch,
    unitKey: "minor",
    allowsTransportAddon: true,
    defaultGuests: { adults: 0, minors: 1, under6: 0 },
    pricingRule: {
      kind: "age_split",
      adultRate: DAYPASS_RATES.adultLunch,
      minorRate: DAYPASS_RATES.minorLunch,
      freeUnder6: true,
    },
  },
  {
    id: "daypass-lunch-adults",
    calculatorId: "calc-daypass-lunch",
    category: "daypass",
    isPopular: true,
    cardPrice: DAYPASS_RATES.adultLunch,
    unitKey: "adult",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "age_split",
      adultRate: DAYPASS_RATES.adultLunch,
      minorRate: DAYPASS_RATES.minorLunch,
      freeUnder6: true,
    },
  },
  {
    id: "daypass-lunch-transport",
    calculatorId: "daypass-lunch-transport",
    category: "daypass",
    cardPrice: DAYPASS_RATES.lunchWithTransport,
    unitKey: "person",
    minPeople: 4,
    includesTransport: true,
    allowsTransportAddon: false,
    defaultGuests: { adults: 4, minors: 0, under6: 0 },
    pricingRule: {
      kind: "flat_per_person",
      personRate: DAYPASS_RATES.lunchWithTransport,
      freeUnder6: true,
    },
  },

  // 2. ACTIVIDADES EXTREMAS / EXTREME ACTIVITIES
  {
    id: "extreme-adventure",
    calculatorId: "extreme-adventure",
    category: "extreme",
    isPopular: true,
    cardPrice: EXTREME_RATES.adventureAdult,
    minorCardPrice: EXTREME_RATES.adventureMinor,
    unitKey: "adult",
    allowsTransportAddon: true,
    allowsGuidedRouteAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "age_split",
      adultRate: EXTREME_RATES.adventureAdult,
      minorRate: EXTREME_RATES.adventureMinor,
      freeUnder6: false,
    },
  },
  {
    id: "extreme-cacao",
    calculatorId: "extreme-cacao",
    category: "extreme",
    cardPrice: EXTREME_RATES.cacaoAdult,
    minorCardPrice: EXTREME_RATES.cacaoMinor,
    unitKey: "adult",
    allowsTransportAddon: true,
    allowsGuidedRouteAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "age_split",
      adultRate: EXTREME_RATES.cacaoAdult,
      minorRate: EXTREME_RATES.cacaoMinor,
      freeUnder6: false,
    },
  },
  {
    id: "extreme-transport-daypass",
    calculatorId: "extreme-transport-daypass",
    category: "extreme",
    cardPrice: EXTREME_RATES.transportDaypassLunch,
    unitKey: "person",
    minPeople: 4,
    includesTransport: true,
    allowsTransportAddon: false,
    allowsGuidedRouteAddon: true,
    defaultGuests: { adults: 4, minors: 0, under6: 0 },
    pricingRule: {
      kind: "flat_per_person",
      personRate: EXTREME_RATES.transportDaypassLunch,
      freeUnder6: true,
    },
  },
  {
    id: "transport-roundtrip-small",
    calculatorId: "transport-roundtrip-small",
    category: "extreme",
    isTransportCard: true,
    cardPrice: TRANSPORT_RATES.roundtripSmall,
    unitKey: "person",
    minPeople: 1,
    maxPeople: 4,
    includesTransport: true,
    allowsTransportAddon: false,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "flat_per_person",
      personRate: TRANSPORT_RATES.roundtripSmall,
    },
  },
  {
    id: "transport-bus-large",
    calculatorId: "transport-bus-large",
    category: "extreme",
    isTransportCard: true,
    cardPrice: TRANSPORT_RATES.busLarge,
    unitKey: "person",
    minPeople: 20,
    maxPeople: 50,
    includesTransport: true,
    allowsTransportAddon: false,
    defaultGuests: { adults: 20, minors: 0, under6: 0 },
    pricingRule: {
      kind: "flat_per_person",
      personRate: TRANSPORT_RATES.busLarge,
    },
  },

  // 3. HOSPEDAJE / LODGING — SUBCATEGORÍA A: ESTÁNDAR
  {
    id: "lodging-std-breakfast-2",
    calculatorId: "lodging-std-breakfast-2",
    category: "lodging",
    subcategory: "standard",
    cardPrice: LODGING_RATES.stdBreakfast2,
    unitKey: "room",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "lodging_room",
      roomRate: LODGING_RATES.stdBreakfast2,
      baseGuests: 2,
    },
  },
  {
    id: "lodging-std-allinc-1",
    calculatorId: "lodging-std-allinc-1",
    category: "lodging",
    subcategory: "standard",
    cardPrice: LODGING_RATES.stdAllInc1,
    unitKey: "room",
    allowsTransportAddon: true,
    defaultGuests: { adults: 1, minors: 0, under6: 0 },
    pricingRule: {
      kind: "lodging_room",
      roomRate: LODGING_RATES.stdAllInc1,
      baseGuests: 1,
    },
  },
  {
    id: "lodging-std-allinc-2",
    calculatorId: "lodging-std-allinc-2",
    category: "lodging",
    subcategory: "standard",
    cardPrice: LODGING_RATES.stdAllInc2,
    unitKey: "room",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "lodging_room",
      roomRate: LODGING_RATES.stdAllInc2,
      baseGuests: 2,
    },
  },
  {
    id: "lodging-std-adventure-2",
    calculatorId: "lodging-std-adventure-2",
    category: "lodging",
    subcategory: "standard",
    isPopular: true,
    cardPrice: LODGING_RATES.stdAdventure2,
    unitKey: "room",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "lodging_room",
      roomRate: LODGING_RATES.stdAdventure2,
      baseGuests: 2,
    },
  },

  // 3. HOSPEDAJE / LODGING — SUBCATEGORÍA B: SUITE
  {
    id: "lodging-suite-breakfast",
    calculatorId: "lodging-suite-breakfast",
    category: "lodging",
    subcategory: "suite",
    cardPrice: LODGING_RATES.suiteBreakfast,
    extraMinorCardPrice: LODGING_RATES.suiteExtraMinorBasic,
    extraMinorIncludesBreakfast: false,
    unitKey: "room",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 1, under6: 0 },
    pricingRule: {
      kind: "lodging_room",
      roomRate: LODGING_RATES.suiteBreakfast,
      baseGuests: 2,
      includedMinorsPerRoom: 1,
      extraMinorRate: LODGING_RATES.suiteExtraMinorBasic,
      extraMinorIncludesBreakfast: false,
    },
  },
  {
    id: "lodging-suite-allinc",
    calculatorId: "lodging-suite-allinc",
    category: "lodging",
    subcategory: "suite",
    isPopular: true,
    cardPrice: LODGING_RATES.suiteAllInc,
    extraMinorCardPrice: LODGING_RATES.suiteExtraMinorBasic,
    extraMinorIncludesBreakfast: false,
    unitKey: "room",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "lodging_room",
      roomRate: LODGING_RATES.suiteAllInc,
      baseGuests: 2,
      includedMinorsPerRoom: 0,
      extraMinorRate: LODGING_RATES.suiteExtraMinorBasic,
      extraMinorIncludesBreakfast: false,
    },
  },
  {
    id: "lodging-suite-adventure",
    calculatorId: "lodging-suite-adventure",
    category: "lodging",
    subcategory: "suite",
    cardPrice: LODGING_RATES.suiteAdventure,
    extraMinorCardPrice: LODGING_RATES.suiteExtraMinorAdventure,
    extraMinorIncludesBreakfast: true,
    unitKey: "room",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "lodging_room",
      roomRate: LODGING_RATES.suiteAdventure,
      baseGuests: 2,
      includedMinorsPerRoom: 0,
      extraMinorRate: LODGING_RATES.suiteExtraMinorAdventure,
      extraMinorIncludesBreakfast: true,
    },
  },

  // 4. CAMPISMO / CAMPING
  {
    id: "camping-basic",
    calculatorId: "camping-basic",
    category: "camping",
    cardPrice: CAMPING_RATES.basicOwnTent,
    unitKey: "person",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "flat_per_person",
      personRate: CAMPING_RATES.basicOwnTent,
    },
  },
  {
    id: "camping-pool",
    calculatorId: "camping-pool",
    category: "camping",
    cardPrice: CAMPING_RATES.poolOwnTent,
    unitKey: "person",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "flat_per_person",
      personRate: CAMPING_RATES.poolOwnTent,
    },
  },
  {
    id: "camping-tent-2",
    calculatorId: "camping-tent-2",
    category: "camping",
    isPopular: true,
    cardPrice: CAMPING_RATES.tentRental2,
    unitKey: "tent",
    allowsTransportAddon: true,
    defaultGuests: { adults: 2, minors: 0, under6: 0 },
    pricingRule: {
      kind: "camping_tent",
      tentRate: CAMPING_RATES.tentRental2,
      tentCapacity: 2,
    },
  },
  {
    id: "camping-tent-3",
    calculatorId: "camping-tent-3",
    category: "camping",
    cardPrice: CAMPING_RATES.tentRental3,
    unitKey: "tent",
    allowsTransportAddon: true,
    defaultGuests: { adults: 3, minors: 0, under6: 0 },
    pricingRule: {
      kind: "camping_tent",
      tentRate: CAMPING_RATES.tentRental3,
      tentCapacity: 3,
    },
  },
  {
    id: "camping-tent-5",
    calculatorId: "camping-tent-5",
    category: "camping",
    cardPrice: CAMPING_RATES.tentRental5,
    unitKey: "tent",
    allowsTransportAddon: true,
    defaultGuests: { adults: 5, minors: 0, under6: 0 },
    pricingRule: {
      kind: "camping_tent",
      tentRate: CAMPING_RATES.tentRental5,
      tentCapacity: 5,
    },
  },
  {
    id: "camping-groups",
    calculatorId: "camping-groups",
    category: "camping",
    cardPrice: CAMPING_RATES.groupsOwnTent,
    unitKey: "person",
    minPeople: 10,
    allowsTransportAddon: true,
    defaultGuests: { adults: 10, minors: 0, under6: 0 },
    pricingRule: {
      kind: "flat_per_person",
      personRate: CAMPING_RATES.groupsOwnTent,
    },
  },
] as const;

// ============================================================================
// CALCULATOR ITEMS (DEDUPLICATED FAMILY/GROUP OPTIONS)
// ============================================================================

export const CALCULATOR_PACKAGES: readonly CalculatorPackageItem[] = [
  {
    id: "calc-daypass-general",
    category: "daypass",
    unitKey: "person",
    allowsTransportAddon: true,
    pricingRule: {
      kind: "age_split",
      adultRate: DAYPASS_RATES.adultAccess,
      minorRate: DAYPASS_RATES.minorAccess,
      freeUnder6: true,
    },
  },
  {
    id: "calc-daypass-lunch",
    category: "daypass",
    unitKey: "person",
    allowsTransportAddon: true,
    pricingRule: {
      kind: "age_split",
      adultRate: DAYPASS_RATES.adultLunch,
      minorRate: DAYPASS_RATES.minorLunch,
      freeUnder6: true,
    },
  },
  ...PACKAGES_CATALOG.filter(
    (
      item
    ): item is PackageCatalogItem & {
      id: Exclude<
        PackageId,
        | "daypass-minors"
        | "daypass-adults"
        | "daypass-lunch-minors"
        | "daypass-lunch-adults"
      >;
    } =>
      item.id !== "daypass-minors" &&
      item.id !== "daypass-adults" &&
      item.id !== "daypass-lunch-minors" &&
      item.id !== "daypass-lunch-adults"
  ).map(
    (item): CalculatorPackageItem => ({
      id: item.id,
      category: item.category,
      subcategory: item.subcategory,
      unitKey: item.unitKey,
      minPeople: item.minPeople,
      maxPeople: item.maxPeople,
      includesTransport: item.includesTransport,
      allowsTransportAddon: item.allowsTransportAddon,
      allowsGuidedRouteAddon: item.allowsGuidedRouteAddon,
      pricingRule: item.pricingRule,
    })
  ),
];

export function getPackagesByCategory(category: PackageCategory): PackageCatalogItem[] {
  return PACKAGES_CATALOG.filter((item) => item.category === category);
}

export function getPackageById(id: PackageId): PackageCatalogItem | undefined {
  return PACKAGES_CATALOG.find((item) => item.id === id);
}

export function getCalculatorPackagesByCategory(
  category: PackageCategory
): CalculatorPackageItem[] {
  return CALCULATOR_PACKAGES.filter((item) => item.category === category);
}

export function getCalculatorPackageById(
  id: CalculatorPackageId
): CalculatorPackageItem | undefined {
  return CALCULATOR_PACKAGES.find((item) => item.id === id);
}
