"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ServiceCardMobile from "@/components/Services/ServiceCardMobile";

const servicesData = [
    {
        title: 'AI Vertical Agents',
        description:
            'Revolutionize your industry with tailored AI solutions that address specific challenges, streamline processes, and enhance decision-making.',
        link: '#',
        image: '/images/ServicesPhotos/ai-vertical.png',
    },
    {
        title: 'Cybersecurity',
        description:
            'Secure your enterprise with cutting-edge cybersecurity services. From threat detection to vulnerability management, we protect your digital assets.',
        link: '#',
        image: '/images/ServicesPhotos/cyber-security.png',
    },
    {
        title: 'UX Design',
        description:
            'Deliver exceptional user experiences with our innovative UX design services. We combine creativity and functionality to design intuitive interfaces.',
        link: '#',
        image: '/images/ServicesPhotos/ux-designer.png',
    },
    {
        title: 'Salesforce Services',
        description:
            'Unlock the power of Salesforce with our customized solutions. From implementation to optimization, we help you leverage Salesforce to drive sales.',
        link: '#',
        image: '/images/ServicesPhotos/salesforce-services.png',
    },
    {
        title: 'Full-Stack Development',
        description:
            'Our full-stack developers excel in MERN stack, seamlessly combining MongoDB, Express.js, React, and Node.js to create high-performance web applications.',
        link: '#',
        image: '/images/ServicesPhotos/full-stack-development.png',
    },
    {
        title: 'Digital Product Development',
        description:
            'From ideation to deployment, we provide end-to-end digital product development services, leveraging the latest technologies to bring your ideas to life.',
        link: '#',
        image: '/images/ServicesPhotos/digital-product-development.png',
    },
];
const ServiceSectionMobile: React.FC = () => {
    return (
        <section className="relative py-8 bg-gray-100 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">
                        <span className="text-black">Our </span>
                        <span className="text-[#2761FF] font-extrabold">Services</span>
                    </h2>
                    <p className="text-gray-600">
                        Explore our comprehensive suite of services, designed to drive innovation and create tangible business impact.
                    </p>
                </div>

                <Swiper
                    spaceBetween={16}
                    slidesPerView={1.2}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="service-carousel"
                >
                    {servicesData.map((service, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <ServiceCardMobile {...service} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ServiceSectionMobile;
