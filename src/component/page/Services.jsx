import React from 'react';
import { GiPartyPopper } from 'react-icons/gi';
import { FaCrown, FaHeart, FaGift } from 'react-icons/fa';

const services = [
  {
    title: 'Balloon Garlands',
    description: 'Custom balloon garlands designed to fit your event theme, available in any size and color combination.',
    icon: <GiPartyPopper className="text-pink-500 text-4xl mb-4" />, // replaced FaBalloon
  },
  {
    title: 'Luxury Backdrops',
    description: 'Stunning backdrops to elevate your event’s visual appeal — from shimmer walls to floral arches.',
    icon: <FaCrown className="text-pink-500 text-4xl mb-4" />,
  },
  {
    title: 'Event Styling',
    description: 'We provide full styling for your event, including table settings, props, and coordination.',
    icon: <FaHeart className="text-pink-500 text-4xl mb-4" />,
  },
  {
    title: 'Custom Party Packages',
    description: 'Tailored decoration packages for birthdays, baby showers, weddings, and more.',
    icon: <FaGift className="text-pink-500 text-4xl mb-4" />,
  },
];

const Services = () => {
  return (
    <section className="bg-pink-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Creating memorable moments with vibrant, elegant, and customized balloon décor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
