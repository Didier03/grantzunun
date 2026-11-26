"use client";

import React, { useState } from "react";
import { ReservationPreset } from "@/types";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ActivitiesBento } from "@/components/activities/ActivitiesBento";
import { RecreationSection } from "@/components/activities/RecreationSection";
import { PackagesSection } from "@/components/packages/PackagesSection";
import { ExperiencesSection } from "@/components/experiences/ExperiencesSection";
import { LodgingSection } from "@/components/lodging/LodgingSection";
import { GastronomySection } from "@/components/gastronomy/GastronomySection";
import { ConversionBanner } from "@/components/cta/ConversionBanner";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuickReservationModal } from "@/components/modal/QuickReservationModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState<ReservationPreset | null>(null);

  const handleOpenModalFromNavbar = () => {
    setModalPreset(null);
    setIsModalOpen(true);
  };

  const handleOpenModalWithPreset = (preset: ReservationPreset) => {
    setModalPreset(preset);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans antialiased overflow-x-hidden selection:bg-[#85f8c4] selection:text-[#002114]">
      {/* Top Fixed Navigation */}
      <Navbar onOpenReserveModal={handleOpenModalFromNavbar} />

      {/* Main Landing Page Content */}
      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section with Slider, Value Prop and Direct CTAs */}
        <HeroSection />

        {/* Bento Grid: Extreme Activities & Adventure */}
        <ActivitiesBento />

        {/* Recreation & Relaxation Activities */}
        <RecreationSection />

        {/* Official Rates, Categories & Group Calculator */}
        <PackagesSection onOpenReserveModal={handleOpenModalWithPreset} />

        {/* Curated Cultural & Nature Experiences */}
        <ExperiencesSection />

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
        preset={modalPreset}
      />
    </div>
  );
}
