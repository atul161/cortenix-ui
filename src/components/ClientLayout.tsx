"use client";

import {motion} from "framer-motion";
import React from "react";

export default function ClientLayout({children}: { children: React.ReactNode }) {
    const isLoading = false;

    const simpleAnimation = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    };

    if (isLoading) {
        return (
            <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <>
            {/* Background Animation */}
            <motion.div
                className="grid-background"
                initial="hidden"
                animate="visible"
                variants={simpleAnimation}
                transition={{duration: 1}}
                style={{zIndex: 0}} // Ensure background is below everything
            ></motion.div>

            {/* Main Content Animation */}
            <motion.main
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={simpleAnimation}
                transition={{duration: 1}}
            >
                {children}
            </motion.main>
        </>
    );
}
