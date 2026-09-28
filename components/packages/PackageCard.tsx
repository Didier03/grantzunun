"use client";

import React from "react";
import { CheckCircle2, MessageCircle, Utensils, Bus, Camera } from "lucide-react";
import { DayPassPackage } from "@/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface PackageCardProps {
  pkg: DayPassPackage;
  onSelectForQuote?: (pkg: DayPassPackage) => void;
}

export function PackageCard({ pkg, onSelectForQuote }: PackageCardProps) {
  const isPopular = pkg.isPopular;

  // Icon selector for special items
  const getItemIcon = (text: string) => {
    if (text.toLowerCase().includes("almuerzo") || text.toLowerCase().includes("buffet")) {
      return <Utensils className={`w-4 h-4 shrink-0 ${isPopular ? "text-[#85f8c4]" : "text-[#006948]"}`} />;
    }
    if (text.toLowerCase().includes("transporte")) {
      return <Bus className="w-4 h-4 shrink-0 text-[#006948]" />;
    }
    if (text.toLowerCase().includes("fotográfico") || text.toLowerCase().includes("foto")) {
      return <Camera className="w-4 h-4 shrink-0 text-[#006948]" />;
    }
    return <CheckCircle2 className={`w-4 h-4 shrink-0 ${isPopular ? "text-[#85f8c4]" : "text-[#006948]"}`} />;
  };

  if (isPopular) {
    return (
      <div className="relative bg-[#006948] text-white rounded-xl p-6 flex flex-col justify-between shadow-2xl -mt-2 md:-mt-4 mb-2 md:mb-0 transform hover:-translate-y-1 transition-all duration-300 border-2 border-[#85f8c4]/40">
        {/* Top Floating Badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#9b3e3b] text-white px-3.5 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold shadow-md whitespace-nowrap">
          {pkg.highlightBadge || "Más Popular"}
        </div>

        <div>
          <div className="mb-4 mt-2">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
              {pkg.audience}
            </span>
            <h3 className="text-xl font-bold text-white mt-3 font-display">
              {pkg.name}
            </h3>
            <p className="text-xs text-emerald-100/80 mt-1">{pkg.subtitle}</p>
          </div>

          <div className="my-6">
            <span className="text-4xl font-extrabold text-white tracking-tight font-display">
              ${pkg.price}
            </span>
            <span className="text-xs text-emerald-200 ml-1.5 font-medium">
              {pkg.currency} / {pkg.unit}
            </span>
          </div>

          <ul className="space-y-3 mb-6 text-sm text-emerald-50">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                {getItemIcon(feature)}
                <span className={feature.toLowerCase().includes("buffet") ? "font-bold text-white" : ""}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <a
            href={getWhatsAppUrl(pkg.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Reservar Más Vendido</span>
          </a>

          {onSelectForQuote && (
            <button
              type="button"
              onClick={() => onSelectForQuote(pkg)}
              className="w-full text-center text-[11px] text-emerald-200 hover:text-white underline pt-1 transition-colors"
            >
              Calcular grupo con este paquete
            </button>
          )}
        </div>
      </div>
    );
  }

  // Standard Package Card
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200/80 hover:-translate-y-0.5">
      <div>
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            {pkg.audience}
          </span>
          <h3 className="text-lg font-bold text-neutral-900 mt-3 font-display">
            {pkg.name}
          </h3>
          <p className="text-xs text-neutral-500 mt-1">{pkg.subtitle}</p>
        </div>

        <div className="my-6">
          <span className="text-3xl font-extrabold text-[#006948] tracking-tight font-display">
            ${pkg.price}
          </span>
          <span className="text-xs text-neutral-500 ml-1 font-medium">
            {pkg.currency} / {pkg.unit}
          </span>
        </div>

        <ul className="space-y-3 mb-6 text-sm text-neutral-600">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              {getItemIcon(feature)}
              <span className={feature.toLowerCase().includes("almuerzo") || feature.toLowerCase().includes("transporte") ? "font-semibold text-neutral-900" : ""}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2 pt-2">
        <a
          href={getWhatsAppUrl(pkg.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Pedir por WhatsApp</span>
        </a>

        {onSelectForQuote && (
          <button
            type="button"
            onClick={() => onSelectForQuote(pkg)}
            className="w-full text-center text-[11px] text-neutral-500 hover:text-[#006948] underline pt-1 transition-colors"
          >
            Calcular grupo
          </button>
        )}
      </div>
    </div>
  );
}
