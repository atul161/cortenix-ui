"use client";

import React, { useEffect, useState } from "react";
import HeaderComponent from "@/components/Section/Header/HeaderComponent";
import HeroSection from "@/components/Section/HeroSection/HeroSection";
import HeroSectionMobile from "@/components/Section/HeroSection/HeroSectionMobile";
import { useMediaQuery } from "react-responsive";
import OurClients from "@/components/Section/OurClients/OurClients";
import OurClientsMobile from "@/components/Section/OurClients/OurClientsMobile";
import CuttingEdge from "@/components/Section/CuttingEdge/CuttingEdge";
import CuttingEdgeMobile from "@/components/Section/CuttingEdge/CuttingEdgeMobile";
import OurApproach from "@/components/Section/OurApproach/OurApproach";
import OurApproachMobile from "@/components/Section/OurApproach/OurApproachMobile";
import GenAI from "@/components/Section/GenAI/GenAI";
import WhyChooseUs from "@/components/Section/WhyChooseUs/WhyChooseUs";
import VisionaryTeam from "@/components/VisionaryTeam";
import Footer from "@/components/Section/Footer/Footer";
import HappyCustomer from "@/components/Section/HappyCustomers/HappyCustomers";
import CaseStudies from "@/components/Section/OurCaseStudies/CaseStudies";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component is mounted before using the media query
    setIsClient(true);
  }, []);

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderComponent />
      <main className="container flex flex-col max-w-[100vw] overflow-hidden">
        {isClient &&
          (isMobileOrTablet ? (
            <div id="HeroSectionMobile" className="relative">
              <HeroSectionMobile />
            </div>
          ) : (
            <div id="HeroSection" className="relative">
              <HeroSection />
            </div>
          ))}
        {isClient &&
          (isMobileOrTablet ? (
            <div id="OurClientsMobile" className="relative">
              <OurClientsMobile />
            </div>
          ) : (
            <div id="OurClients" className="relative">
              <OurClients />
            </div>
          ))}
        {isClient &&
          (isMobileOrTablet ? (
            <div id="OurApproachSmallerScreens" className="relative">
              <OurApproachMobile />
            </div>
          ) : (
            <div id="OurApproach" className="relative">
              <OurApproach />
            </div>
          ))}
        {isClient &&
          (isMobileOrTablet ? (
            <div id="CuttingEdgeMobile" className="relative">
              <CuttingEdgeMobile />
            </div>
          ) : (
            <div id="CuttingEdge" className="relative">
              <CuttingEdge />
            </div>
          ))}
        <GenAI />
        <WhyChooseUs />
        <VisionaryTeam />
        <HappyCustomer />
        {/*<OurServices />*/}
        <CaseStudies/>
        <Footer />
      </main>
    </div>
  );
}
