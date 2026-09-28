"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ActivitiesBento } from "@/components/activities/ActivitiesBento";
import { PackagesSection } from "@/components/packages/PackagesSection";
import { LodgingSection } from "@/components/lodging/LodgingSection";
import { GastronomySection } from "@/components/gastronomy/GastronomySection";
import { ConversionBanner } from "@/components/cta/ConversionBanner";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuickReservationModal } from "@/components/modal/QuickReservationModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans antialiased overflow-x-hidden selection:bg-[#85f8c4] selection:text-[#002114]">
      {/* Top Fixed Navigation */}
      <Navbar onOpenReserveModal={() => setIsModalOpen(true)} />

      {/* Main Landing Page Content */}
      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section with Slider, Value Prop and Direct CTAs */}
        <HeroSection />

        {/* Bento Grid: Extreme Activities, Sacred Cenote & Mayan Culture */}
        <ActivitiesBento />

        {/* Transparent Rates & Day Pass Packages + Group Calculator */}
        <PackagesSection />

        {/* Eco Lodging: Rustic Cabins, Romantic Glamping & Camp Site */}
        <LodgingSection />

        {/* Authentic Mayan Gastronomy Experience */}
        <GastronomySection />

        {/* Final Conversion Action Banner */}
        <ConversionBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Floating WhatsApp Contact with Pulse */}
      <FloatingWhatsApp />

      {/* Quick Reservation & Inquiry Modal */}
      <QuickReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
