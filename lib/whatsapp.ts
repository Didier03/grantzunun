import { Currency } from "@/types";
import { formatMoney } from "@/lib/pricing";

/**
 * WhatsApp Link Generator & Generic Messaging Helpers
 * Configured for El Gran T'Zunun Nature & Adventure Park
 */

export const WHATSAPP_PHONE = "529811380060"; // Phone format without +, spaces or hyphens

/**
 * Builds a direct WhatsApp web/app link with URI-encoded text message
 */
export function getWhatsAppUrl(
  message: string,
  phone: string = WHATSAPP_PHONE
): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

export interface ReservationWhatsAppLabels {
  header: string;
  nameLabel: string;
  visitorTierLabel: string;
  categoryLabel: string;
  packageLabel: string;
  guestsLabel: string;
  dateLabel: string;
  transportLabel: string;
  guidedRouteLabel: string;
  estimatedTotalLabel: string;
  notesLabel: string;
  footer: string;
}

export interface ReservationWhatsAppPayload {
  labels: ReservationWhatsAppLabels;
  clientName?: string;
  visitorTierText: string;
  categoryText: string;
  packageName: string;
  guestsSummary: string;
  date?: string;
  transportText?: string;
  guidedRouteText?: string;
  totalEstimated: number;
  currency: Currency;
  locale: "es" | "en";
  notes?: string;
}

/**
 * Builds a structured, generic reservation/quote WhatsApp message (Open/Closed Principle).
 * All copy/labels are injected from the active i18n dictionary.
 */
export function buildReservationWhatsAppMessage(
  payload: ReservationWhatsAppPayload
): string {
  const {
    labels,
    clientName,
    visitorTierText,
    categoryText,
    packageName,
    guestsSummary,
    date,
    transportText,
    guidedRouteText,
    totalEstimated,
    currency,
    locale,
    notes,
  } = payload;

  const lines: string[] = [labels.header, ""];

  if (clientName && clientName.trim()) {
    lines.push(`${labels.nameLabel} ${clientName.trim()}`);
  }

  lines.push(`${labels.visitorTierLabel} ${visitorTierText}`);
  lines.push(`${labels.categoryLabel} ${categoryText}`);
  lines.push(`${labels.packageLabel} ${packageName}`);
  lines.push(`${labels.guestsLabel} ${guestsSummary}`);

  if (date && date.trim()) {
    lines.push(`${labels.dateLabel} ${date.trim()}`);
  }

  if (transportText && transportText.trim()) {
    lines.push(`${labels.transportLabel} ${transportText.trim()}`);
  }

  if (guidedRouteText && guidedRouteText.trim()) {
    lines.push(`${labels.guidedRouteLabel} ${guidedRouteText.trim()}`);
  }

  if (totalEstimated > 0) {
    lines.push(
      `${labels.estimatedTotalLabel} ${formatMoney(
        totalEstimated,
        currency,
        locale
      )}`
    );
  }

  if (notes && notes.trim()) {
    lines.push(`${labels.notesLabel} ${notes.trim()}`);
  }

  lines.push("", labels.footer);

  return lines.join("\n");
}
