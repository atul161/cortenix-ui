"use client"
import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import DotComponent from "@/components/DotComponent/DotComponent";

const OurClients: React.FC = () => {
  return (
    <div className="relative w-screen bg-white flex items-center justify-start pl-32 overflow-hidden">
      {/* Header Section */}
      <div className="absolute left-0 bottom-8 top-10 mb-2">
        <DotComponent rows={22} columns={3} />
      </div>
      <div className="w-[100%] lg:w-[95%] max-h-auto flex-col items-start mt-10 lg:mt-20 mb-12 ">
        <div className="flex flex-col ml-20">
          <div className="flex items-center justify-start gap-4 lg:gap-6 font-primary ">
            <BsGlobeCentralSouthAsia
              className="text-[#435CFF] h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
              style={{
                background: "linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
            <h2
              className="text-[28px] lg:text-[40px] font-bold text-[#435CFF] font-primary"
              style={{
                background: "linear-gradient(90deg, #435CFF 0%, #834EFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Clients
            </h2>
          </div>
          <p className="text-gray-600 text-[16px] lg:text-[18px] font-secondary max-w-full lg:max-w-3xl mt-4 lg:mt-8">
            Our clients are central to our mission. We believe that your success
            drives ours, which is why we are committed to delivering exceptional
            service and high-quality software solutions tailored to your needs.
          </p>

          {/* Client Logos Section */}
          <div className="flex flex-wrap p-4 gap-6 lg:gap-12 justify-center lg:justify-start mt-6">
            {[
              { src: "/Images/Reddy.png", alt: "Dr. Reddy's" },
              {
                src: "/Images/IndianGovernment.png",
                alt: "Government of India",
              },
              { src: "/Images/Eris.png", alt: "Eris" },
              { src: "/Images/Merck.png", alt: "Merck" },
            ].map((client, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-xl rounded-lg flex items-center justify-center w-40 h-20 lg:w-60 lg:h-28"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={100}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
