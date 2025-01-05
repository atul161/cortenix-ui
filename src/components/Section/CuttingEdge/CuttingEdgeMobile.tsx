"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const CuttingEdgeMobile: React.FC = () => {
    return (
        <motion.div
            className="relative w-[100vw] bg-[#658FFF] py-10 flex flex-col items-center text-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Top-left Shape */}
            <div
                className="rotate-[45deg] absolute w-[50vw] h-[50vw] sm:w-[50vw] sm:h-[50vw] md:w-[50vw] md:h-[50vw] -top-[17vh] sm:-top-[17vh] md:-top-[30vh] -left-[5vw] z-0 overflow-hidden origin-top-left"
            >
                <div className="absolute h-[85%] w-[85%] bg-[#FFFFFF33] origin-bottom-right rounded-md md:rounded-none"></div>
                <div className="absolute h-[75%] w-[75%] bg-[#E5E5E533] origin-bottom-right rounded-md md:rounded-none"></div>
                <div className="absolute h-[60%] w-[60%] bg-[#CACACA33] origin-bottom-right rounded-md md:rounded-none"></div>
            </div>

            <div className="w-[90%] max-w-[1200px]">
                {/* Title Section */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-white font-primary font-semibold text-[20px] sm:text-[28px] leading-tight">
                        Powered By <span className="text-primary font-bold">Cutting-Edge</span> Technologies
                    </h2>
                </motion.div>

                {/* Description and Button */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <p className="text-white font-secondary text-[14px] sm:text-[16px] mb-4">
                        We work with all the major technologies, incorporating
                        <span className="block">
                            the latest and most renowned tech stacks and platforms.
                        </span>
                    </p>
                    <Link
                        href="/#get-started"
                        className="inline-block px-6 py-2 bg-white text-blue-600 font-medium rounded-md shadow-md transition hover:bg-blue-600 hover:text-white"
                    >
                        Get In Touch
                    </Link>
                </motion.div>

                {/* Technologies Slider */}
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.5 },
                        }}
                        className="py-4"
                    >
                        {[
                            {
                                title: "Open AI",
                                content: "O1, GPT4, ChatGPT, DALL-E, Whisper",
                                src: "/Images/Tech/Chatgpt.png",
                                alt: "Open AI Logo",
                            },
                            {
                                title: "Claude",
                                content: "Claude 3 Opus, Claude 3.5 Sonnet",
                                src: "/Images/Tech/Claude.png",
                                alt: "Claude Logo",
                            },
                            {
                                title: "AWS Bedrock",
                                content: "Cohere, Mistral AI, Stability AI",
                                src: "/Images/Tech/Aws.png",
                                alt: "AWS Bedrock Logo",
                            },
                            {
                                title: "Google Vertex.AI",
                                content: "Gemini, Bert, Med PaLM",
                                src: "/Images/Tech/Vertex.png",
                                alt: "Google Vertex.AI Logo",
                            },
                            {
                                title: "Meta",
                                content: "MetaAI, LLaMA 3.1, SAM 2",
                                src: "/Images/Tech/Meta.png",
                                alt: "Meta Logo",
                            },
                            {
                                title: "Azure",
                                content: "Open AI, AI Search, AI Speech Analytics",
                                src: "/Images/Tech/Azure.png",
                                alt: "Azure Logo",
                            },
                        ].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow-lg border-2 border-[#D1DDFF] hover:shadow-xl hover:border-blue-500 transition">
                                    <Image src={item.src} alt={item.alt} width={50} height={50} />
                                    <h3 className="font-primary font-bold text-[#A845FF] text-[18px] mt-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] font-secondary mt-1 text-gray-600">
                                        {item.content}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Bottom-right Shape */}
            <div
                className="rotate-[135deg] -right-[80vw] -bottom-[30vh] sm:-right-[80vw] sm:-bottom-[30vh] md:-right-[92vw] md:-bottom-[38vh] absolute w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[50vw] md:h-[50vw] z-0 overflow-visible origin-top-left"
            >
                <div className="absolute h-[85%] w-[85%] bg-[#FFFFFF33] origin-bottom-right rounded-md md:rounded-none"></div>
                <div className="absolute h-[75%] w-[75%] bg-[#E5E5E533] origin-bottom-right rounded-md md:rounded-none"></div>
                <div className="absolute h-[60%] w-[60%] bg-[#CACACA33] origin-bottom-right rounded-md md:rounded-none"></div>
            </div>
        </motion.div>
    );
};

export default CuttingEdgeMobile;
