"use client"
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TriangleComponent from "@/components/TriangleComponent/TriangleComponent";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import DotComponent from "@/components/DotComponent/DotComponent";

const OurCaseStudies: React.FC = () => {
    const cards = [
        {
            title: "Document Processing and Actionable Insights",
            content: "O1, GPT4, ChatGPT, DALL-E, Whisper",
            tags: ["Intelligent Automation", "NLP", "Data Extraction"],
        },
        {
            title: "AI Avatars for Customer Engagement",
            content: "Claude 3 Opus, Claude 3.5 Sonnet",
            tags: ["Conversational AI", "Virtual Assistants", "Customer Support"],
        },
        {
            title: "Governance Simplification Agent",
            content: "Cohere, Mistral AI, Stability AI",
            tags: ["WhatsApp Chatbot", "Local Governance", "Service Request Automation"],
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 2 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const parentVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
        }),
    };

    return (
        <motion.div
            ref={ref}
            variants={parentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative h-auto w-full bg-[#658FFF] flex items-start justify-center overflow-hidden py-16 pb-20 sm:py-16 sm:pb-24 md:py-16 md:pb-32 lg:py-16 lg:pb-32"
        >
            {/* Decorative Background */}
            <div
                className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] -top-[130px] sm:-top-[190px] md:-top-[260px] left-0 z-0 overflow-hidden rotate-45 origin-top-left"
            >
                <div
                    className="absolute h-[175px] w-[175px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] bg-[#FFFFFF33] origin-top-left rounded-md md:rounded-none"
                ></div>
                <div
                    className="absolute h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] bg-[#E5E5E533] origin-top-left rounded-md md:rounded-none"
                ></div>
                <div
                    className="absolute h-[125px] w-[125px] sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px] bg-[#CACACA33] origin-top-left rounded-md md:rounded-none"
                ></div>
            </div>

            {/* Main Content */}
            <div className="w-[90%] mx-auto h-auto max-h-full flex flex-col items-center justify-center mt-8">
                {/* Title and Description */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-6">
                        <TriangleComponent
                            count={5}
                            iconClassName="text-[18px] sm:text-[20px] md:text-[24px] text-white"
                            Icon={<AiFillCaretLeft />}
                        />
                        <h2 className="text-white font-primary font-medium text-[32px] md:text-3xl">
                            Our <span className="text-primary font-extrabold">Case Studies</span>
                        </h2>
                        <TriangleComponent
                            count={5}
                            iconClassName="text-[18px] sm:text-[20px] md:text-[24px] text-white"
                            Icon={<AiFillCaretRight />}
                        />
                    </div>
                    <p className="text-[16px] sm:text-[18px] text-white mt-4">
                        We have successfully delivered vertical AI agents tailored to specific industry needs. Here are some examples:
                    </p>
                </div>

                {/* Case Study Cards */}
                <div className="w-full px-4">
                    <Slider {...settings}>
                        {cards.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="p-2"
                            >
                                <div
                                    className="w-full max-w-[320px] mx-auto h-[240px] flex flex-col items-start justify-between border-4 border-[#D1DDFF] shadow-lg p-5 gap-4 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-500 rounded-lg"
                                >
                                    <h3 className="font-primary font-bold text-[18px] sm:text-[20px] text-[#A845FF]">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tagItem, tagIndex) => (
                                            <span
                                                key={`${index}-${tagIndex}`}
                                                className="text-[12px] bg-[#EDEDED] rounded-md px-3 py-1 text-center font-medium"
                                            >
                                                {tagItem}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute right-0 top-0">
                <DotComponent rows={4} columns={4} />
            </div>
            <div className="absolute left-0 bottom-0">
                <DotComponent rows={4} columns={4} />
            </div>
        </motion.div>
    );
};

export default OurCaseStudies;
