"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const handleScroll = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#")) {
            e.preventDefault();
            const id = href.split("#")[1];

            if (pathname === "/contact") {
                setLoading(true);
                await router.push(`/${href}`);
                setLoading(false);

                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                }
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                }
            }
        }
    };

    const links = [
        { href: "/#home", label: "Home" },
        { href: "/#why-us", label: "Why Cortenix" },
        { href: "/#services", label: "Services" },
        { href: "/#case-studies", label: "Case Studies" },
        { href: "/#team", label: "Our Team" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center py-4">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#6DB6FF] to-[#0074E9] text-transparent bg-clip-text font-primary">
                        <Link href="/">Cortenix</Link>
                    </div>

                    <nav className="hidden lg:flex space-x-4 xl:space-x-6">
                        {links.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className={`font-primary text-sm md:text-base ${
                                    pathname === item.href || (pathname === "/contact" && item.href === "/contact")
                                        ? "text-blue-600 font-bold"
                                        : "text-[#1C1C1C] hover:text-blue-600"
                                } transition`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <Link
                        href="/contact"
                        className={`hidden lg:block border-[2px] ${
                            pathname === "/contact" ? "text-[#2761FF] border-[#A845FF] hover:bg-[#365EFF] hover:text-white" : "text-[#2761FF] border-[#A845FF] hover:bg-[#365EFF] hover:text-white"
                        } px-5 py-1 xl:px-6 xl:py-2 transition font-primary `}
                    >
                        Get Started
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-blue-600 focus:outline-none"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

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
                                {links.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={(e) => handleScroll(e, item.href)}
                                        className={`font-primary text-sm ${
                                            pathname === item.href || (pathname === "/contact" && item.href === "/contact")
                                                ? "text-blue-600 font-bold"
                                                : "text-[#1C1C1C] hover:text-blue-600"
                                        } transition`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    className={`border-[2px] ${
                                        pathname === "/contact" ? "text-[#2761FF] border-[#A845FF] hover:bg-[#365EFF] hover:text-white" : "text-[#2761FF] border-[#A845FF] hover:bg-[#365EFF] hover:text-white"
                                    } px-4 py-1 transition`}
                                >
                                    Get Started
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <AnimatePresence>
                {loading && (
                    <motion.div
                        className="fixed inset-0 bg-blue-600 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-center items-center h-full">
                            <div className="text-white text-xl">Loading...</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
