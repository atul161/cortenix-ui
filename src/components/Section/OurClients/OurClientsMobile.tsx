import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Image from "next/image";

const OurClients: React.FC = () => {
    return (
        <div className="w-screen bg-white flex flex-col items-center p-4">
            {/* Header Section */}
            <div className="w-full max-w-4xl flex flex-col items-center mt-6 mb-8">
                <div className="flex items-center gap-3 font-primary">
                    <BsGlobeCentralSouthAsia
                        className="text-[#435CFF] h-8 w-8 md:h-10 md:w-10"
                        style={{
                            background: "linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    />
                    <h2
                        className="text-2xl md:text-3xl font-bold text-[#435CFF] font-primary"
                        style={{
                            background: "linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Our Clients
                    </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base font-secondary text-center max-w-2xl mt-4">
                    Our clients are central to our mission. We believe that your success drives ours, which is why we are committed to delivering exceptional service and high-quality software solutions tailored to your needs.
                </p>
            </div>

            {/* Client Logos Section */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-4">
                <div className="bg-white shadow-md rounded-lg flex items-center justify-center w-full h-20 md:h-28">
                    <Image
                        src="/Images/Reddy.png"
                        alt="Dr. Reddy's"
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                </div>
                <div className="bg-white shadow-md rounded-lg flex items-center justify-center w-full h-20 md:h-28">
                    <Image
                        src="/Images/IndianGovernment.png"
                        alt="Government of India"
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                </div>
                <div className="bg-white shadow-md rounded-lg flex items-center justify-center w-full h-20 md:h-28">
                    <Image
                        src="/Images/Eris.png"
                        alt="Eris"
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                </div>
                <div className="bg-white shadow-md rounded-lg flex items-center justify-center w-full h-20 md:h-28">
                    <Image
                        src="/Images/Merck.png"
                        alt="Merck"
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurClients;
