"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  Menu,
  X,
  Compass,
  CalendarCheck,
  BookOpen,
  ShieldCheck,
  Award,
  Handshake,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  onOpenReserveModal?: () => void;
}

export function Navbar({ onOpenReserveModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Secciones principales en app/page.tsx
  const mainNavLinks = [
    { label: t.navbar.mainLinks.extremeActivities, href: "/#actividades-extremas" },
    { label: t.navbar.mainLinks.recreation, href: "/#recreacion-descanso" },
    { label: t.navbar.mainLinks.packages, href: "/#paquetes" },
    { label: t.navbar.mainLinks.experiences, href: "/#experiencias" },
    { label: t.navbar.mainLinks.lodging, href: "/#hospedaje" },
    { label: t.navbar.mainLinks.gastronomy, href: "/#gastronomia" },
  ];

  // Secciones institucionales en rutas dedicadas
  const institutionalLinks = [
    { label: t.navbar.institutionalLinks.history, href: "/historia", icon: BookOpen },
    { label: t.navbar.institutionalLinks.rules, href: "/reglamentos", icon: ShieldCheck },
    { label: t.navbar.institutionalLinks.certifications, href: "/certificaciones", icon: Award },
    { label: t.navbar.institutionalLinks.alliances, href: "/convenios", icon: Handshake },
  ];

  const handleReserveClick = () => {
    if (onOpenReserveModal) {
      onOpenReserveModal();
    } else {
      window.open(
        getWhatsAppUrl(t.navbar.reserveWhatsappDefaultMsg),
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80"
          : "bg-white/90 backdrop-blur-sm border-b border-black/5"
      }`}
    >
      {/* Barra Superior Institucional (Desktop) */}
      <div className="hidden lg:block bg-[#003926] text-emerald-50 border-b border-emerald-900/40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-1.5 flex items-center justify-between text-xs">
          <span className="text-emerald-200/90 font-medium tracking-wide">
            {t.navbar.topBarTagline}
          </span>
          <nav className="flex items-center gap-6" aria-label={t.navbar.institutionalNavAria}>
            {institutionalLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 py-0.5 transition-colors ${
                    isActive
                      ? "text-[#85f8c4] font-semibold underline underline-offset-4"
                      : "text-emerald-100/90 hover:text-[#85f8c4]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#85f8c4]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Barra Principal de Secciones */}
      <div
        className={`max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-3.5"
        }`}
      >
        {/* Brand Wordmark (Zone 1) */}
        <Link
          href="/"
          className="-ml-2 flex shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/ic_tzunun.webp"
            alt="El Gran T'Zunun"
            width={1500}
            height={491}
            className="h-9 w-auto xl:h-10"
          />
        </Link>

        {/* Clean Nav Links (Zone 2) */}
        <nav
          className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 flex-wrap"
          aria-label={t.navbar.parkSectionsAria}
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs xl:text-[13px] font-medium text-neutral-700 hover:text-[#006948] transition-colors relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#006948] hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher + Action Button (Zone 3) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <LanguageSwitcher variant="light" />
          <button
            type="button"
            onClick={handleReserveClick}
            className="px-4 xl:px-5 py-2.5 bg-[#006948] hover:bg-[#005137] text-white text-xs font-semibold rounded uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm hover:shadow"
          >
            {t.navbar.reserveBtn}
          </button>
        </div>

        {/* Mobile / Tablet Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher variant="light" />
          <button
            type="button"
            onClick={handleReserveClick}
            className="px-3.5 py-1.5 bg-[#006948] text-white text-xs font-semibold rounded uppercase tracking-wider"
          >
            {t.navbar.reserveBtn}
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-[#006948] transition-colors"
            aria-label={t.navbar.openMenuAria}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#006948] mb-2">
                {t.navbar.exploreParkHeading}
              </p>
              <div className="flex flex-col">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-neutral-800 hover:text-[#006948] py-2.5 border-b border-neutral-100 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <Compass className="w-4 h-4 text-neutral-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-2">
                {t.navbar.parkInfoHeading}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {institutionalLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-medium text-neutral-700 hover:text-[#006948] p-2.5 rounded-lg bg-neutral-50 hover:bg-emerald-50/60 border border-neutral-200/70 flex items-center gap-2.5 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#006948] shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleReserveClick();
                }}
                className="w-full py-3 bg-[#006948] text-white text-sm font-semibold rounded text-center flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{t.navbar.reserveDateBtn}</span>
              </button>
              <a
                href={getWhatsAppUrl(t.navbar.infoWhatsappDefaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-white text-sm font-semibold rounded text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.navbar.contactWhatsappBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
