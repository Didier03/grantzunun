"use client";

import React from "react";
import { Award, ShieldCheck, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n";

export function TrustBadges() {
  const { t } = useTranslation();

  const badges = [
    {
      icon: Award,
      metric: t.hero.trustBadges[0].metric,
      label: t.hero.trustBadges[0].label,
      iconColor: "text-[#85f8c4]",
    },
    {
      icon: ShieldCheck,
      metric: t.hero.trustBadges[1].metric,
      label: t.hero.trustBadges[1].label,
      iconColor: "text-[#85f8c4]",
    },
    {
      icon: MessageCircle,
      metric: t.hero.trustBadges[2].metric,
      label: t.hero.trustBadges[2].label,
      iconColor: "text-[#25D366]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
      {badges.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div key={idx} className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm shrink-0">
              <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight font-display tracking-tight">
                {item.metric}
              </p>
              <p className="text-xs text-neutral-300 font-sans">{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
