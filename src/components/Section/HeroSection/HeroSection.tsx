import Image from "next/image";
import DotComponent from "@/components/DotComponent/DotComponent";
import styles from "./HeroSection.module.css";
import TriangleComponent from "@/components/TriangleComponent/TriangleComponent";

export default function HeroSection() {
    return (
        <section className="relative max-h-[620px] ">
            <div className="w-[100vw] max-h-[620px] h-[620px] flex hero-background-gradient z-10">
                <div className="relative w-[60%] h-full flex items-center justify-start z-10 overflow-hidden">
                    <div className="relative text-white pl-32">
                        <h1 className=" relative text-[52px] lg:text-[52px] font-semibold font-primary mb-6 leading-tight text-shadow-sm text-[#F6F6F6]">
                            From <span className="font-bold text-shadow-lg text-[#FF7729]">SaaS</span> to AI:
                            <br/>
                            Transforming Enterprises
                            {/*<div className="absolute  top-5 right-30">*/}
                            {/*    <TriangleComponent count={5}/>*/}
                            {/*</div>*/}
                        </h1>
                        <p className="text-lg mb-8">
                            Technology is evolving rapidly. Enterprises are moving beyond traditional SaaS to
                            embrace Vertical AI Agents, tailored to solve industry-specific challenges and unlock
                            growth. At Cortinex, we lead this transformation, empowering businesses to harness
                            AI’s full potential.
                        </p>
                        <button
                            className="bg-white text-blue-500 font-bold py-3 px-6 shadow-lg hover:bg-gray-200 font-primary text-[28px] border-[#D1DDFF] border-8">
                            Join The AI Revolution
                        </button>
                    </div>
                    <div className="absolute bottom-3 right-0">
                        <DotComponent rows={4} columns={5}/>
                    </div>
                    <div
                        className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] -top-[130px] sm:-top-[190px] md:-top-[260px] left-0 z-0 overflow-hidden rotate-45 origin-top-left">
                        {/* Outer Most Layer */}
                        <div
                            className="absolute h-[175px] w-[175px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] bg-[#FFFFFF33] origin-top-left rounded-md md:rounded-none"></div>

                        {/* Middle Layer */}
                        <div
                            className="absolute h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] bg-[#E5E5E533] origin-top-left rounded-md md:rounded-none"></div>

                        {/* Inner Most Layer */}
                        <div
                            className="absolute h-[125px] w-[125px] sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px] bg-[#CACACA33] origin-top-left rounded-md md:rounded-none"></div>
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
            {/* Clip Circle */}
            <div className="w-[100vw] absolute bottom-0">
                <svg
                    className="w-full h-20"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0C0 0 344 83 719 91.5C1094 100 1440 0 1440 0V100H0V0Z" fill="white"/>
                </svg>
            </div>

        </section>
    );
}
