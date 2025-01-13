import React from 'react';
import Image from 'next/image'; // Import Image from next/image

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link, image }) => {
  return (
    <div className="service-card bg-white shadow-md overflow-hidden border border-gray-300 transition transform hover:shadow-lg hover:scale-105">
      <div>
        {/* Replace <img> with <Image /> from Next.js */}
        <Image
          src={image}
          alt={title}
          className="w-full object-cover"
          width={500} // Set an appropriate width for your image
          height={300} // Set an appropriate height for your image
          layout="intrinsic" // Use "intrinsic" for responsive behavior
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-md md:text-lg lg:text-xl font-bold text-blue-500 mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-4">{description}</p>
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

export default ServiceCard;
