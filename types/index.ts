export type VisitorTier = "local" | "national" | "foreigner";

export type PackageCategory = "daypass" | "extreme" | "lodging" | "camping";

export type LodgingSubcategory = "standard" | "suite";

export type Currency = "MXN" | "USD";

export type TransportAddonId = "none" | "roundtrip-small" | "bus-large";

export type TierPriceMap = Record<VisitorTier, number>;

export type PackageUnitKey = "minor" | "adult" | "person" | "room" | "tent";

export type PackageId =
  // Daypass
  | "daypass-minors"
  | "daypass-adults"
  | "daypass-lunch-minors"
  | "daypass-lunch-adults"
  | "daypass-lunch-transport"
  // Extreme Activities & Transport
  | "extreme-adventure"
  | "extreme-cacao"
  | "extreme-transport-daypass"
  | "transport-roundtrip-small"
  | "transport-bus-large"
  // Lodging - Standard
  | "lodging-std-breakfast-2"
  | "lodging-std-allinc-1"
  | "lodging-std-allinc-2"
  | "lodging-std-adventure-2"
  // Lodging - Suite
  | "lodging-suite-breakfast"
  | "lodging-suite-allinc"
  | "lodging-suite-adventure"
  // Camping
  | "camping-basic"
  | "camping-pool"
  | "camping-tent-2"
  | "camping-tent-3"
  | "camping-tent-5"
  | "camping-groups";

export type CalculatorPackageId =
  | "calc-daypass-general"
  | "calc-daypass-lunch"
  | Exclude<
      PackageId,
      | "daypass-minors"
      | "daypass-adults"
      | "daypass-lunch-minors"
      | "daypass-lunch-adults"
    >;

export type PricingRule =
  | {
      kind: "age_split";
      adultRate: TierPriceMap;
      minorRate: TierPriceMap;
      freeUnder6?: boolean;
    }
  | {
      kind: "flat_per_person";
      personRate: TierPriceMap;
      freeUnder6?: boolean;
    }
  | {
      kind: "lodging_room";
      roomRate: TierPriceMap;
      baseGuests: number;
      includedMinorsPerRoom?: number;
      extraMinorRate?: TierPriceMap;
      extraMinorIncludesBreakfast?: boolean;
    }
  | {
      kind: "camping_tent";
      tentRate: TierPriceMap;
      tentCapacity: number;
    };

export interface TransportAddonConfig {
  id: Exclude<TransportAddonId, "none">;
  ratePerPerson: TierPriceMap;
  minPeople: number;
  maxPeople: number;
}

export interface PackageCatalogItem {
  id: PackageId;
  calculatorId: CalculatorPackageId;
  category: PackageCategory;
  subcategory?: LodgingSubcategory;
  isTransportCard?: boolean;
  isPopular?: boolean;
  cardPrice: TierPriceMap;
  minorCardPrice?: TierPriceMap;
  extraMinorCardPrice?: TierPriceMap;
  extraMinorIncludesBreakfast?: boolean;
  unitKey: PackageUnitKey;
  minPeople?: number;
  maxPeople?: number;
  includesTransport?: boolean;
  allowsTransportAddon?: boolean;
  allowsGuidedRouteAddon?: boolean;
  defaultGuests: {
    adults: number;
    minors: number;
    under6: number;
  };
  pricingRule: PricingRule;
}

export interface CalculatorPackageItem {
  id: CalculatorPackageId;
  category: PackageCategory;
  subcategory?: LodgingSubcategory;
  unitKey: PackageUnitKey;
  minPeople?: number;
  maxPeople?: number;
  includesTransport?: boolean;
  allowsTransportAddon?: boolean;
  allowsGuidedRouteAddon?: boolean;
  pricingRule: PricingRule;
}

export type ValidationIssueCode =
  | "MIN_ONE_GUEST"
  | "MIN_PACKAGE_PEOPLE"
  | "MAX_PACKAGE_PEOPLE"
  | "MIN_TRANSPORT_PEOPLE"
  | "MAX_TRANSPORT_PEOPLE"
  | "MIN_GUIDED_ROUTE";

export interface ValidationIssue {
  code: ValidationIssueCode;
  minRequired?: number;
  maxAllowed?: number;
  currentCount: number;
}

export interface QuoteCalculationInput {
  tier: VisitorTier;
  adults: number;
  minors: number;
  under6: number;
  pricingRule: PricingRule;
  minPeople?: number;
  maxPeople?: number;
  includesTransport?: boolean;
  transportAddon?: TransportAddonId;
  guidedRoute?: boolean;
}

export interface QuoteCalculationResult {
  currency: Currency;
  tier: VisitorTier;
  adults: number;
  minors: number;
  under6: number;
  payingGuests: number;
  totalGuests: number;
  unitsCount: number;
  adultUnitRate?: number;
  minorUnitRate?: number;
  personUnitRate?: number;
  unitRate?: number;
  extraMinorsCount: number;
  extraMinorUnitRate?: number;
  adultSubtotal: number;
  minorSubtotal: number;
  baseSubtotal: number;
  transportUnitRate: number;
  transportSubtotal: number;
  total: number;
  freeUnder6Applied: boolean;
  isValid: boolean;
  validationIssues: ValidationIssue[];
}

export interface ReservationPreset {
  tier?: VisitorTier;
  category?: PackageCategory;
  packageId?: PackageId;
}

export interface PackageTranslationItem {
  name: string;
  audience: string;
  subtitle: string;
  features: string[];
  highlightBadge?: string;
}

export interface ParkActivity {
  id: string;
  title: string;
  category: string;
  categoryColor?: "primary" | "secondary" | "tertiary" | "emerald";
  description: string;
  image?: string;
  iconName?: string;
  colSpan: "full" | "two-thirds" | "half" | "one-third";
  ctaText: string;
  whatsappMessage: string;
}

export interface LodgingOption {
  id: string;
  title: string;
  badge: string;
  badgeType: "rustic" | "romantic" | "eco";
  description: string;
  image: string;
  amenities: string[];
  whatsappMessage: string;
}

export interface GastronomyPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  tag: string;
  iconName: string;
  whatsappMessage: string;
}
