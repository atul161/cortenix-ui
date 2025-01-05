"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm/ContactForm";
import HeaderComponent from "@/components/Section/Header/HeaderComponent";
import Image from "next/image";

const imageAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const formAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const pageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};

export default function ContactPage() {
    return (
        <motion.div
            className="min-h-screen bg-gray-100 flex flex-col"
            initial="hidden"
            animate="visible"
            variants={pageAnimation}
        >
            <HeaderComponent />
            <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-5 md:px-10 lg:px-20 py-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-8 md:gap-10">
                    {/* Image Section */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                        variants={imageAnimation}
                    >
                        <Image
                            src="/Images/ContactUs/ContactUs.jpeg"
                            alt="Contact Us"
                            width={920}
                            height={920}
                            className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] h-auto object-cover"
                        />
                    </motion.div>

                    {/* Contact Form Section */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-start"
                        variants={formAnimation}
                    >
                        <div className="w-full max-w-md md:max-w-lg">
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </main>
        </motion.div>
    );
}
