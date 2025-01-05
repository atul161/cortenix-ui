"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DotComponent from "@/components/DotComponent/DotComponent";
import Link from "next/link";

const textContainer = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.3,
        },
    },
};

const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonAnimation = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

export default function HeroSection() {
    return (
        <section className="relative max-h-[620px]" id="home">
            <div className="w-[100vw] max-h-[620px] h-[620px] flex hero-background-gradient z-10">
                <div className="relative w-[60%] h-full flex items-center justify-start z-10 overflow-hidden">
                    <motion.div
                        className="relative text-white pl-32"
                        initial="hidden"
                        animate="visible"
                        variants={textContainer}
                    >
                        <motion.h1
                            className="relative text-[52px] lg:text-[52px] font-semibold font-primary mb-6 leading-tight text-shadow-sm text-[#F6F6F6]"
                            variants={textItem}
                        >
                            From <span className="font-bold text-shadow-lg text-[#FF7729]">SaaS</span> to AI:
                            <br />
                            Transforming Enterprises
                        </motion.h1>
                        <motion.p className="text-lg mb-8" variants={textItem}>
                            Technology is evolving rapidly. Enterprises are moving beyond traditional SaaS to
                            embrace Vertical AI Agents, tailored to solve industry-specific challenges and unlock
                            growth. At Cortinex, we lead this transformation, empowering businesses to harness
                            AI’s full potential.
                        </motion.p>
                        <motion.div variants={buttonAnimation}>
                            <Link href="/contact">
                                <button
                                    className="bg-white text-blue-500 font-bold py-3 px-6 shadow-lg hover:bg-gray-200 font-primary text-[28px] border-[#D1DDFF] border-8"
                                >
                                    Join The AI Revolution
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <div className="absolute bottom-3 right-0">
                        <DotComponent rows={4} columns={5} />
                    </div>
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
                </div>

                <div className="w-[40%] relative h-full flex items-center justify-center">
                    <Image
                        src="/HeroImage.jpeg"
                        alt="Rounded Corner Image"
                        fill
                        className="rounded-tl-[220px] object-cover"
                    />
                </div>
            </div>
            <div className="w-[100vw] absolute bottom-0">
                <svg
                    className="w-full h-20"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0C0 0 344 83 719 91.5C1094 100 1440 0 1440 0V100H0V0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
