/**
 * WhatsApp Link Generator & Messaging Helpers
 * Configured for El Gran T'Zunun Nature & Adventure Park
 */

export const WHATSAPP_PHONE = "529990000000"; // Phone format without +, spaces or hyphens

/**
 * Builds a direct WhatsApp web/app link with encoded text message
 */
export function getWhatsAppUrl(message: string, phone: string = WHATSAPP_PHONE): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Generates an inquiry message for a specific package
 */
export function createPackageWhatsAppMessage(packageName: string, price: number, unit: string): string {
  return `¡Hola! Me interesa reservar el paquete *${packageName}* ($${price} MXN / ${unit}) en El Gran T´Zunun. ¿Tienen disponibilidad y cómo puedo asegurar mis lugares?`;
}

/**
 * Generates an inquiry message for lodging
 */
export function createLodgingWhatsAppMessage(lodgingTitle: string): string {
  return `¡Hola! Quisiera consultar disponibilidad y tarifas para hospedarme en *${lodgingTitle}* en El Gran T´Zunun. ¿Qué fechas tienen disponibles?`;
}

/**
 * Generates an inquiry message for activities
 */
export function createActivityWhatsAppMessage(activityTitle: string): string {
  return `¡Hola! Quisiera más información sobre la actividad de *${activityTitle}* en El Gran T´Zunun (horarios, requisitos y recomendaciones).`;
}

/**
 * Generates a detailed custom quote message for WhatsApp
 */
export function createCustomQuoteWhatsAppMessage(options: {
  packageName?: string;
  adults: number;
  children: number;
  date?: string;
  transport?: boolean;
  name?: string;
  totalEstimated?: number;
}): string {
  let msg = `🌿 *Cotización de Visita - El Gran T´Zunun* 🌿\n\n`;
  if (options.name) {
    msg += `👤 *Nombre:* ${options.name}\n`;
  }
  if (options.packageName) {
    msg += `🎟️ *Paquete preferido:* ${options.packageName}\n`;
  }
  msg += `👥 *Visitantes:* ${options.adults} Adulto(s) ${options.children > 0 ? `y ${options.children} Menor(es)` : ""}\n`;
  if (options.date) {
    msg += `📅 *Fecha tentativa:* ${options.date}\n`;
  }
  if (options.transport) {
    msg += `🚐 *Transporte:* Sí, requiero transporte redondo\n`;
  }
  if (options.totalEstimated && options.totalEstimated > 0) {
    msg += `💵 *Total estimado:* $${options.totalEstimated.toLocaleString("es-MX")} MXN\n`;
  }
  msg += `\n¿Me podrían confirmar disponibilidad y el proceso de pago/reserva? ¡Muchas gracias!`;
  return msg;
}
