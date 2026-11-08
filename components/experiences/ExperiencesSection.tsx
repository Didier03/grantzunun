"use client";

import React from "react";
import { Sparkles, Moon, HeartHandshake, Clock, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/parkData";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ExperiencesSection() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#006948]" />;
      case "Moon":
        return <Moon className="w-6 h-6 text-[#006948]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#9b3e3b]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#006948]" />;
    }
  };

  return (
    <section className="w-full py-24 bg-[#f2f4f6] scroll-mt-24" id="experiencias">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9b3e3b] block mb-2">
              Inmersión Cultural y Sensorial
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight font-display">
              Experiencias Únicas en El Gran T´Zunun
            </h2>
          </div>
          <p className="text-neutral-600 text-base max-w-md leading-relaxed">
            Vivencias guiadas por maestros locales para descubrir los secretos ancestrales, la biodiversidad y la magia nocturna del territorio maya.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {renderIcon(exp.iconName)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#006948]" />
                    {exp.duration}
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#006948] block mb-1">
                  {exp.tag}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mb-1.5 font-display">
                  {exp.title}
                </h3>
                <p className="text-xs font-medium text-neutral-500 mb-4">
                  {exp.subtitle}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <a
                href={getWhatsAppUrl(exp.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-neutral-100 text-sm font-semibold text-[#006948] hover:text-[#005137] transition-colors group/btn"
              >
                <span>Reservar experiencia</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
