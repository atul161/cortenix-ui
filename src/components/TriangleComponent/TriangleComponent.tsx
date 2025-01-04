import React, { ReactNode, useEffect, useState } from "react";

type IconRowProps = {
    count: number; // Default number of icons to display
    containerClassName?: string; // Class for the container
    iconClassName?: string; // Class for the icons
    Icon: ReactNode;
};

const TriangleComponent: React.FC<IconRowProps> = ({
                                                       count,
                                                       Icon,
                                                       containerClassName = "",
                                                       iconClassName = "",
                                                   }) => {
    const [responsiveCount, setResponsiveCount] = useState(count);

    useEffect(() => {
        const updateCount = () => {
            const screenWidth = window.innerWidth;
             if (screenWidth > 1024 ) {
                setResponsiveCount(count - 1); // Desktop, use the given count
            } else if (screenWidth <= 1024 && screenWidth >= 800  ) {
                 setResponsiveCount(2);
             } else if (screenWidth >= 768) {
                setResponsiveCount(4); // Tablet
            } else {
                setResponsiveCount(2); // Mobile
            }
        };

        updateCount(); // Set the initial count based on screen size
        window.addEventListener("resize", updateCount); // Update on screen resize
        return () => window.removeEventListener("resize", updateCount); // Cleanup on unmount
    }, [count]);

    if (responsiveCount <= 0) {
        return null; // Return nothing if the responsive count is zero or negative
    }

    return (
        <div
            className={`flex flex-row flex-wrap gap-2 p-2 bg-transparent ${containerClassName}`}
        >
            {Array.from({ length: responsiveCount }, (_, index) => (
                <div
                    key={index}
                    className={`text-white text-2xl sm:text-xl xs:text-lg ${iconClassName}`}
                >
                    {Icon}
                </div>
            ))}
        </div>
    );
};

export default TriangleComponent;
