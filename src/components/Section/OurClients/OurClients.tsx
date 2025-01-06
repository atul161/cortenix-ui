"use client";
import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import DotComponent from "@/components/DotComponent/DotComponent";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textReveal = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurClients: React.FC = () => {
    return (
        <div
            className="relative w-screen bg-white flex items-center justify-start pl-16 sm:pl-32 md:pl-16 xl:pl-20 2xl:pl-24 overflow-hidden"
        >
            {/* Header Section */}
            <div className="absolute left-0 bottom-8 top-10 mb-2">
                <DotComponent rows={22} columns={3} />
            </div>
            <div className="w-[100%] lg:w-[95%] max-h-auto flex-col items-start mt-10 lg:mt-20 mb-12">
                <div className="flex flex-col ml-20">
                    <div className="flex items-center justify-start gap-4 lg:gap-6 font-primary">
                        <BsGlobeCentralSouthAsia
                            className="text-[#435CFF] h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
                            style={{
                                background: "linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        />

                        <motion.h2
                            className="text-[28px] md:text-[40px] lg:text-[40px]"
                            style={{
                                fontWeight: "bold",
                                fontFamily: "var(--font-primary)",
                                background: "linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            variants={textReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Our Clients
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-gray-600 text-[16px] lg:text-[18px] font-secondary max-w-full lg:max-w-3xl mt-4 lg:mt-8"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Our clients are central to our mission. We believe that your success drives ours, which is why
                        we are committed to delivering exceptional service and high-quality software solutions tailored
                        to your needs.
                    </motion.p>

                    {/* Client Logos Section */}
                    <motion.div
                        className="flex flex-wrap p-4 gap-6 lg:gap-12 justify-center lg:justify-start mt-6"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { src: "/Images/Reddy.png", alt: "Dr. Reddy's" },
                            { src: "/Images/IndianGovernment.png", alt: "Government of India" },
                            { src: "/Images/Eris.jpeg", alt: "Eris" },
                            { src: "/Images/Merck.jpeg", alt: "Merck" },
                        ].map((client, index) => (
                            <motion.div
                                key={index}
                                className="card bg-white rounded-lg flex items-center justify-center w-40 h-20 lg:w-60 lg:h-28 2xl:w-72 2xl:h-32"
                                style={{
                                    boxShadow: "0px 4px 24px 0px #D3DAE7BF",
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                }}
                            >
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    width={100}
                                    height={50}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurClients;
