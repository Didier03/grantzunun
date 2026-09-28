"use client";

import React, { useState } from "react";
import { Calculator, Bus, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { PACKAGES } from "@/data/parkData";
import { DayPassPackage } from "@/types";
import { createCustomQuoteWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";

interface ExpressCalculatorProps {
  initialPackage?: DayPassPackage;
}

export function ExpressCalculator({ initialPackage }: ExpressCalculatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState(
    initialPackage?.id || "adultos-almuerzo"
  );
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [includeTransport, setIncludeTransport] = useState(false);
  const [name, setName] = useState("");

  const currentPkg = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[3];

  // Pricing calculations
  const adultPrice = currentPkg.price;
  // If children package exists or proportional:
  const childPrice = currentPkg.id.includes("almuerzo") ? 449 : 299;
  const transportCostPerPerson = 200;

  const totalPeople = adults + children;
  const rawSubtotal =
    adults * adultPrice +
    children * childPrice +
    (includeTransport ? totalPeople * transportCostPerPerson : 0);

  // Group discount for >= 10 people (10%)
  const hasGroupDiscount = totalPeople >= 10;
  const discountAmount = hasGroupDiscount ? Math.round(rawSubtotal * 0.1) : 0;
  const finalTotal = rawSubtotal - discountAmount;

  const handleSendToWhatsApp = () => {
    const message = createCustomQuoteWhatsAppMessage({
      packageName: currentPkg.name,
      adults,
      children,
      date: selectedDate || undefined,
      transport: includeTransport,
      name: name || undefined,
      totalEstimated: finalTotal,
    });
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-12 bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-neutral-50 hover:bg-neutral-100/80 transition-colors flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#006948]/10 text-[#006948]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#006948] block">
              Herramienta Rápida
            </span>
            <h4 className="text-base font-bold text-neutral-900 font-display">
              Cotizador Express para Familias y Grupos
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
          <span>{isOpen ? "Ocultar calculadora" : "Calcular mi total y enviar a WhatsApp"}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Accordion Body */}
      {isOpen && (
        <div className="p-6 md:p-8 space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Package selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Paquete Base
              </label>
              <select
                value={selectedPackageId}
                onChange={(e) => setSelectedPackageId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
              >
                {PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} (${pkg.price} MXN)
                  </option>
                ))}
              </select>
              <p className="text-xs text-neutral-500 mt-1">{currentPkg.subtitle}</p>
            </div>

            {/* Visitors Counters */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Número de Visitantes
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                  <div className="text-[11px] text-neutral-500 font-medium">Adultos (+12)</div>
                  <div className="flex items-center justify-between mt-1">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="font-bold text-neutral-900 tabular-nums">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                  <div className="text-[11px] text-neutral-500 font-medium">Niños (4-11)</div>
                  <div className="flex items-center justify-between mt-1">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="font-bold text-neutral-900 tabular-nums">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-7 h-7 rounded bg-white border border-neutral-300 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Fecha Tentativa y Nombre
              </label>
              <div className="space-y-2">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#006948]"
                />
                <input
                  type="text"
                  placeholder="Tu nombre (opcional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#006948]"
                />
              </div>
            </div>
          </div>

          {/* Add-ons & Transport */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-100">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeTransport}
                onChange={(e) => setIncludeTransport(e.target.checked)}
                className="w-4 h-4 rounded text-[#006948] focus:ring-[#006948] border-neutral-300"
              />
              <span className="text-xs font-medium text-neutral-700 flex items-center gap-1.5">
                <Bus className="w-3.5 h-3.5 text-[#006948]" />
                Agregar transporte redondo (+$200 MXN / persona)
              </span>
            </label>

            {hasGroupDiscount && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                🎉 Descuento grupal de 10% aplicado (+10 personas)
              </span>
            )}
          </div>

          {/* Calculation summary & WhatsApp Action */}
          <div className="bg-neutral-900 text-white rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block">Total Estimado de tu visita:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#85f8c4] tabular-nums font-display">
                  ${finalTotal.toLocaleString("es-MX")}
                </span>
                <span className="text-xs text-neutral-300 font-medium">MXN</span>
                {hasGroupDiscount && (
                  <span className="text-xs text-neutral-400 line-through">
                    ${rawSubtotal.toLocaleString("es-MX")} MXN
                  </span>
                )}
              </div>
              <span className="text-[11px] text-neutral-400">
                {adults} adulto(s) {children > 0 ? `+ ${children} niño(s)` : ""} · Sujeto a confirmación de fecha
              </span>
            </div>

            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="w-full md:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enviar cotización a WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
