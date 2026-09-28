"use client";

import React, { useState } from "react";
import { X, MessageCircle, Calendar, Users, Ticket, User } from "lucide-react";
import { PACKAGES } from "@/data/parkData";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface QuickReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickReservationModal({ isOpen, onClose }: QuickReservationModalProps) {
  const [name, setName] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[3].name);
  const [peopleCount, setPeopleCount] = useState("2");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `🌿 *Solicitud de Reserva - El Gran T´Zunun* 🌿\n\n`;
    if (name) text += `👤 *Nombre:* ${name}\n`;
    text += `🎟️ *Paquete:* ${selectedPackage}\n`;
    text += `👥 *Personas:* ${peopleCount}\n`;
    if (date) text += `📅 *Fecha tentativa:* ${date}\n`;
    if (notes) text += `📝 *Comentarios:* ${notes}\n`;
    text += `\n¿Me confirman disponibilidad por favor?`;

    const url = getWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-neutral-200 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#006948] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-display">Planear mi Visita</h3>
            <p className="text-xs text-emerald-100">
              Reserva o cotiza con respuesta inmediata por WhatsApp
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#006948]" />
              Tu Nombre
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Carlos Mendoza"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                <Ticket className="w-3.5 h-3.5 text-[#006948]" />
                Experiencia / Paquete
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              >
                {PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.name}>
                    {pkg.name} (${pkg.price} MXN)
                  </option>
                ))}
                <option value="Habitación Confort Selva">Habitación Confort Selva</option>
                <option value="Suite Glamping & Jacuzzi">Suite Glamping & Jacuzzi</option>
                <option value="Zona de Camping">Zona de Camping</option>
                <option value="Visita Escolar o Grupo Grande">Visita Escolar o Grupo Grande</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#006948]" />
                Personas
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
                className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#006948]" />
              Fecha Tentativa
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Preguntas o requerimientos adicionales (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="¿Tienen comida vegetariana? ¿Requieren anticipo?..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Continuar en WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-neutral-500 mt-2">
              Se abrirá un chat directo con nuestro equipo de atención en Yucatán.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
