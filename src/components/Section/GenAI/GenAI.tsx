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
    <div className="flex py-[144px] px-[100px] gap-16 flex-col items-center">
      <div className="text-4xl ">
        <span className="font-extrabold text-blue-600">GenAI</span> Solutions
        and Services
      </div>
      <div className="flex flex-wrap">
        <div>
          End-to-end AI solutions for data integration, automation, and
          intelligent chatbots tailored to your business needs.
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="bg-white m-0.5">
            <div className="font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent px-2 py-1">
              Know More
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex ">
          {items.map(({ title }, index) => (
            <div className="flex flex-col  gap-[40px] items-center flex-1">
              <div className="bg-[#FF8E24] w-[57px] h-[57px] rounded-full flex items-center justify-center border-4 border-white shadow-md shadow-blue-200">
                <div>{index + 1}</div>
              </div>
              <div className="max-w-[220px] font-bold text-lg p-[20] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center text-center">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenAI;
