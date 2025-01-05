"use client"
import DownArrow from "@/components/DownArrow";
import Link from "next/link";
import React from "react";

type Props = {};
const GenAI = (props: Props) => {
    const items = [
        {
            title: "Generative AI Solutions",
        },
        {
            title: "AI and Data Integration",
        },
        {
            title: "Custom AI Development",
        },
        {
            title: "AI Agents and Task Automation",
        },
        {
            title: "Advanced Chatbot Development",
        },
    ];
    return (
        <div className="flex lg:py-36 md:py-18 py-9 lg:px-[100px] md:px-12 px-6 gap-16 flex-col items-center z-10">
            <div className="text-4xl ">
                <span className="font-extrabold text-blue-600">GenAI</span> Solutions
                and Services
            </div>
            <div className="flex md:justify-between justify-center items-center gap-16 flex-wrap">
                <div>
                    End-to-end AI solutions for data integration, automation, and
                    intelligent chatbots tailored to your business needs.
                </div>
                <Link href="/contact">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg px-6 py-2 transition-transform transform hover:scale-105">
                        Know More
                    </button>
                </Link>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
                {items.map(({ title }, index) => (
                    <div
                        className="flex flex-col gap-[40px] items-center"
                        key={`item-${index}`}
                    >
                        <div className="flex items-center flex-1 w-full">
                            <div
                                style={{
                                    flexGrow: 1,
                                    height: 2,
                                    background:
                                        "repeating-linear-gradient(  to right,  #D3DAE7,  #D3DAE7 5px,  transparent 5px,  transparent 10px)",
                                }}
                            ></div>
                            <div className="bg-[#FF8E24] w-[57px] h-[57px] rounded-full flex items-center justify-center border-4 border-white shadow-md shadow-blue-200">
                                <div>{index + 1}</div>
                            </div>
                            <div
                                style={{
                                    flexGrow: 1,
                                    height: 2,
                                    background:
                                        "repeating-linear-gradient(  to right,  #D3DAE7,  #D3DAE7 5px,  transparent 5px,  transparent 10px)",
                                }}
                            ></div>
                        </div>
                        <div className="max-w-[220px] font-bold text-lg p-[20px] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center justify-center text-center border border-solid border-[#ebe5e7] shadow-[0px_0px_16px_rgba(43,99,225,0.1)] ">
                            {title}
                        </div>
                    </div>
                ))}
            </div>

            <DownArrow />
        </div>
    );
};

export default GenAI;
