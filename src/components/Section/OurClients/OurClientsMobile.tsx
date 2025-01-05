"use client";
import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

const OurClients: React.FC = () => {
    return (
        <div className="w-[100vw] bg-white flex flex-col items-center p-6 overflow-hidden">
            {/* Header Section */}
            <div className="w-full max-w-4xl flex flex-col items-center mt-6 mb-8">
                <div className="flex items-center gap-3 font-primary">
                    <BsGlobeCentralSouthAsia
                        className="text-[#435CFF] h-10 w-10"
                        style={{
                            background: "linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    />
                    <h2
                        className="text-2xl md:text-3xl font-bold text-[#435CFF] font-primary"
                        style={{
                            background: "linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Our Clients
                    </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base font-secondary text-center max-w-2xl mt-4 leading-relaxed">
                    Our clients are central to our mission. We believe that your success drives ours, which is why we are committed to delivering exceptional service and high-quality software solutions tailored to your needs.
                </p>
            </div>

            {/* Client Logos Section */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 mt-4">
                {["Reddy", "IndianGovernment", "Eris", "Merck"].map((client, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] shadow-lg rounded-xl flex items-center justify-center w-full h-24 md:h-32 overflow-hidden"
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 bg-white opacity-10 blur-md" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-shimmer" />
                        <Image
                            src={`/Images/${client}.png`}
                            alt={client}
                            width={120}
                            height={60}
                            className="object-contain z-10"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Subtle Gradient at the Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
    );
};

export default OurClients;
