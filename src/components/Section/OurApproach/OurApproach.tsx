import React, {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Pentagon from "@/components/PentagonComponent/Pentagon";
import Link from "next/link";
import DotComponent from "@/components/DotComponent/DotComponent";

interface CardData {
    src: string;
    title: string;
    description: string;
    details: { heading: string; content: string }[];
}

const cardVariants = {
    initial: { scale: 1, rotateY: 0 },
    hover: {
        scale: 1.05,
        rotateY: 10,
        transition: { type: "spring", stiffness: 200, damping: 15 },
    },
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 150, damping: 20 },
    },
};

const cards: CardData[] = [
    {
        src: "/Images/Approach/Compass.png",
        title: "Exploration",
        description: "Our journey starts with understanding your business through a thorough evaluation of your needs.",
        details: [
            {
                heading: "In-Depth Analysis",
                content: "Understanding your workflows, challenges, and objectives.",
            },
            {
                heading: "Collaborative Sessions",
                content: "Engaging with your teams to gain insights and refine understanding.",
            },
            {
                heading: "Defining Success Metrics",
                content: "Establishing clear, measurable goals to ensure the project's success.",
            },
        ],
    },
    {
        src: "/Images/Approach/Evaluate.png",
        title: "Strategy",
        description: "In the exploration phase, we lay the foundation for innovation by building and refining solutions:",
        details: [
            {
                heading: "Prototyping",
                content: "Developing initial models to test feasibility and functionality.",
            },
            {
                heading: "Fine-Tuning LLMs",
                content: "Customizing large language models to align with your specific requirements.",
            },
            {
                heading: "Business Alignment",
                content: " Ensuring the AI solutions are fully integrated with your objectives and deliver real-world value.",
            },
        ],
    },
    {
        src: "/Images/Approach/Search.png",
        title: "Execution",
        description: "The final phase is where ideas take shape and transform into impactful solutions:",
        details: [
            {
                heading: "Workflow Integration",
                content: "Seamlessly embedding vertical AI agents into your operations.",
            },
            {
                heading: "Performance Optimization",
                content: "Continuously fine-tuning models to maximize efficiency.",
            },
            {
                heading: "Seamless Deployment:",
                content: "Ensuring a smooth transition from development to live implementation.",
            },
        ],
    },
];

const OurApproach: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const xchildRef = useRef<HTMLDivElement>(null);
    const xchild2ImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (xchildRef.current && xchild2ImageRef.current) {
            const xchildHeight = xchildRef.current.offsetHeight;

            // Set both height and width to make the image square
            xchild2ImageRef.current.style.height = `${xchildHeight}px`;
            xchild2ImageRef.current.style.width = `${xchildHeight}px`;
        }
    }, []);

    return (
        <div className="relative w-screen bg-[#F6F6F6] flex flex-col items-center justify-center overflow-hidden py-16"
             onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

            <div className="absolute bottom-72 right-0">
                <DotComponent rows={12} columns={7}/>
            </div>
            <h2 className="font-primary font-normal text-[32px] md:text-[40px] mb-12 text-gray-800">
                Our <span className="font-bold text-blue-600">Approach</span>
            </h2>

            <div className=" mt-6 flex flex-wrap gap-8 justify-center">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white shadow-xl w-[300px] md:w-[350px] h-[400px] flex items-center justify-center group"
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                    >
                        {/* Pentagon */}
                        <div className="absolute -top-3 left-6">
                            <Pentagon label={`0${index + 1}`}/>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full h-full p-6">
                            {/* Image and Title */}
                            <div className="group flex flex-col items-center gap-2">
                                <div
                                    className="flex flex-col items-center gap-2 transition-opacity duration-300 group-hover:opacity-0 group-hover:hidden">
                                    <Image
                                        src={card.src}
                                        alt={`Image representing ${card.title}`}
                                        width={48}
                                        height={48}
                                        priority
                                    />
                                    <div className="text-[#2761FF] font-primary font-bold text-[20px] md:text-[24px]">
                                        {card.title}
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <motion.div
                                className="hidden group-hover:block text-gray-600 text-[14px] md:text-[14px] font-secondary text-left space-y-4 text-[#00000099] mt-4"
                                variants={contentVariants}
                                initial="hidden"
                                animate={isHovered ? "visible" : "hidden"}
                                whileHover="visible"
                            >
                                <p>{card.description}</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    {card.details.map((detail, idx) => (
                                        <li key={idx}>
                                            <strong>{detail.heading}:</strong> {detail.content}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="w-[60%] rounded-lg flex flex-row justify-start items-start p-6 mt-8">
                {/* Left Section */}
                <div
                    id="xchild"
                    ref={xchildRef}
                    className="flex flex-col justify-between items-start space-y-4 bg-opacity-40 backdrop-blur-md max-w-[65%] p-4 bg-white shadow-lg"
                >
                    <p className="text-[18px] font-secondary leading-relaxed">
                        Our iterative approach ensures your <span className="text-[#FF782A]">AI agents</span> evolve
                        alongside your business, delivering <span
                        className="text-[#FF782A]">sustained results</span> and
                        <span className="text-[#FF782A]"> long-term value</span>.
                    </p>
                    <Link
                        href="/#get-started"
                        className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
                    >
                        Let's Partner Up
                    </Link>
                </div>

                {/* Right Section */}
                <div className="ml-8" id="xchild2">
                    <Image
                        src="/Images/Approach/AI.png"
                        alt="AI image"
                        width={100}
                        height={0}
                        quality={100}
                        className="object-cover"
                        ref={xchild2ImageRef}
                    />
                </div>
            </div>




        </div>
    );
};

export default OurApproach;
