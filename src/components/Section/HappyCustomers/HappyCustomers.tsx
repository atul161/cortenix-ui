"use client";

import React from "react";
import Image from "next/image";

const HappyCustomer: React.FC = () => {
    return (
        <div className="w-[100vw] h-[130vh] sm:w-[100vw] sm:h-[110vh] bg-gray-200 flex items-center justify-center">
            {/* Centered container */}
            <div className="h-[80%] w-[95%] md:w-[90%] flex flex-col md:flex-row items-center justify-center">
                {/* Left Section */}
                <div className="h-full w-full md:w-[50%] lg:w-[45%] flex flex-col items-start justify-start p-4 md:p-6">
                    <div className="font-primary text-[30px] sm:text-[30px] md:text-[30px] lg:text-[44px] text-black">
                        <span className="font-bold text-[#365EFF]">Happy</span> Customers
                    </div>

                    <div className="relative flex flex-row mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-[300px] sm:w-[350px] md:w-[400px]">
                        {/* Individual Images */}
                        <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border-[4px] sm:border-[6px] border-[#FF8127] rounded-full overflow-hidden">
                            <Image
                                src="/Images/HappyCustomer/HappyCustomer.jpeg"
                                alt="HappyWomenImage"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div
                            className="absolute top-0 left-[65px] sm:left-[85px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border-[4px] sm:border-[6px] border-[#FF8127] rounded-full overflow-hidden">
                            <Image
                                src="/Images/HappyCustomer/HappyCustomer.jpeg"
                                alt="HappyWomenImage"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div
                            className="absolute top-0 left-[130px] sm:left-[170px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border-[4px] sm:border-[6px] border-white rounded-full overflow-hidden">
                            <Image
                                src="/Images/HappyCustomer/HappyCustomer.jpeg"
                                alt="HappyWomenImage"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div
                            className="absolute top-0 right-[40px] sm:right-[50px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border-[4px] sm:border-[6px] border-white rounded-full overflow-hidden">
                            <Image
                                src="/Images/HappyCustomer/HappyCustomer.jpeg"
                                alt="HappyWomenImage"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-col w-full md:w-[95%] bg-white mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 md:px-10 py-4 sm:py-6">
                        <div>
                            <p>Comment: Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi ad placerat et posuere erat fermentum habitasse quam. Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi ad placerat et posuere erat fermentum habitasse quam.</p>
                        </div>
                        <div className="flex mt-4 sm:mt-6 text-black items-start justify-start gap-3">
                            <svg fill="#A845FF" width="60px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3,4 L10,4 C10.5128358,4 10.9355072,4.38604019 10.9932723,4.88337887 L11,5 L11,13 C11,13.0716547 10.9922987,13.1429971 10.9770938,13.2128093 L10.9486833,13.3162278 L8.9486833,19.3162278 C8.82494326,19.6874479 8.49787694,19.9488234 8.11604424,19.9932782 L8,20 L4,20 C3.35759273,20 2.89286934,19.4076597 3.02036916,18.7981217 L3.0513167,18.6837722 L4.61257411,14 L3,14 C2.48716416,14 2.06449284,13.6139598 2.00672773,13.1166211 L2,13 L2,5 C2,4.48716416 2.38604019,4.06449284 2.88337887,4.00672773 L3,4 L10,4 L3,4 Z M14,4 L21,4 C21.5128358,4 21.9355072,4.38604019 21.9932723,4.88337887 L22,5 L22,13 C22,13.0716547 21.9922987,13.1429971 21.9770938,13.2128093 L21.9486833,13.3162278 L19.9486833,19.3162278 C19.8249433,19.6874479 19.4978769,19.9488234 19.1160442,19.9932782 L19,20 L15,20 C14.3575927,20 13.8928693,19.4076597 14.0203692,18.7981217 L14.0513167,18.6837722 L15.6125741,14 L14,14 C13.4871642,14 13.0644928,13.6139598 13.0067277,13.1166211 L13,13 L13,5 C13,4.48716416 13.3860402,4.06449284 13.8833789,4.00672773 L14,4 L21,4 L14,4 Z"/>
                            </svg>
                            <div className="flex flex-col">
                                <div className="font-bold font-primary text-[20px] sm:text-[24px]">Lester</div>
                                <div className="font-primary italic text-[14px] sm:text-[16px] font-medium">Detail</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="h-[80%] w-[90%] sm:h-[80%] md:h-[80%] md:mb-28 xl:h-[80%] xl:mb-24 2xl:h-[80%] 2xl:mb-20 md:w-[50%] lg:w-[45%] bg-green-200 flex items-start justify-start relative">
                    <Image
                        src="/Images/HappyCustomer/HappyCustomer1.jpeg"
                        alt="Description"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HappyCustomer;
