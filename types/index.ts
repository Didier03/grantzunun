export interface ParkActivity {
  id: string;
  title: string;
  category: string;
  categoryColor?: "primary" | "secondary" | "tertiary" | "emerald";
  description: string;
  image?: string;
  iconName?: string;
  colSpan: "full" | "two-thirds" | "one-third";
  ctaText: string;
  whatsappMessage: string;
}

export interface DayPassPackage {
  id: string;
  name: string;
  audience: string;
  subtitle: string;
  price: number;
  currency: string;
  unit: string;
  features: string[];
  isPopular?: boolean;
  highlightBadge?: string;
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

export interface QuoteReservationParams {
  packageId?: string;
  adultsCount: number;
  childrenCount: number;
  selectedDate?: string;
  includeTransport: boolean;
  clientName?: string;
  comments?: string;
}
