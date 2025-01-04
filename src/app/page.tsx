"use client";

import HeaderComponent from "@/components/Header/HeaderComponent";
import HeroSection from "@/components/Section/HeroSection/HeroSection";
import HeroSectionMobile from "@/components/Section/HeroSection/HeroSectionMobile";
import { useMediaQuery } from "react-responsive";
import OurClients from "@/components/Section/OurClients/OurClients";
import OurClientsMobile from "@/components/Section/OurClients/OurClientsMobile";
import CuttingEdge from "@/components/Section/CuttingEdge/CuttingEdge";
import CuttingEdgeMobile from "@/components/Section/CuttingEdge/CuttingEdgeMobile";
import GenAI from "@/components/Section/GenAI/GenAI";

export default function Home() {
  // Define media query breakpoints
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderComponent />
      <main className=" flex flex-col">
        {isMobileOrTablet ? (
          <div id="HeroSectionMobile" className="relative">
            <HeroSectionMobile />
          </div>
        ) : (
          <div id="HeroSection" className="relative">
            <HeroSection />
          </div>
        )}
        {isMobileOrTablet ? (
          <div id="OurClientsMobile" className="relative">
            <OurClientsMobile />
          </div>
        ) : (
          <div id="OurClients" className="relative">
            <OurClients />
          </div>
        )}
        {isMobileOrTablet ? (
          <div id="CuttingEdgeMobile" className="relative">
            <CuttingEdgeMobile />
          </div>
        ) : (
          <div id="CuttingEdge" className="relative">
            <CuttingEdge />
          </div>
        )}
        <GenAI />
      </main>
    </div>
  );
}
