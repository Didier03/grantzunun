"use client";

import React from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useTranslation } from "@/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#f2f4f6] border-t border-neutral-300/70 w-full py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Brand & Rights */}
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-neutral-900 block mb-2 font-display">
            El Gran T´Zunun
          </span>
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} El Gran T´Zunun Nature Park. {t.footer.rightsReserved}
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            {t.footer.locationTagline}
          </p>
        </div>

        {/* Navigation & Social Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <nav className="flex flex-wrap justify-center md:justify-end gap-5 text-sm font-medium text-neutral-700">
            <Link href="/historia" className="hover:text-[#006948] transition-colors">
              {t.navbar.institutionalLinks.history}
            </Link>
            <Link href="/reglamentos" className="hover:text-[#006948] transition-colors">
              {t.navbar.institutionalLinks.rules}
            </Link>
            <Link href="/certificaciones" className="hover:text-[#006948] transition-colors">
              {t.navbar.institutionalLinks.certifications}
            </Link>
            <Link href="/convenios" className="hover:text-[#006948] transition-colors">
              {t.navbar.institutionalLinks.alliances}
            </Link>
          </nav>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-xs font-medium text-neutral-500">
            <a
              href={getWhatsAppUrl(t.footer.directContactMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#006948] transition-colors"
            >
              {t.footer.directContact}
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#006948] transition-colors"
            >
              {t.footer.location}
            </a>
            <a
              href={getWhatsAppUrl(t.footer.instagramMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#006948] transition-colors"
            >
              Instagram
            </a>
            <a
              href={getWhatsAppUrl(t.footer.facebookMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#006948] transition-colors"
            >
              Facebook
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
