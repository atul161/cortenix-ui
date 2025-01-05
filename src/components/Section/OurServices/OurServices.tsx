import React from "react";

type Props = {};

const OurServices = (props: Props) => {
  const ITEMS = [
    {
      image: "aiVertical.png",
      title: "AI Vertical Agents",
      description:
        "Revolutionize your industry with tailored AI solutions that address specific challenges, streamline processes, and enhance decision-making. Our expertise in building vertical AI agents ensures personalized, scalable, and impactful solutions for your business.",
    },
    {
      image: "aiVertical.png",
      title: "AI Vertical Agents",
      description:
        "Revolutionize your industry with tailored AI solutions that address specific challenges, streamline processes, and enhance decision-making. Our expertise in building vertical AI agents ensures personalized, scalable, and impactful solutions for your business.",
    },
    {
      image: "aiVertical.png",
      title: "AI Vertical Agents",
      description:
        "Revolutionize your industry with tailored AI solutions that address specific challenges, streamline processes, and enhance decision-making. Our expertise in building vertical AI agents ensures personalized, scalable, and impactful solutions for your business.",
    },
    {
      image: "aiVertical.png",
      title: "AI Vertical Agents",
      description:
        "Revolutionize your industry with tailored AI solutions that address specific challenges, streamline processes, and enhance decision-making. Our expertise in building vertical AI agents ensures personalized, scalable, and impactful solutions for your business.",
    },
  ];
  return (
    <div className="flex flex-col py-32 px-48 justify-between items-center gap-16">
      {/* header */}
      <div className="flex flex-col gap-8">
        <div className="text-4xl">
          Our <span className="font-bold">Services</span>
        </div>
        <div className="flex flex-wrap items-center gap-40">
          <div className="text-lg ">
            Explore our comprehensive suite of services, designed to drive
            innovation and create tangible business impact. Click on each
            service to learn more.
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 sm:flex-1">
            <div className="bg-white m-0.5">
              <div className="font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent px-2 py-1">
                Know More
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {ITEMS.map(({ image, description, title }) => (
          <div className="bg-white w-[512px] h-[512px] ">
            <div className="relative">
              <img
                src={`Images/OurServices/${image}`}
                // width={504}
                height={233}
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 sm:flex-1 absolute bottom-4 left-4">
                <div className="bg-white m-0.5">
                  <div className="font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent px-2 py-1">
                    {title}
                  </div>
                </div>
              </button>
            </div>

            <div className="py-4 px-6 flex flex-col justify-between h-[272px]">
              <div>{description}</div>
              <div className="underline text-[#FF7729]">Learn More</div>
            </div>
          </div>
        ))}
      </div>
      {/* absolute items */}
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default OurServices;
