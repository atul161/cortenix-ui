"use client";
import React from "react";
import TriangleComponent from "./TriangleComponent/TriangleComponent";
import {AiFillCaretLeft, AiFillCaretRight, AiFillLinkedin} from "react-icons/ai";
import DotComponent from "./DotComponent/DotComponent";
import Image from "next/image"; // Importing Image component

const VisionaryTeam = () => {
    const PERSONS = [
        {
            name: "Vinamra Pandiya",
            src: "/Images/VP_Pic.jpeg",
            url: "https://www.linkedin.com/in/vinamrapandiya/",
            description:
                "Industry expert and visionary leader with a track record of driving transformative initiatives.",
        },
        {
            name: "Mayank Gupta",

            src: "/Images/Mayank_Gupta1.jpeg",
            url: "https://www.linkedin.com/in/gmayank/",
            description:
                "Co-founder and director with extensive experience in IT sales and enterprise solutions.",
        },
        {
            name: "Apurv Jain",

            src: "/Images/Apurv.jpeg",
            url: " https://www.linkedin.com/in/apurvjain93/",
            description:
                "Technology innovator passionate about solving complex challenges through AI.",
        },
    ];

    return (
        <div className="flex flex-col items-center md:px-24 md:py-32 sm:py-20 py-16 px-12 lg:pt-24 relative bg-[#F6F6F6]"
             id="team"
        >
            <div className="flex items-center justify-start sm:text-4xl sm:flex sm:flex-wrap gap-4 sm:gap-10">
                <div className="hidden sm:visible">
                    <TriangleComponent
                        count={5}
                        iconClassName="text-[18px] sm:text-[20px] md:text-[24px] text-white"
                        Icon={<AiFillCaretRight color="#FF8E24"/>}
                    />
                </div>
                <div className="text-[32px] md:text-[40px] lg:text-[40px]">
                    Our <span className="font-extrabold">Visionary</span> Team
                </div>
                <div className="hidden sm:visible">
                    <TriangleComponent
                        count={5}
                        iconClassName="text-[18px] sm:text-[20px] md:text-[24px] text-white"
                        Icon={<AiFillCaretLeft color="#FF8E24"/>}
                    />
                </div>
            </div>
            <div className="flex mt-32 sm:mt-40 gap-32 sm:gap-32 flex-wrap">
                {PERSONS.map(({description, name,src ,url}, index) => (
                    <div
                        key={index} // Adding the unique key for each child
                        className="max-w-sm mx-auto bg-[#EDEDED] rounded-xl shadow-md w-72"
                    >
                        <div className="relative">
                            <div className="w-full absolute -top-24 flex justify-center items-center">
                                <Image
                                    src={src} // Replace with the correct path
                                    alt={`${name}'s profile`}
                                    width={160} // Adjust width based on requirements
                                    height={160} // Adjust height based on requirements
                                    className="rounded-full object-contain"
                                />
                            </div>
                            <div className="text-white text-sm px-2 pt-24 rounded-lg">
                                <span></span>
                            </div>
                        </div>
                        <div className="text-center py-4 px-6">
                            <h2 className="text-xl font-semibold text-purple-600">{name}</h2>
                            <div className="mt-4 flex justify-center">
                                <AiFillLinkedin
                                    className="text-blue-600 text-2xl cursor-pointer"
                                    onClick={() => window.open(url, "_blank")}
                                />
                            </div>
                            <p className="text-[#00000099] mt-2 text-[14px] sm:text-[16px] md:text-[16px]">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute left-0 bottom-0 mb-2">
                <DotComponent rows={6} columns={6}/>
            </div>
            <div className="absolute top-8 right-8 mb-2 sm:h-[32px] sm:w-[216px] h-[10px] w-[200px]">
                <svg
                    width="216"
                    height="32"
                    viewBox="0 0 216 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M204.332 0.00138664L188.766 15.6747L204.98 32.001H216.007L199.792 15.6747L215.358 0.00138664H204.332Z"
                        fill="#D3DAE7"
                    />
                    <path
                        d="M177.336 0.00138664L161.77 15.6747L178.114 32.001H189.01L172.796 15.6747L188.362 0.00138664H177.336Z"
                        fill="#D3DAE7"
                    />
                    <path
                        d="M150.486 0.000898361L134.92 15.6742L151.135 32.0005H162.161L145.946 15.6742L161.512 0.000898361H150.486Z"
                        fill="#D3DAE7"
                    />
                    <path
                        d="M123.512 0.00138664L107.945 15.6747L124.29 32.001H135.186L118.971 15.6747L134.538 0.00138664H123.512Z"
                        fill="#D3DAE7"
                    />
                    <path
                        d="M96.2587 0.00138664L80.8223 15.6747L97.0371 32.001H107.933L91.7186 15.6747L107.285 0.00138664H96.2587Z"
                        fill="#D3DAE7"
                    />
                    <path
                        d="M69.41 0.00041008L53.8438 15.6737L70.0586 32H81.0847L64.8698 15.6737L80.4361 0.00041008H69.41Z"
                        fill="#D3DAE7"
                    />
                    <path
                        d="M42.4326 0.00138664L26.9961 15.6747L43.2109 32.001H54.1072L37.8924 15.6747L53.4587 0.00138664H42.4326Z"
                        fill="#D3DAE7"
                    />
                    <path
                        d="M15.5682 0.00138664L0.00195312 15.6747L16.2168 32.001H27.2429L11.028 15.6747L26.5943 0.00138664H15.5682Z"
                        fill="#D3DAE7"
                    />
                </svg>
            </div>
        </div>
    );
};

export default VisionaryTeam;
