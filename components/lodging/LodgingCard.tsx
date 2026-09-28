"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { LodgingOption } from "@/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface LodgingCardProps {
  lodging: LodgingOption;
}

export function LodgingCard({ lodging }: LodgingCardProps) {
  const getBadgeStyle = (type: LodgingOption["badgeType"]) => {
    switch (type) {
      case "romantic":
        return "bg-[#9b3e3b] text-white";
      case "eco":
        return "bg-[#006948] text-white";
      default:
        return "bg-neutral-900/80 text-white backdrop-blur-sm";
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200/80 flex flex-col group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      {/* Image Header with Badge */}
      <div className="relative h-64 overflow-hidden bg-neutral-100">
        <Image
          src={lodging.image}
          alt={lodging.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <span
          className={`absolute top-4 left-4 font-semibold text-xs px-3 py-1 rounded-full shadow-sm ${getBadgeStyle(
            lodging.badgeType
          )}`}
        >
          {lodging.badge}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">
            {lodging.title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
            {lodging.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {lodging.amenities.map((amenity, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 font-medium"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <a
          href={getWhatsAppUrl(lodging.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-neutral-100 hover:bg-[#006948] text-neutral-800 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors duration-200 active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
          <span>Consultar disponibilidad en WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
