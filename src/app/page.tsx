"use client";

import HeaderComponent from "@/components/Header/HeaderComponent";
import HeroSection from "@/components/Section/HeroSection/HeroSection";
import HeroSectionMobile from "@/components/Section/HeroSection/HeroSectionMobile";
import { useMediaQuery } from "react-responsive";
import OurClients from "@/components/Section/OurClients/OurClients";
import OurClientsMobile from "@/components/Section/OurClients/OurClientsMobile";

export default function Home() {
    // Define media query breakpoints
    const isMobileOrTablet = useMediaQuery({ query: "(max-width: 900px)" });

    return (
        <div className="min-h-screen bg-gray-100">
            <HeaderComponent/>
            <main className="container flex flex-col">
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
            </main>
        </div>

    );
}
