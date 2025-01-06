"use client";
import {motion} from "framer-motion";
import Image from "next/image";
import DotComponent from "@/components/DotComponent/DotComponent";
import Link from "next/link";

const textContainer = {
    hidden: {opacity: 0, y: 50},
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
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
};

const buttonAnimation = {
    hidden: {scale: 0.9, opacity: 0},
    visible: {scale: 1, opacity: 1, transition: {duration: 1}},
};

export default function HeroSectionMobile() {
    return (
        <section className="relative max-h-screen" id="home">
            <div className="w-[100vw] h-auto flex flex-col hero-background-gradient z-10">
                {/* Text Section */}
                <motion.div
                    className="relative w-full px-6 py-8 flex flex-col items-center text-center z-10"
                    initial="hidden"
                    animate="visible"
                    variants={textContainer}
                >
                    <motion.h1
                        className="text-[32px] sm:text-[40px] font-semibold font-primary mb-4 leading-tight text-shadow-sm text-[#F6F6F6]"
                        variants={textItem}
                    >
                        From <span
                        style={{
                            fontWeight: 'bold',
                            color: '#FF7729',
                            textShadow: '3px 3px 3px rgba(0, 0, 0, 0.10)',
                        }}
                    >
  SaaS to AI
</span>
                        :
                        <br/>
                        Transforming Enterprises
                    </motion.h1>
                    <motion.p
                        className="text-md sm:text-lg mb-6 text-[#F6F6F6]"
                        variants={textItem}
                    >
                        Technology is evolving rapidly. Enterprises are moving beyond traditional SaaS to
                        embrace Vertical AI Agents, tailored to solve industry-specific challenges and unlock
                        growth. At Cortinex, we lead this transformation, empowering businesses to harness
                        AI’s full potential.
                    </motion.p>
                    <motion.div variants={buttonAnimation}>
                        <Link href="/contact">
                            <button
                                className="bg-white font-bold py-2 px-4 sm:py-3 sm:px-6 shadow-lg hover:bg-gray-200 font-primary text-[20px] sm:text-[24px] border-[#D1DDFF] border-4"
                            >
  <span
      style={{
          background: 'linear-gradient(90deg, #2761FF 0%, #A845FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
      }}
  >
    Join The AI Revolution
  </span>
                            </button>

                        </Link>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="relative w-full flex justify-center mt-4">
                    {typeof window !== "undefined" && <DotComponent rows={3} columns={4}/>}
                    <div
                        className="absolute w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] -top-12 left-6 z-0 overflow-hidden rotate-45 origin-top-left">
                        <div
                            className="absolute h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] bg-[#FFFFFF33] origin-top-left rounded-md"
                        ></div>
                        <div
                            className="absolute h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] bg-[#E5E5E533] origin-top-left rounded-md"
                        ></div>
                        <div
                            className="absolute h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] bg-[#CACACA33] origin-top-left rounded-md"
                        ></div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full mt-6 relative flex justify-center">
                    <motion.div
                        className="w-[90%] sm:w-[70%] rounded-xl overflow-hidden"
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1, ease: "easeOut"}}
                    >
                        <Image
                            src="/HeroImage.jpeg"
                            alt="Hero Image"
                            width={600}
                            height={400}
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
