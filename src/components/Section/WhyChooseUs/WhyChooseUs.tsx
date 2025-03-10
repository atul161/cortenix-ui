"use client";
import {motion} from "framer-motion";
import DotComponent from "@/components/DotComponent/DotComponent";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs = () => {
    const items = [
        {title: "Deep Expertise in AI"},
        {title: "Proven Track Record"},
        {title: "Cross-Industry Knowledge"},
        {title: "Commitment to Excellence"},
    ];

    return (
        <motion.div
            className="py-28 lg:pt-24 bg-[#EDEDED] relative"
            id="why-us"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
            viewport={{once: true}}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-start mb-16">
                    <div className="text-[32px] md:text-[40px] lg:text-[40px]">
                        Why Choose <span className="font-extrabold text-blue-600">Us?</span>
                    </div>
                    <div className="flex md:justify-between justify-center mt-16 flex-wrap">
                        <p className="flex text-start text-lg text-gray-600 max-w-2xl">
                            Creating exceptional vertical AI agents requires a unique blend of
                            skills and experience. Here&apos;s why we are your ideal partner:
                        </p>
                        <Link href="/contact" className="z-10">
                            <button
                                className="border-2 border-blue-500 text-blue-500 font-semibold text-lg px-8 py-4 font-primary transition-transform transform hover:scale-105  ">
                                Speak With Our Experts
                            </button>
                        </Link>
                    </div>
                </div>
                <motion.div
                    className="flex gap-16 flex-wrap"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1, delayChildren: 0.3, staggerChildren: 0.2}}
                    viewport={{once: true}}
                >
                    <motion.div
                        className="flex gap-8 flex-col flex-1"
                        initial={{x: -50, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
                    >
                        {items.map(({title}, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md flex flex-col items-start"
                                initial={{y: 20, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                transition={{duration: 0.6}}
                            >
                                <div className="flex items-center">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold p-[18px] text-2xl">
                                        0{index + 1}
                                    </div>
                                    <div className="font-semibold lg:text-2xl md:text-2xl px-6 py-4">
                                        {title}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="md:flex-1"
                        initial={{scale: 0.9, opacity: 0}}
                        whileInView={{scale: 1, opacity: 1}}
                        transition={{duration: 1}}
                    >
                        <Image
                            src="/Images/people.png"
                            alt="Why Choose Us"
                            width={500}
                            height={400}
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div className="absolute left-0 bottom-0 mb-2">
                <DotComponent rows={6} columns={6}/>
            </div>
            <div className="absolute top-0 right-0">
                <div
                    className={`border-[30px] md:h-[350px] md:w-[350px] w-[150px] h-[150px] border-t-0 border-r-0`}
                    style={{
                        borderRadius: "0 0 0 100%",
                        borderColor: "#FF974190",
                    }}
                />
            </div>
        </motion.div>
    );
};

export default WhyChooseUs;
