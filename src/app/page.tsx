"use client";

import HeaderComponent from "@/components/Header/HeaderComponent";
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

export default function Home() {
  // Define media query breakpoints
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 900px)" });

    return (
        <div className="min-h-screen bg-gray-100">
            <HeaderComponent/>
            <main className="container flex flex-col max-w-[100vw] overflow-hidden">
                {isMobileOrTablet ? (
                    <div id="HeroSectionMobile" className="relative">
                        <HeroSectionMobile/>
                    </div>
                ) : (
                    <div id="HeroSection" className="relative">
                        <HeroSection/>
                    </div>
                )}
                {isMobileOrTablet ? (
                    <div id="OurClientsMobile" className="relative">
                        <OurClientsMobile/>
                    </div>
                ) : (
                    <div id="OurClients" className="relative">
                        <OurClients/>
                    </div>
                )}
                {isMobileOrTablet ? (
                    <div id="OurApproachSmallerScreens" className="relative">
                        <OurApproachMobile/>
                    </div>
                ) : (
                    <div id="OurApproach" className="relative">
                        <OurApproach/>
                    </div>
                )}

                {isMobileOrTablet ? (
                    <div id="CuttingEdgeMobile" className="relative">
                        <CuttingEdgeMobile/>
                    </div>
                ) : (
                    <div id="CuttingEdge" className="relative">
                        <CuttingEdge/>
                    </div>
                )}
                {/*<GenAI/>*/}
                <GenAI />
                <WhyChooseUs />
                <VisionaryTeam />

            </main>
        </div>

    );
}
