"use client";

import HeaderComponent from "@/components/Header/HeaderComponent";
import HeroSection from "@/components/Section/HeroSection/HeroSection";
import HeroSectionMobile from "@/components/Section/HeroSection/HeroSectionMobile";
import { useMediaQuery } from "react-responsive";

export default function Home() {
    // Define media query breakpoints
    const isMobileOrTablet = useMediaQuery({ query: "(max-width: 900px)" });

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <HeaderComponent />
            {/* Main Content */}
            <main className="container">
                {/* Conditional rendering based on screen size */}
                {isMobileOrTablet ? (
                    <div id="HeroSectionMobile" className="relative">
                        <HeroSectionMobile />
                    </div>
                ) : (
                    <div id="HeroSection" className="relative">
                        <HeroSection />
                    </div>
                )}
            </main>
        </div>
    );
}
