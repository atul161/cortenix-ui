import Image from "next/image";
import DotComponent from "@/components/DotComponent/DotComponent";

export default function HeroSectionMobile() {
    return (
        <section className="relative max-h-[620px] ">
            <div className="w-[100vw] h-auto flex flex-col hero-background-gradient z-10">
                {/* Text Section */}
                <div className="relative w-full px-6 py-8 flex flex-col items-center text-center z-10">
                    <h1 className="text-[32px] sm:text-[40px] font-semibold font-primary mb-4 leading-tight text-shadow-sm text-[#F6F6F6]">
                        From <span className="font-bold text-shadow-lg text-[#FF7729]">SaaS</span> to AI:
                        <br />
                        Transforming Enterprises
                    </h1>
                    <p className="text-md sm:text-lg mb-6 text-[#F6F6F6]">
                        Technology is evolving rapidly. Enterprises are moving beyond traditional SaaS to
                        embrace Vertical AI Agents, tailored to solve industry-specific challenges and unlock
                        growth. At Cortinex, we lead this transformation, empowering businesses to harness
                        AI’s full potential.
                    </p>
                    <button
                        className="bg-white text-blue-500 font-bold py-2 px-4 sm:py-3 sm:px-6 shadow-lg hover:bg-gray-200 font-primary text-[20px] sm:text-[24px] border-[#D1DDFF] border-4">
                        Join The AI Revolution
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="relative w-full flex justify-center mt-4">
                    <DotComponent rows={3} columns={4} />
                    <div className="absolute w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] -top-12 left-6 z-0 overflow-hidden rotate-45 origin-top-left">
                        <div
                            className="absolute h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] bg-[#FFFFFF33] origin-top-left rounded-md"></div>
                        <div
                            className="absolute h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] bg-[#E5E5E533] origin-top-left rounded-md"></div>
                        <div
                            className="absolute h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] bg-[#CACACA33] origin-top-left rounded-md"></div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full mt-6 relative flex justify-center">
                    <div className="w-[90%] sm:w-[70%] rounded-xl overflow-hidden">
                        <Image
                            src="/HeroImage.jpeg"
                            alt="Hero Image"
                            width={600}
                            height={400}
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}