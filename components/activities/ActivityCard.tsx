"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Zap, Leaf, Compass } from "lucide-react";
import { ParkActivity } from "@/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface ActivityCardProps {
  activity: ParkActivity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const isImageCard = Boolean(activity.image);

  // Icon mapping
  const renderIcon = () => {
    switch (activity.iconName) {
      case "Zap":
        return <Zap className="w-6 h-6 text-[#006948]" />;
      case "Leaf":
        return <Leaf className="w-6 h-6 text-[#9b3e3b]" />;
      default:
        return <Compass className="w-6 h-6 text-[#006948]" />;
    }
  };

  // Determine span classes
  const spanClass =
    activity.colSpan === "two-thirds"
      ? "md:col-span-8 min-h-[360px]"
      : "md:col-span-4 min-h-[300px]";

  if (isImageCard) {
    return (
      <div
        className={`${spanClass} group relative rounded-xl overflow-hidden shadow-sm bg-neutral-900 flex flex-col justify-end p-8 transition-transform duration-300 hover:-translate-y-1`}
      >
        {activity.image && (
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        )}
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

        <div className="relative z-10 text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-[#006948] text-white text-xs font-semibold uppercase tracking-wider mb-3">
            {activity.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">
            {activity.title}
          </h3>
          <p className="text-neutral-300 text-sm md:text-base max-w-xl mb-4 leading-relaxed">
            {activity.description}
          </p>
          <a
            href={getWhatsAppUrl(activity.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#85f8c4] hover:text-white transition-colors group/link"
          >
            <span>{activity.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    );
  }

  // Non-image card (Exatlón, Cacao & Herbolaria)
  return (
    <div
      className={`${spanClass} group rounded-xl overflow-hidden shadow-sm bg-white p-6 md:p-8 flex flex-col justify-between border border-neutral-200/80 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md`}
    >
      <div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
            activity.categoryColor === "tertiary" ? "bg-rose-100" : "bg-emerald-100"
          }`}
        >
          {renderIcon()}
        </div>
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            activity.categoryColor === "tertiary" ? "text-[#9b3e3b]" : "text-[#565e74]"
          }`}
        >
          {activity.category}
        </span>
        <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-2 font-display">
          {activity.title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          {activity.description}
        </p>
      </div>

      <a
        href={getWhatsAppUrl(activity.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#006948] hover:text-[#00855d] transition-colors pt-2 group/link"
      >
        <span>{activity.ctaText}</span>
        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
}
