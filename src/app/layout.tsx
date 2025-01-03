import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";
import "@/styles/global.css";


import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import React from "react";

// Configure Google Fonts
const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: [ "200", "300", "400", "500", "600", "700", "800"], // All available weights
    variable: "--font-plus-jakarta-sans",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // All available weights
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://cortenix.in"),
    title: "Cortenix - Innovating with AI and Generative AI Solutions",
    description: "Cortenix specializes in cutting-edge AI and Generative AI technologies to transform businesses and empower innovation.",
    openGraph: {
        title: "Cortenix - Innovating with AI and Generative AI Solutions",
        description: "Cortenix offers state-of-the-art AI and Generative AI services to revolutionize industries and create transformative solutions.",
        url: "https://cortenix.in",
        siteName: "Cortenix",
        images: [
            {
                url: "/og-image.jpg", // Update with an actual Open Graph image path
                width: 1200,
                height: 630,
                alt: "Cortenix - Innovating with AI and Generative AI Solutions",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable} ${plusJakartaSans.variable}`}>
        <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    );
}
