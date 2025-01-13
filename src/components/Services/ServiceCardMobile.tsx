// ServiceCardMobile Component
"use client"
import Image from 'next/image';
import React from "react";
interface ServiceCardMobileProps {
    title: string;
    description: string;
    link: string;
    image: string;
}


const ServiceCardMobile: React.FC<ServiceCardMobileProps> = ({ title, description, link, image }) => {
    return (
        <div className="service-card-mobile bg-white shadow-md overflow-hidden border border-gray-300 rounded-lg w-full max-w-[300px] mx-auto">
            <div>
                <Image
                    src={image}
                    alt={title}
                    className="w-full object-cover rounded-t-lg"
                    width={300}
                    height={200}
                    layout="intrinsic"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-blue-500 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <a
                    href={link}
                    className="text-blue-500 font-semibold underline hover:text-blue-700 transition duration-200 ease-in-out cursor-pointer"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default ServiceCardMobile;
