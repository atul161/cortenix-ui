"use client";
import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const OurClientsMobile: React.FC = () => {
    const clients = ["Reddy.png", "IndianGovernment.png", "Eris.jpeg", "Merck.jpeg"];

    return (
        <div className="w-[100vw] bg-white flex flex-col items-center p-12 overflow-hidden">
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

            {/* Client Logos Section with Swiper */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                className="w-full max-w-md p-2 h-48 md:h-52"
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <motion.div className="relative bg-white shadow-md rounded-xl flex items-center justify-center w-[95%] h-44 md:h-48 overflow-hidden  m-2
                        "
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                            }}
                            transition={{ duration: 1 }}
                        >

                            <Image
                                src={`/Images/${client}`}
                                alt={client}
                                width={150}
                                height={80}
                                className="object-contain z-10"
                            />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Subtle Gradient at the Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
    );
};

export default OurClientsMobile;
