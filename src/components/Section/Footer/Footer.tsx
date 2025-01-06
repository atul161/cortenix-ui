// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10" style={{
            background: "linear-gradient(112.68deg, #5282FF 0%, #834FF1 100%)",
        }}>
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Left Section */}
                <div className="text-center md:text-left ">
                    <h2 className="text-3xl font-bold mb-2 text-white">Ready to explore the possibilities?</h2>
                    <h2 className="text-3xl font-bold mb-2 text-white">Connect with our team:</h2>
                    <p className="text-sm  mt-6 text-white font-medium">© 2024 Cortinex. All rights reserved.</p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center md:items-end space-y-4 ">
                    <Link href="#"
                          className="hover:underline text-[14px] transition-transform hover:scale-105 hover:text-white hover:font-semibold text-white">Address</Link>
                    <Link href="#"
                          className="hover:underline text-[14px] transition-transform hover:scale-105 hover:text-white hover:font-semibold text-white">Privacy
                        Policy</Link>
                    <Link href="#"
                          className="hover:underline text-[14px] transition-transform hover:scale-105 hover:text-white hover:font-semibold text-white">LinkedIn</Link>
                    <Link href="#"
                          className="hover:underline text-[14px] transition-transform hover:scale-105 hover:text-white hover:font-semibold text-white">Email
                        & Phone</Link>
                </div>
            </div>

            {/* Decorative Line */}
            <div className="mt-8 h-1  w-full rounded-full" style={{
                background: "linear-gradient(112.68deg, #5282FF 0%, #834FF1 100%)",
            }}></div>
        </footer>
    );
};

export default Footer;
