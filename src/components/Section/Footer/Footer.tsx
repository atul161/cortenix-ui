"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10"
            style={{
                background: "linear-gradient(112.68deg, #5282FF 0%, #834FF1 100%)",
            }}
        >
            {/* Desktop and Tablet Layout */}
            <div className="hidden md:grid container mx-auto px-4 grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-white">Cortinex</h1>
                    <p className="text-sm mt-2">&copy; 2024 Cortinex. All rights reserved.</p>
                    <div className="flex flex-col mt-4 space-y-2">
                        <Link
                            href="#"
                            className="hover:underline text-sm text-white transition-all duration-300 hover:text-white"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline text-sm text-white transition-all duration-300 hover:text-white"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>

                {/* Explore Section */}
                <div className="flex flex-col space-y-3">
                    <h3 className="text-lg font-semibold mb-2 text-white">Explore</h3>
                    {["Home", "Why Cortinex", "Our Team", "Case Studies", "Services"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="hover:underline text-sm flex items-center text-white transition-all duration-300 hover:text-white"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Contact Us Section */}
                <div className="flex flex-col space-y-5">
                    <h3 className="text-lg mb-2 text-white font-bold">Contact Us</h3>
                    <Link
                        href="mailto:email1@cortinex.com"
                        className="flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                    >
                        <FaEnvelope className="text-white text-lg" />
                        <span className="text-white">email1@cortinex.com</span>
                    </Link>
                    <Link
                        href="tel:+91XXXXXXXXXX"
                        className="text-white flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                    >
                        <FaPhoneAlt className="text-white text-lg" />
                        <span className="text-white hover:text-white">+91XXXXXXXXXX</span>
                    </Link>
                    <Link
                        href="mailto:email2@cortinex.com"
                        className="text-white flex items-center space-x-3 text-sm hover:underline transition-all duration-300 text-white hover:text-white"
                    >
                        <FaEnvelope className="text-white text-lg" />
                        <span>email2@cortinex.com</span>
                    </Link>
                    <Link
                        href="tel:+91XXXXXXXXXX"
                        className="flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                    >
                        <FaPhoneAlt className="text-white text-lg" />
                        <span className="text-white">+91XXXXXXXXXX</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                    >
                        <FaLinkedin className="text-white text-lg" />
                        <span className="text-white">Connect on LinkedIn</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden container mx-auto px-4">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-4 text-white">Cortinex</h1>
                    <p className="text-sm">&copy; 2024 Cortinex. All rights reserved.</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-center text-white">Explore</h3>
                        <div className="flex flex-wrap justify-center space-x-4">
                            {["Home", "Why Cortinex", "Our Team", "Case Studies", "Services"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="hover:underline text-sm text-white transition-all duration-300 hover:text-white"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg mb-2 text-center font-bold text-white">Contact Us</h3>
                        <div className="flex flex-col items-center space-y-4">
                            <Link
                                href="mailto:email1@cortinex.com"
                                className="flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                            >
                                <FaEnvelope className="text-white text-xl" />
                                <span className="text-white">email1@cortinex.com</span>
                            </Link>
                            <Link
                                href="tel:+91XXXXXXXXXX"
                                className="text-white flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                            >
                                <FaPhoneAlt className="text-white text-xl" />
                                <span className="text-white">+91XXXXXXXXXX</span>
                            </Link>
                            <Link
                                href="mailto:email2@cortinex.com"
                                className="flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                            >
                                <FaEnvelope className="text-white text-xl" />
                                <span className="text-white">email2@cortinex.com</span>
                            </Link>
                            <Link
                                href="tel:+91XXXXXXXXXX"
                                className="text-white flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                            >
                                <FaPhoneAlt className="text-white text-xl" />
                                <span className="text-white">+91XXXXXXXXXX</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center space-x-3 text-sm hover:underline transition-all duration-300 hover:text-white"
                            >
                                <FaLinkedin className="text-white text-xl" />
                                <span className="text-white">Connect on LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Line */}
            <div
                className="mt-8 h-1 w-full rounded-full"
                style={{
                    background: "linear-gradient(112.68deg, #5282FF 0%, #834FF1 100%)",
                }}
            ></div>
        </footer>
    );
};

export default Footer;
