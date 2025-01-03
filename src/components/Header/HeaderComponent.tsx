"use client";

import { useState } from "react";
import Link from "next/link"; // Import Next.js Link component
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);

    // Animation Variants
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center py-4">
                {/* Logo */}
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#6DB6FF] to-[#0074E9] text-transparent bg-clip-text font-primary">
                    <Link href="/">Cortenix</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-4 xl:space-x-6">
                    {[
                        { href: "/#home", label: "Home" },
                        { href: "/#why-us", label: "Why Cortenix" },
                        { href: "/#services", label: "Services" },
                        { href: "/#case-studies", label: "Case Studies" },
                        { href: "/#team", label: "Our Team" },
                        { href: "/#contact", label: "Contact Us" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="font-primary text-sm md:text-base text-[#1C1C1C] hover:text-blue-600 transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Get Started Button */}
                <Link
                    href="/#get-started"
                    className="hidden lg:block border-[2px] border-blue-600 text-blue-600 px-4 py-2 xl:px-6 xl:py-2.5 hover:bg-blue-600 hover:text-white transition font-primary rounded-lg"
                >
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-blue-600 focus:outline-none"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu with Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden bg-white shadow-md"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <nav className="flex flex-col items-center space-y-4 py-4">
                            {[
                                { href: "/#home", label: "Home" },
                                { href: "/#why-us", label: "Why Cortenix" },
                                { href: "/#services", label: "Services" },
                                { href: "/#case-studies", label: "Case Studies" },
                                { href: "/#team", label: "Our Team" },
                                { href: "/#contact", label: "Contact Us" },
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="font-primary text-sm text-[#1C1C1C] hover:text-blue-600 transition"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/#get-started"
                                className="border-[2px] border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                            >
                                Get Started
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
