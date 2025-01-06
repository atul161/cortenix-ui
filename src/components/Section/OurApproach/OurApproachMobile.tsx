"use client";

import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper/modules";

interface CardData {
    src: string;
    title: string;
    description: string;
    details: { heading: string; content: string }[];
}

const cards: CardData[] = [
    {
        src: "/Images/Approach/Compass.png",
        title: "Exploration",
        description:
            "Our journey starts with understanding your business through a thorough evaluation of your needs.",
        details: [
            {
                heading: "In-Depth Analysis",
                content: "Understanding your workflows, challenges, and objectives.",
            },
            {
                heading: "Collaborative Sessions",
                content:
                    "Engaging with your teams to gain insights and refine understanding.",
            },
            {
                heading: "Defining Success Metrics",
                content:
                    "Establishing clear, measurable goals to ensure the project's success.",
            },
        ],
    },
    {
        src: "/Images/Approach/Evaluate.png",
        title: "Strategy",
        description:
            "In the exploration phase, we lay the foundation for innovation by building and refining solutions:",
        details: [
            {
                heading: "Prototyping",
                content:
                    "Developing initial models to test feasibility and functionality.",
            },
            {
                heading: "Fine-Tuning LLMs",
                content:
                    "Customizing large language models to align with your specific requirements.",
            },
            {
                heading: "Business Alignment",
                content:
                    "Ensuring the AI solutions are fully integrated with your objectives and deliver real-world value.",
            },
        ],
    },
    {
        src: "/Images/Approach/Search.png",
        title: "Execution",
        description:
            "The final phase is where ideas take shape and transform into impactful solutions:",
        details: [
            {
                heading: "Workflow Integration",
                content:
                    "Seamlessly embedding vertical AI agents into your operations.",
            },
            {
                heading: "Performance Optimization",
                content: "Continuously fine-tuning models to maximize efficiency.",
            },
            {
                heading: "Seamless Deployment",
                content:
                    "Ensuring a smooth transition from development to live implementation.",
            },
        ],
    },
];

const OurApproachMobile: React.FC = () => {
    return (
        <div className="bg-[#F6F6F6] pb-12 px-4 flex flex-col items-center mt-16 ">
            <h2 className="font-primary font-normal text-[32px] mb-8 text-gray-800 text-center">
                Our <span className="font-bold text-blue-600">Approach</span>
            </h2>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={16}
                slidesPerView={1.2}
                centeredSlides={true}
                className="w-full"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    el: null, // Hide pagination dots
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                            whileHover={{scale: 1.03}}
                        >
                            <div className="flex items-center gap-4 p-4">
                                <Image
                                    src={card.src}
                                    alt={`Image for ${card.title}`}
                                    width={64}
                                    height={64}
                                    className="rounded-full bg-blue-50 p-2"
                                />
                                <div className="flex-1">
                                    <h3 className="text-[#2761FF] font-bold text-[20px]">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-[14px]">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                            <ul className="bg-[#F9F9F9] px-4 py-2 text-gray-700 text-[14px]">
                                {card.details.map((detail, idx) => (
                                    <li key={idx} className="mb-2">
                                        <strong>{detail.heading}:</strong> {detail.content}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="bg-white shadow-lg rounded-lg p-6 mt-8 w-full">
                <p className="text-[16px] font-secondary text-gray-700 leading-relaxed text-center">
                    Our iterative approach ensures your{" "}
                    <span className="text-[#FF782A]">AI agents</span> evolve alongside
                    your business, delivering{" "}
                    <span className="text-[#FF782A]">sustained results</span> and
                    <span className="text-[#FF782A]"> long-term value</span>.
                </p>
                <div className="mt-4 flex justify-center">
                    <Link
                        href="/contact"
                        className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Let&apos;s Partner Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurApproachMobile;
