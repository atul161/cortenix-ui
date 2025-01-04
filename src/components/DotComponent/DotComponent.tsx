import React, { useEffect, useState } from "react";

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
                                                       dotSize = { mobile: 2, tablet: 4, desktop: 6 },
                                                       gap = { mobile: 2, tablet: 4, desktop: 6 },
                                                       containerHeight = "auto",
                                                       containerWidth = "auto",
                                                       dotColor = "linear-gradient(112.68deg, #D3DAE7 0%, #D3DAE7 100%)", // Default gradient color
                                                   }) => {
    const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

    useEffect(() => {
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

        // Add event listener for window resize
        window.addEventListener("resize", updateScreenSize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: `repeat(${columns}, ${dotSize[screenSize] + gap[screenSize]}px)`,
                gridTemplateRows: `repeat(${rows}, ${dotSize[screenSize] + gap[screenSize]}px)`,
                gap: `${gap[screenSize]}px`,
                maxHeight: containerHeight,
                maxWidth: containerWidth,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {Array.from({ length: rows * columns }).map((_, index) => (
                <div
                    key={index}
                    className="rounded-full"
                    style={{
                        width: `${dotSize[screenSize]}px`,
                        height: `${dotSize[screenSize]}px`,
                        background: dotColor, // Apply gradient as background
                    }}
                ></div>
            ))}
        </div>
    );
};

export default DotComponent;
