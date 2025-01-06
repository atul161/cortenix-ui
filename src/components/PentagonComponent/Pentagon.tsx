"use client"
import React from "react";

const Pentagon = ({label}: { label?: string }) => {
    return (
        <div className="relative flex flex-col items-center justify-center">
            {/* Square (Base of the Pentagon) */}
            <div
                className="relative flex items-center justify-center
                    h-10 w-10 sm:h-14 sm:w-14" // Smaller size for mobile, larger for larger screens
                style={{
                    background: "linear-gradient(180deg, #FF8E24 9.09%, #FF7729 49.62%)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Shadow for the square
                }}
            >
                {/* Label inside the square */}
                {label && (
                    <span
                        className="absolute text-center text-[24px] sm:text-[32px] font-primary font-extrabold text-white">
                        {label}
                    </span>
                )}
            </div>

            {/* Triangle (Downward) */}
            <div
                className="relative -mt-[1px] w-10 h-5 sm:w-14 sm:h-7" // Adjust size for mobile and larger screens
                style={{
                    clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
                    background: "#FF7729",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Shadow for the triangle
                }}
            ></div>
        </div>
    );
};

export default Pentagon;
