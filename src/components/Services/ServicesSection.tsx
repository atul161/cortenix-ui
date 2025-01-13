import React from 'react';
import ServiceCard from './ServiceCard';
import Image from "next/image";
const servicesData = [
  {
    title: 'AI Vertical Agents',
    description:
        'Revolutionize your industry with tailored AI solutions that address specific challenges, streamline processes, and enhance decision-making.',
    link: '#',
    image: '/Images/ServicesPhotos/ai-vertical.png',
  },
  {
    title: 'Cybersecurity',
    description:
        'Secure your enterprise with cutting-edge cybersecurity services. From threat detection to vulnerability management, we protect your digital assets.',
    link: '#',
    image: '/Images/ServicesPhotos/cyber-security.png',
  },
  {
    title: 'UX Design',
    description:
        'Deliver exceptional user experiences with our innovative UX design services. We combine creativity and functionality to design intuitive interfaces.',
    link: '#',
    image: '/Images/ServicesPhotos/ux-designer.png',
  },
  {
    title: 'Salesforce Services',
    description:
        'Unlock the power of Salesforce with our customized solutions. From implementation to optimization, we help you leverage Salesforce to drive sales.',
    link: '#',
    image: '/Images/ServicesPhotos/salesforce-services.png',
  },
  {
    title: 'Full-Stack Development',
    description:
        'Our full-stack developers excel in MERN stack, seamlessly combining MongoDB, Express.js, React, and Node.js to create high-performance web applications.',
    link: '#',
    image: '/Images/ServicesPhotos/full-stack-development.png',
  },
  {
    title: 'Digital Product Development',
    description:
        'From ideation to deployment, we provide end-to-end digital product development services, leveraging the latest technologies to bring your ideas to life.',
    link: '#',
    image: '/Images/ServicesPhotos/digital-product-development.png',
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold">
              <span className="text-black">Our </span>
              <span className="text-[#2761FF] font-extrabold">Services</span>
            </h2>
            <p className="text-gray-600">
              Explore our comprehensive suite of services, designed to drive
              innovation and create tangible business impact.
            </p>
          </div>
          <button
            className="text-[#2761FF] border-2 border-[#A845FF] bg-transparent px-5 py-1 xl:px-6 xl:py-2 font-primary transition-all duration-200 ease-in-out cursor-pointer
              hover:bg-[#FF5733] hover:text-white hover:border-[#FF5733] focus:outline-none"
          >
            Know More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
          {servicesData.map((service, index) => (
            <div className="relative" key={index}>
              {/* Cybersecurity Ellipse */}
              {service.title === 'Cybersecurity' && (
                <Image
                  src="/Images/ServicesPhotos/ellipse4.png"
                  alt="Ellipse for Cybersecurity"
                  width={100}
                  height={100}
                  className="absolute w-48 h-72 top-4 right-12 transform translate-x-2/4 -translate-y-3/4 opacity-75 z-0"
                />
              )}
              {/* Full-Stack Development Ellipse */}
              {service.title === 'Full-Stack Development' && (
                <Image
                  src="/Images/ServicesPhotos/ellipse5.png"
                  alt="Ellipse for Full-Stack Development"
                  width={200}
                  height={200}
                  className="absolute w-48 h-82 bottom-4 left-18 transform -translate-x-2/4 translate-y-2/4 opacity-75 z-0"
                />
              )}
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
