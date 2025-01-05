import React from "react";
import Image from "next/image";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const HappyCustomer: React.FC = () => {
    return (
        <div className="w-[100vw] h-[80vh] bg-red-700 flex items-center justify-center">
            {/* Centered container */}
            <div className="h-[80%] w-[90%] flex flex-row  bg-white items-center justify-center">
                {/* Left Section */}
                <div className="h-full w-[40%] bg-black flex flex-col items-start justify-start p-4">
                    <div className="font-primary text-[40px] text-[#365EFF]">
                        <span className="font-bold">Happy</span> Customers
                    </div>

                    <div className="relative flex flex-row  mt-8 w-[400px]">
                        {/* Individual Images */}
                        <div className="w-[100px] h-[100px] border-[6px] border-[#FF8127] rounded-full overflow-hidden">
                            <Image
                                src="/Images/HappyCustomer/HappyCustomer.jpeg"
                                alt="HappyWomenImage"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div
                            className="absolute top-0 left-[85px] w-[100px] h-[100px] border-[6px] border-[#FF8127] rounded-full overflow-hidden">
                            <Image
                                src="/Images/HappyCustomer/HappyCustomer.jpeg"
                                alt="HappyWomenImage"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div
                            className="absolute top-0 left-[170px] w-[100px] h-[100px] border-[6px] border-white rounded-full overflow-hidden">
                            <Image
                                src="/Images/HappyCustomer/HappyCustomer.jpeg"
                                alt="HappyWomenImage"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div
                            className="absolute top-0 right-[50px] w-[100px] h-[100px] border-[6px] border-white rounded-full overflow-hidden">
                            <Image
                                src="/Images/HappyCustomer/HappyCustomer.jpeg"
                                alt="HappyWomenImage"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className=" flex-col w-[90%] h-52 bg-amber-200 mt-8">
                        <div>
                            <p>Comment: Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi ad placerat et posuere erat fermentum habitasse quam. Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi ad placerat et posuere erat fermentum habitasse quam.</p>
                        </div>
                        <div className="flex-row h-[68px] mt-2 w-auto text-black items-center justify-center">
                           <Image src="/Images/Quote.png" height={64} width={64} alt="Quote"/>
                            <div className="flex flex-col">
                                <div className="font-bold font-primary text-[24px]">Lester</div>
                                <div className="font-primary italic text-[24px] font-medium">Detail</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="h-full w-[40%] bg-green-200 flex items-start justify-start">
                    Item 2
                </div>
            </div>
        </div>
    );
};

export default HappyCustomer;
