"use client"
import React from "react";
import { motion } from "framer-motion";
import TriangleComponent from "@/components/TriangleComponent/TriangleComponent";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import DotComponent from "@/components/DotComponent/DotComponent";

const CuttingEdge: React.FC = () => {
    return (
        <motion.div
            className="relative h-auto w-[100vw] bg-[#658FFF] flex items-center justify-center transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] -top-[130px] sm:-top-[190px] md:-top-[260px] left-0 z-0 overflow-hidden rotate-45 origin-top-left">
                <div className="absolute h-[175px] w-[175px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] bg-[#FFFFFF33] origin-top-left rounded-md md:rounded-none"></div>
                <div className="absolute h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] bg-[#E5E5E533] origin-top-left rounded-md md:rounded-none"></div>
                <div className="absolute h-[125px] w-[125px] sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px] bg-[#CACACA33] origin-top-left rounded-md md:rounded-none"></div>
            </div>

            <div className="w-[90%] mx-auto h-auto max-h-full flex flex-col items-center justify-center">
                <motion.div
                    className="pt-16 px-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                        <div className="flex items-center">
                            <TriangleComponent
                                count={5}
                                iconClassName="text-[18px] sm:text-[20px] md:text-[24px] text-white"
                                Icon={<AiFillCaretLeft />}
                            />
                        </div>
                        <h2 className="text-white font-primary font-normal text-center text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] px-4 md:px-0">
                            Powered By <span className="text-primary font-bold">Cutting-Edge</span> Technologies
                        </h2>
                        <div className="flex items-center">
                            <TriangleComponent
                                count={5}
                                iconClassName="text-[18px] sm:text-[20px] md:text-[24px] text-white"
                                Icon={<AiFillCaretRight />}
                            />
                        </div>
                    </div>
                </motion.div>
                <div className="px-4 flex flex-col">
                    <div className="flex flex-col items-center justify-between gap-5 mb-8 md:flex-row">
                        <p className="text-center font-normal font-secondary text-[14px] sm:text-[16px] md:text-[18px] text-white sm:text-left">
                            We work with all the major technologies, incorporating
                            <span className="block">
                                the latest and most renowned tech stacks and platforms.
                            </span>
                        </p>
                        <Link
                            href="/contact"
                            className="px-3 py-2 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition sm:px-5 sm:py-2 md:px-6 md:py-3 text-[14px] sm:text-[16px]"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    <div className="pb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                {
                                    title: "Open AI",
                                    content: "O1, GPT4, ChatGPT, DALL-E, Whisper",
                                    src: "/Images/Tech/Chatgpt.png",
                                    alt: "Open AI Logo"
                                },
                                {
                                    title: "Claude",
                                    content: "Claude 3 Opus, Claude 3.5 Sonnet",
                                    src: "/Images/Tech/Claude.png",
                                    alt: "Claude Logo"
                                },
                                {
                                    title: "AWS Bedrock",
                                    content: "Cohere, Mistral AI, Stability AI",
                                    src: "/Images/Tech/Aws.png",
                                    alt: "AWS Bedrock Logo"
                                },
                                {
                                    title: "Google Vertex.AI",
                                    content: "Gemini, Bert, Med PaLM",
                                    src: "/Images/Tech/Vertex.png",
                                    alt: "Google Vertex.AI Logo"
                                },
                                {
                                    title: "Meta",
                                    content: "MetaAI, LLaMA 3.1, SAM 2",
                                    src: "/Images/Tech/Meta.png",
                                    alt: "Meta Logo"
                                },
                                {
                                    title: "Azure",
                                    content: "Open AI, AI Search, AI Speech Analytics",
                                    src: "/Images/Tech/Azure.png",
                                    alt: "Azure Logo"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-start justify-center border-4 border-[#D1DDFF] shadow-lg p-5 gap-3 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-500"
                                >
                                    <Image src={item.src} alt={item.alt} width={45} height={45} />
                                    <div className="font-primary font-bold text-[18px] sm:text-[20px] text-[#A845FF]">
                                        {item.title}
                                    </div>
                                    <div className="text-[12px] sm:text-[14px] md:text-[16px] font-primary font-medium">
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CuttingEdge;
