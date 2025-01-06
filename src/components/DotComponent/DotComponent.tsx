"use client";
import React, {useEffect, useState} from "react";

interface DotComponentProps {
    rows: number;
    columns: number;
    dotSize?: { mobile: number; tablet: number; desktop: number }; // Responsive dot sizes
    gap?: { mobile: number; tablet: number; desktop: number }; // Responsive gap sizes
    containerHeight?: number | string; // Optional custom container height
    containerWidth?: number | string; // Optional custom container width
    dotColor?: string; // Allow customizing dot color
}


const DotComponent: React.FC<DotComponentProps> = ({
                                                       rows,
                                                       columns,
                                                       dotSize = {mobile: 2, tablet: 4, desktop: 6},
                                                       gap = {mobile: 2, tablet: 4, desktop: 6},
                                                       containerHeight = "auto",
                                                       containerWidth = "auto",
                                                       dotColor = "linear-gradient(112.68deg, #D3DAE7 0%, #D3DAE7 100%)",
                                                   }) => {
    const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenSize("mobile");
            } else if (width < 1024) {
                setScreenSize("tablet");
            } else {
                setScreenSize("desktop");
            }
        };

        // Set initial screen size
        updateScreenSize();
        setHydrated(true); // Mark as hydrated after determining screen size

        // Add event listener for window resize
        window.addEventListener("resize", updateScreenSize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    // Default to "desktop" styles during SSR
    const effectiveScreenSize = hydrated ? screenSize : "desktop";

    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: `repeat(${columns}, ${
                    dotSize[effectiveScreenSize] + gap[effectiveScreenSize]
                }px)`,
                gridTemplateRows: `repeat(${rows}, ${
                    dotSize[effectiveScreenSize] + gap[effectiveScreenSize]
                }px)`,
                gap: `${gap[effectiveScreenSize]}px`,
                maxHeight: containerHeight,
                maxWidth: containerWidth,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {Array.from({length: rows * columns}).map((_, index) => (
                <div
                    key={index}
                    className="rounded-full"
                    style={{
                        width: `${dotSize[effectiveScreenSize]}px`,
                        height: `${dotSize[effectiveScreenSize]}px`,
                        background: dotColor,
                    }}
                ></div>
            ))}
        </div>
    );
};


export default DotComponent;
